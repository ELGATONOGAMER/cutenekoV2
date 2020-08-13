module.exports = {
  name: "esay",
  alias: [],
  cooldown: 5,
  category: "fun",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
    
    const texto = args.join(' ')
    
    if (!texto) return message.channel.send("<a:cloading:713914246601113693> | Ingresa algo a decir.")
    
    const esay = new Discord.MessageEmbed()
    .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
    .setDescription(texto)
    .setColor("RANDOM")
     
     
    message.channel.send(esay)
    message.delete()
    
    
    
  }
}