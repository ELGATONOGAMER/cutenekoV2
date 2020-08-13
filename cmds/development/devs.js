module.exports = {
  name: "devs",
  alias: [],
  cooldown: 5,
  category: "development",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
    const moment = require("moment")
    require("moment-duration-format")
    
    const { crearDB } = require("megadb")
    const dev_db = new crearDB("devs");
    
    const prefixdb = new crearDB("serveropts")
    const prefix = prefixdb.tiene(`${message.guild.id}.prefix`) ? await prefixdb.obtener(`${message.guild.id}.prefix`) : "g?" 
    
     if(!dev_db.tiene(`${message.author.id}`)) return message.channel.send("<a:cloading:713914246601113693> | Solo mi querido amo puede usar este comando.")     
    
    
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) 
        
     if (!args.length) {
       
     message.channel.send("<a:cloading:713914246601113693> | ¿Que deseas hacer? \n<a:cloading:713914246601113693> | Puedes hacer `"+prefix+"devs < add | list | remove >`")  
       
    } else if (args[0] === 'add') {
      
      if(!member) return message.channel.send("¿A quien quieres agregar?. . .") 
      
       if(dev_db.tiene(`${member.user.id}`)) return message.channel.send("Este ya es un usuario autorizado.")
      
       dev_db.establecer(`${member.user.id}`, "CUTESTAFF"); return message.channel.send(`Listo, ahora ${member.user.tag} es un usuario autorizado.`);
   
      
    } else if (args[0] === 'remove') {
      
       if(!member) return message.channel.send("¿A quien quieres remover?. . .") 
      
       if(!dev_db.tiene(`${member.user.id}`)) return message.channel.send("Este usuario no estaba autorizado.")      
       
       dev_db.eliminar(`${member.user.id}`); return message.channel.send(`Listo, ahora ${member.user.tag} ya no es un usuario autorizado.`);
      
    } else if (args[0] === 'list') {
      
       if(dev_db.size() < 1) return message.channel.send('No hay usuarios en la lista.'); //  Si no hay usuarios en la db esto envia una mensaje.
    
    let i = 0;
      
    dev_db.map(false, (v, key) => `[${++i}] \`${cute.users.resolve(key).tag}\`\nID: \`${key}\``).then(lista_usuarios => {
      
      const embed = new Discord.MessageEmbed()
      .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
      .setDescription("Lista de todos mis usuarios autorizados.\n\n"+lista_usuarios.join("\n\n"))
      .setColor("RANDOM")
      
      return message.channel.send(embed)
      
    })  
    
      }
    
    
  }
} 