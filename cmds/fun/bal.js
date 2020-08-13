module.exports = {
  name: "bal",
  alias: [],
  cooldown: 5,
  category: "fun",
  run: async (cute, message, args) => {

  const Discord = require("discord.js")  
    
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      
  if(member.user.bot) return message.channel.send("Los bots no tienen dinero")
  
  const db = require("megadb");  
    
  const Dinero = new db.crearDB("Dinero");
  const desc = Dinero.tiene(`${member.user.id}`) ? await Dinero.obtener(`${member.user.id}`) : `0`
      
  if (!Dinero.tiene(`${member.user.id}`)) {
  
  Dinero.establecer(`${member.user.id}`, 0)
  
  }    
      
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
    .setDescription("<@"+member.user.id+"> Tienes un total de ``"+desc.toLocaleString()+" CatCoins`` <a:monedas:711031721931571221>")
    .setFooter("Sigue asi!")

  message.channel.send(embed)





  }
}