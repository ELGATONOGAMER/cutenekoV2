module.exports = {
  name: "blink",
  alias: [],
  cooldown: 5,
  category: "fun",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
   
    const DIG = require("discord-image-generation");
    
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
    const member2 = message.mentions.members.array()[1] || message.guild.members.cache.get(args[1]) 

    if(!member || !member2) return message.channel.send("<a:cloading:713914246601113693> | ¡Debes colocar dos usuarios!\n<a:cloading:713914246601113693> | `Uso: g?blink <@user1> <@user2> || ID1 ID2`")

    const avatar = member.user.displayAvatarURL({ dynamic: false, format: 'png' });
    const avatar2 = member2.user.displayAvatarURL({ dynamic: false, format: 'png' })
 
    const img = await new DIG.Blink().getImage(avatar, avatar2, 1000)

    const attach = new Discord.MessageAttachment(img, "delete.gif");

    message.channel.send(attach)





  }
}