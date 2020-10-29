module.exports = {
  name: "commands",
  alias: ["cmds"],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {
    
  const Discord = require("discord.js")
  
  const { crearDB } = require("megadb")
  const dev_db = new crearDB("devs");
  const prefixdb = new crearDB("serveropts")
  const vip_db = new crearDB("vips");
  
  const prefix = prefixdb.tiene(`${message.guild.id}.prefix`) ? await prefixdb.obtener(`${message.guild.id}.prefix`) : "g?" 
    
  const CO = cute.commands.filter(c => c.category === "config").map(c => `\`${c.name}\``).join(" ")
  const CON = cute.commands.filter(c => c.category === "config").size+5
  
  const Utiles = cute.commands.filter(c => c.category === "utility").map(c => `\`${c.name}\``).join(" ")
  const Utiles2 = cute.commands.filter(c => c.category === "utility").size 
  
  const Reaccion = cute.commands.filter(c => c.category === "reaction").map(c => `\`${c.name}\``).join(" ")
  const Reaccion2 = cute.commands.filter(c => c.category === "reaction").size 
  
  const IN = cute.commands.filter(c => c.category === "interaction").map(c => `\`${c.name}\``).join(" ")
  const IN2 = cute.commands.filter(c => c.category === "interaction").size 
  
  
  const Divertidos = cute.commands.filter(c => c.category === "fun").map(c => `\`${c.name}\``).join(" ")
  const Divertidos2 = cute.commands.filter(c => c.category === "fun").size 
  
  const de = cute.commands.filter(c => c.category === "development").map(c => `\`${c.name}\``).join(" ")
  const dedo = cute.commands.filter(c => c.category === "development").size 
  
  const mod = cute.commands.filter(c => c.category === "moderation").map(c => `\`${c.name}\``).join(" ")
  const moded = cute.commands.filter(c => c.category === "moderation").size 
  
   const ns = cute.commands.filter(c => c.category === "nsfw").map(c => `\`${c.name}\``).join(" ")
  const nsf = cute.commands.filter(c => c.category === "nsfw").size 
  
  
  const cmds = cute.commands.size+5
  
  let d = " ";  
  let u = " ";  
  let owo = " ";    
    
  
  if(dev_db.tiene(`${message.author.id}`)) {
      
  d = de  
    
  } else {
      
  d = "`Solo desarrolladores owo`"
    
  }
    
 if(message.channel.nsfw) {
   
 owo = ns
   
 } else {
   
 owo = "`Utiliza este comando en un canal NSFW`"  
   
 }
  
  const comandos = new Discord.MessageEmbed()
  .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))  
  .setDescription("Holi ^^ estos son todos mis comandos disponibles, no olvides que mi prefix en este servidor es: `"+prefix+"` uwu\n\nTengo un total de: "+cmds+" Comandos.")
  .addField("Configuracion ["+CON+"]", "`set goodbye` `set goodbyeMessage` `set welcome` `set welcomeMessage` `set prefix` "+CO)  
  .addField("Moderacion ["+moded+"]", mod+" `Mas comandos en desarrollo.`")  
  .addField("Utiles ["+Utiles2+"]", Utiles)  
  .addField("Reaccion ["+Reaccion2+"]", Reaccion) 
  .addField("Interaccion ["+IN2+"]", IN) 
  .addField("Divertidos ["+Divertidos2+"]", Divertidos) 
  .addField("Desarrollo ["+dedo+"]", d) 
  .setImage("https://media.discordapp.net/attachments/359425464885837827/766746759476150272/comandos.png")
  
  .setColor("#ffa9a9")  
    
  message.channel.send(comandos)  
    
    
  }
}