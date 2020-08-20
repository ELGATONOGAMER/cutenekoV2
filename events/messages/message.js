const Discord = require("discord.js")
const { crearDB } = require("megadb")
const cooldowns = new Discord.Collection()

module.exports =
  async (cute, message) => {
  
  const prefixdb = new crearDB("serveropts")
  const dev_db = new crearDB("devs");

  const prefix = prefixdb.tiene(`${message.guild.id}.prefix`) ? await prefixdb.obtener(`${message.guild.id}.prefix`) : "g?"
  
    if(message.content.startsWith("<@"+cute.user.id+"> help") || message.content.startsWith("<@!"+cute.user.id+"> help")) {
      
     if(message.author.bot) return  

    const embed = new Discord.MessageEmbed()
      .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
      .setDescription(`¿Te olvidaste de mi prefix? Prefix: \`${prefix}\`\n\nUsa: \`${prefix}help\` para mas informacion.`)
      
      .setColor("RANDOM")
    message.channel.send(embed)
      
     
  }
  
  if(!message.content.startsWith(prefix) || message.author.bot) return

	const args = message.content.slice(prefix.length).split(/ +/)
	const command = args.shift().toLowerCase()

	const cmd = cute.commands.get(command) || cute.commands.find(c => c.alias && c.alias.includes(command))
  

	if (!cmd) {

    const randomcmd = cute.commands.map(c => c.name)[Math.floor(cute.commands.size * Math.random())]
    const samecmd = command.length < 1 ? randomcmd : cute.commands.filter(c => c.name !== "reload" && c.name !== "eval" && c.name !== "vip" && c.name !== "devs" && (c.name.toLowerCase().includes(command) || (c.alias && c.alias.includes(command)))).map(c => c.name).join("`, `")
    const maybecmd = samecmd ? `\n<a:cloading:713914246601113693> | Talvez quisiste usar: \`${samecmd}\`` : ``
          
    return message.channel.send(`<a:cloading:713914246601113693> | ¡No encuentro ese comando!  ${maybecmd}`)
  
  } 
    
  
	if (!cooldowns.has(cmd.name)) {
    
		cooldowns.set(cmd.name, new Discord.Collection())
    
	}

	const now = Date.now()
  
	const timestamps = cooldowns.get(cmd.name)
  
	const cooldownAmount = (cmd.cooldown) * 1000

	if (timestamps.has(message.author.id)) {
    
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount

		if (now < expirationTime) {
      
			const timeLeft = (expirationTime - now) / 1000
      
			return message.channel.send(`Debes esperar \`${timeLeft.toFixed(2)}s\` antes de volver a usar otro comando.`).then(m => { m.delete({ timeout: 5000 }) })
      
		}
    
	}

	timestamps.set(message.author.id, now)
  
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount)

	try {

		cmd.run(cute, message, args)

	} catch (e) {
    
		console.log(e)
    
  }
  
  
}