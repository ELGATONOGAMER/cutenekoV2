module.exports = {
  name: "invite",
  alias: [],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
    
    const ping = new Discord.MessageEmbed()
    .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
    .setDescription("Puedes invitarme mediante este link: **[[¡Click Aquí!]](https://discordapp.com/oauth2/authorize?client_id=684594811700903939&scope=bot&permissions=8)**")
    .setColor("RANDOM")
    .setFooter("¡Una buena elección!", message.author.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
    .setTimestamp(new Date())
    
    message.channel.send(ping)
   
    
    
  }
}