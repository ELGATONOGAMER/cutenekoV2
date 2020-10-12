module.exports = {
  name: "lisasay",
  alias: ["lisa"],
  cooldown: 5,
  category: "fun",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
   
    const DIG = require("discord-image-generation");
    
    var texto = args.join(" ")

    const img = await new DIG.LisaPresentation().getImage(texto)

    const attach = new Discord.MessageAttachment(img, "delete.png");

    message.channel.send(attach)





  }
}