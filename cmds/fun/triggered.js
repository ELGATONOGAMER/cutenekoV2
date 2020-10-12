module.exports = {
  name: "triggered",
  alias: [],
  cooldown: 5,
  category: "fun",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
   
    const DIG = require("discord-image-generation");
    
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;  

    const avatar = member.user.displayAvatarURL({ dynamic: false, format: 'png' });

    const img = await new DIG.Triggered().getImage(avatar)

    const attach = new Discord.MessageAttachment(img, "delete.gif");

    message.channel.send(attach)





  }
}