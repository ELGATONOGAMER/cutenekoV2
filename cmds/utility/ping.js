module.exports = {
  name: "ping",
  alias: [],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
    
    const pingcute = Math.floor(cute.ws.ping)
    const pingmsg = Math.floor(new Date() - message.createdTimestamp)
    
    const ping = new Discord.MessageEmbed()
    .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
    .setDescription("- Ping Discord API: **`"+pingcute+"ms`**\n- Ping Mensajes: **`"+pingmsg+"ms`**")
    .setColor("RANDOM")
    .setFooter("¡Pong!", message.author.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
    .setTimestamp(new Date())
    
    message.channel.send(ping)

  }
}