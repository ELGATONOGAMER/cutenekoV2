module.exports = {
  name: "randomuser",
  alias: ["random", "userrandom"],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {
    
     const Discord = require("discord.js")
    
     const s = message.guild.members.cache.size
     const d = message.guild.members.cache.map(m => m)[Math.floor(s * Math.random())]

     
      const ran = new Discord.MessageEmbed()
      .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
      .setDescription("<@"+d.user.id+"> \n- "+d.user.username)
      
      .setFooter("7w7", d.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
      .setTimestamp(new Date())
      .setColor("RANDOM")
      
      message.channel.send(ran)
    
    
    
    
    
    
    
  }
}