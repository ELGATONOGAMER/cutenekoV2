module.exports = {
  name: "invitebot",
  alias: ["botinvite"],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {

     const Discord = require("discord.js")
     
     const bot = message.mentions.users.first() || cute.users.resolve(args[0])
     
     if(!bot) return message.channel.send("¿Cuál bot quieres invitar?")
     if(!bot.bot) return message.channel.send("<a:cloading:713914246601113693> | Este no es un bot.")
     
     const embed = new Discord.MessageEmbed()
     .setAuthor(`${bot.username}`, bot.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
     .setDescription(`Link de invitación generado para: **${bot.tag}**`)
     .addField("Link de invitación:", `[Click aquí](https://discordapp.com/oauth2/authorize?client_id=${bot.id}&scope=bot&permissions=8)`)
     .addField("Permisos:", "8")
     .setColor("RANDOM")
     message.channel.send(embed)
   
  }
}