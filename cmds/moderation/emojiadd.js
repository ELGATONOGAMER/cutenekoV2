module.exports = {
  name: "emojiadd",
  alias: ["addemoji", "adde"],
  cooldown: 5,
  category: "moderation",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
    const emojiNames = require("emoji-unicode-map");
    const emojiImages = require("emoji-img");
    
     if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send("<a:cloading:713914246601113693> | Necesitas permisos de: `Gestionar Emojis.`")  

    if(!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.channel.send("<a:cloading:713914246601113693> | Necesito permisos de: `Gestionar Emojis.`")   

    if(!args.length) return message.channel.send("<a:cloading:713914246601113693> | ¡Introduce un emoji!\n<a:cloading:713914246601113693> | Ejemplo: `g?emojiadd <emoji> <nombre>`");
     
    if(!args[1]) return message.channel.send("<a:cloading:713914246601113693> | ¡Introduce un emoji y su nombre!\n<a:cloading:713914246601113693> | Ejemplo: `g?emojiadd <emoji> <nombre>`");

    let emojiRegExp = /<a?:[^:]+:(\d+)>/gm,
        emoji,
        unicodeEmojiName = emojiNames.get(args[0]);

    if(!unicodeEmojiName) {

      if(args[0].startsWith("<")){
        
        emoji = Discord.Util.parseEmoji(args[0])
      
      } else {
        
        return message.channel.send("<a:cloading:713914246601113693> | ¡No encontré el emoji!\n<a:cloading:713914246601113693> | Ejemplo: `g?emojiadd <emoji> <nombre>`")
      
      }
      
      if(emoji.id === null){
        
        return message.channel.send("<a:cloading:713914246601113693> | ¡No encontré el emoji!\n<a:cloading:713914246601113693> | Ejemplo: `g?emojiadd <emoji> <nombre>`")
        
      }
      
     try { 
     await message.guild.emojis.create(`https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? "gif" : "png"}`, args[1])
     } catch(err){
     return message.channel.send('<a:cloading:713914246601113693> | Error al añadir el emoji.\n<a:cloading:713914246601113693> | Puede que el slot de emojis este lleno.\n<a:cloading:713914246601113693> | Error: '+err.message)
     }
      
      message.channel.send("<a:cloading:713914246601113693> | Emoji agregado correctamente.\n<a:cloading:713914246601113693> | Nombre: `"+args[1]+"`", { files: [`https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? "gif" : "png"}`] })
      
    } else {

    let unicodeEmojiImage = emojiImages.get(unicodeEmojiName);

    if(!unicodeEmojiImage){

      message.channel.send("<a:cloading:713914246601113693> | ¡No encontré el emoji!\n<a:cloading:713914246601113693> | Ejemplo: `g?emojiadd <emoji> <nombre>`");
      
    }

     message.channel.send("<a:cloading:713914246601113693> | ¿Por que razon agregar un emoji que todos tienen..?")

    }
  }
}