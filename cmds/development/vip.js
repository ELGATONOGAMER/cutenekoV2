module.exports = {
  name: "vip",
  alias: [],
  cooldown: 5,
  category: "development",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
    const moment = require("moment")
    require("moment-duration-format")
    
    const { crearDB } = require("megadb")
    const vip_db = new crearDB("vips");
    const dev_db = new crearDB("devs");
    
    if(!dev_db.tiene(`${message.author.id}`)) return message.channel.send("<a:cloading:713914246601113693> | Solo mi querido amo puede usar este comando.")      
    
    
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) 
        
     if (!args.length) {
       
     message.channel.send("¿A quien quieres agregarle vip?")  
       
    } else if (args[0] === 'add') {
      
      if(!member) return message.channel.send("¿A quien quieres agregarle vip?. . .") 
      
       if(vip_db.tiene(`${member.user.id}`)) return message.channel.send("Este ya usuario ya tiene vip")
      
       vip_db.establecer(`${member.user.id}`, "VIPUSER"); return message.channel.send(`Listo, ahora ${member.user.tag} tiene vip.`);
   
      
    } else if (args[0] === 'remove') {
      
       if(!member) return message.channel.send("¿A quien quieres removerle vip?. . .") 
      
       if(!vip_db.tiene(`${member.user.id}`)) return message.channel.send("Este usuario no tenia vip.")      
       
       vip_db.eliminar(`${member.user.id}`); return message.channel.send(`Listo, ahora ${member.user.tag} ya no tiene vip.`);
      
    }   
    
    
    
    
  }
} 