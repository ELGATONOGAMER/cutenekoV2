module.exports = {
  name: "emoji",
  alias: ["jumbo"],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
    const emojiNames = require("emoji-unicode-map");
    const emojiImages = require("emoji-img");
    
    if(!args.length) return message.channel.send(`<a:cloading:713914246601113693> | ¡Introduce un emoji!`);
     
    
    let emojiRegExp = /<a?:[^:]+:(\d+)>/gm,
        emoji,
        unicodeEmojiName = emojiNames.get(args[0]);

    if(!unicodeEmojiName) {

      if(args[0].startsWith("<")){
        
        emoji = Discord.Util.parseEmoji(args[0])
      
      } else {
        
        return message.channel.send(`<a:cloading:713914246601113693> | ¡No encontré el emoji!`)
      
      }
      
      if(emoji.id === null){
        
        return message.channel.send(`<a:cloading:713914246601113693> | ¡No encontré el emoji!`)
        
      }
      
      message.channel.send({ files: [`https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? "gif" : "png"}`] })
      
    } else {

    let unicodeEmojiImage = emojiImages.get(unicodeEmojiName);

    if(!unicodeEmojiImage){

      message.channel.send(`<a:cloading:713914246601113693> | ¡No encontré el emoji!`);
      
    }

    message.channel.send({ files: [{ attachment: unicodeEmojiImage, name: `${unicodeEmojiName}.png` }] });

    }
  }
}