module.exports = {
  name: "set",
  alias: ["setup"],
  cooldown: 5,
  category: "config",
  run: async (cute, message, args) => {

  const Discord = require("discord.js")
  const { crearDB } = require("megadb")
  const prefixdb = new crearDB("serveropts")
  
  const prefix = prefixdb.tiene(`${message.guild.id}.prefix`) ? await prefixdb.obtener(`${message.guild.id}.prefix`) : "g?" 
  const welcome = prefixdb.tiene(`${message.guild.id}.welcome`) ? await prefixdb.obtener(`${message.guild.id}.welcome`) : "Desactivado." 
  const welcomeM = prefixdb.tiene(`${message.guild.id}.welcomeM`) ? await prefixdb.obtener(`${message.guild.id}.welcomeM`) : "Bienvenido {user} a {server}" 
  const goodbye = prefixdb.tiene(`${message.guild.id}.goodbye`) ? await prefixdb.obtener(`${message.guild.id}.goodbye`) : "Desactivado." 
  const goodbyeM = prefixdb.tiene(`${message.guild.id}.goodbyeM`) ? await prefixdb.obtener(`${message.guild.id}.goodbyeM`) : "Adios {usertag} te extrañaremos." 
  const logs = prefixdb.tiene(`${message.guild.id}.logs`) ? await prefixdb.obtener(`${message.guild.id}.logs`) : "Desactivados."
  
  let j = " ";
  let k = " ";
  let m = " ";    
    
  if(prefix === "g?"){
    
  j = prefix+" | (Default)"
    
  } else {
    
  
  j = prefix
    
 
  }
    
  if(welcomeM === "Bienvenido {user} a {server}"){
    
  k = welcomeM+" | (Default)"
    
  } else {
    
  
  k = welcomeM
    
 
  }  
    
  if(goodbyeM === "Adios {usertag} te extrañaremos."){
    
  m = goodbyeM+" | (Default)"
    
  } else {
    
  
  m = goodbyeM
    
 
  }    
    
   const name1 = cute.channels.resolve(welcome)    
   const name2 = cute.channels.resolve(goodbye)  
   const name3 = cute.channels.resolve(logs)  
  
   if (!args.length) {
  
  const Options = new Discord.MessageEmbed()
  .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
  .addField("Prefix:", `\`\`\`css\n${j}\n\`\`\``, true)
  .addField("Bienvenidas:", `\`\`\`css\n${welcome !== "Desactivado." ? `#${name1.name}` : "Desactivado."}\n\`\`\``)
  .addField("Mensaje Bienvenidas", `\`\`\`css\n${k}\n\`\`\``)
  .addField("Despedidas:", `\`\`\`css\n${goodbye !== "Desactivado." ? `#${name2.name}` : "Desactivado."}\n\`\`\``)
  .addField("Mensaje Despedidas:", `\`\`\`css\n${m}\n\`\`\``)
  .addField("Logs:", `\`\`\`css\n${logs !== "Desactivados." ? `#${name3.name}` : "Desactivados."}\n\`\`\``)
  
  
  .setColor("RANDOM")
  
  message.channel.send(Options)
  
  
     
  } else if (args[0] === 'prefix') {
     
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:cloading:713914246601113693> | Necesitas permisos de: `Administrador.`");
     
  const New = args[1]
     
  if(!New) return message.channel.send("<a:cloading:713914246601113693> | ¡Coloca el nuevo prefix!\n<a:cloading:713914246601113693> | Ejemplo: `"+prefix+"set prefix <Nuevo prefix>`")
     
  const NUEVO = new Discord.MessageEmbed()
     .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
     .setDescription("Informacion actualizada.")
     .addField("Nuevo prefix:", `\`\`\`css\nPrefix: ${New}\n\`\`\``)
     
     .setColor("RANDOM")
     
  prefixdb.establecer(`${message.guild.id}.prefix`, New); return message.channel.send(NUEVO); 
     
     
  
   
  } else if (args[0] === 'welcome') {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:cloading:713914246601113693> | Necesitas permisos de: `Administrador.`");
     
    
  const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]); 
   
  if(!channel) return message.channel.send("<a:cloading:713914246601113693> | Menciona un canal para las bienvenidas.\n<a:cloading:713914246601113693> | Ejemplo: `"+prefix+"set welcome <#canal | id-canal>`")
     
  const NUEVO = new Discord.MessageEmbed()
     .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
     .setDescription("Informacion actualizada.")
     .addField("Nuevo canal de bienvenidas:", `\`\`\`css\nCanal: #${channel.name}\n\`\`\``)
     
     .setColor("RANDOM")   
     
  prefixdb.establecer(`${message.guild.id}.welcome`, channel.id), message.channel.send(NUEVO);
     
  } else if (args[0] === 'welcomeMessage') {
   
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:cloading:713914246601113693> | Necesitas permisos de: `Administrador.`");
   
    
  const New = args.slice(1).join(" ")
   
  const how = new Discord.MessageEmbed()
     .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
     .setDescription(`Aqui un ejemplo y el como puedes perzonalizar las bienvenidas.\n\n\`{user}\` Menciona el usuario que entro. | ${message.author}\n\n\`{usertag}\` Dice el nombre del usuario mas su discriminador. | ${message.author.tag}\n\n\`{username}\` Dice solamente el nombre del usuario. | ${message.author.username}\n\n\`{server}\` Dice el nombre del servidor. | ${message.guild.name}\n\n\`{members}\` Dice la cantidad total de miembros en el servidor. | ${message.guild.memberCount}\n\n\`${prefix}set welcomeMessage Bienvenido {user} a {server} ahora somos {members}\``)
     .addField("Mensaje actual:", `\`\`\`css\nMensaje:\n\n${k}\n\`\`\``)
  
     .setColor("RANDOM")
  
  if(!New) return message.channel.send(how)
     
  const NUEVO = new Discord.MessageEmbed()
     .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
     .setDescription("Informacion actualizada.")
     .addField("Nuevo mensaje de bienvenida:", `\`\`\`css\nMensaje: ${New}\n\`\`\``)
     
     .setColor("RANDOM")
     
  prefixdb.establecer(`${message.guild.id}.welcomeM`, New); return message.channel.send(NUEVO);   
     
  } else if (args[0] === 'goodbye') {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:cloading:713914246601113693> | Necesitas permisos de: `Administrador.`");  
    
  const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]); 
   
  if(!channel) return message.channel.send("<a:cloading:713914246601113693> | Menciona un canal para las despedidas.\n<a:cloading:713914246601113693> | Ejemplo: `"+prefix+"set goodbye <#canal | id-canal>`")
     
  const NUEVO = new Discord.MessageEmbed()
     .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
     .setDescription("Informacion actualizada.")
     .addField("Nuevo canal de despedidas:", `\`\`\`css\nCanal: #${channel.name}\n\`\`\``)
     
     .setColor("RANDOM")   
     
  prefixdb.establecer(`${message.guild.id}.goodbye`, channel.id), message.channel.send(NUEVO);
     
  } else if (args[0] === 'goodbyeMessage') {
   
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:cloading:713914246601113693> | Necesitas permisos de: `Administrador.`");   
    
  const New = args.slice(1).join(" ")
   
  const how = new Discord.MessageEmbed()
     .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
     .setDescription(`Aqui un ejemplo y el como puedes perzonalizar las despedidas.\n\n\`{user}\` Menciona el usuario que salio. (No recomendable) | ${message.author}\n\n\`{usertag}\` Dice el nombre del usuario mas su discriminador. | ${message.author.tag}\n\n\`{username}\` Dice solamente el nombre del usuario. | ${message.author.username}\n\n\`{server}\` Dice el nombre del servidor. | ${message.guild.name}\n\n\`{members}\` Dice la cantidad total de miembros en el servidor. | ${message.guild.memberCount}\n\n\`${prefix}set goodbyeMessage Adios {usertag} te extrañaremos aqui en {server} ahora somos {members} miembros sin ti\``)
     .addField("Mensaje actual:", `\`\`\`css\nMensaje:\n\n${m}\n\`\`\``)
  
     .setColor("RANDOM")
  
  if(!New) return message.channel.send(how)
     
  const NUEVO = new Discord.MessageEmbed()
     .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
     .setDescription("Informacion actualizada.")
     .addField("Nuevo mensaje de despedida:", `\`\`\`css\nMensaje: ${New}\n\`\`\``)
     
     .setColor("RANDOM")
     
  prefixdb.establecer(`${message.guild.id}.goodbyeM`, New); return message.channel.send(NUEVO);   
     
  } else if (args[0] === 'logs') {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:cloading:713914246601113693> | Necesitas permisos de: `Administrador.`");
     
    
  const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]); 
   
  if(!channel) return message.channel.send("<a:cloading:713914246601113693> | Menciona un canal para logeo.\n<a:cloading:713914246601113693> | Ejemplo: `"+prefix+"set logs <#canal | id-canal>`")
     
  const NUEVO = new Discord.MessageEmbed()
     .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
     .setDescription("Informacion actualizada.")
     .addField("Nuevo canal de logs:", `\`\`\`css\nCanal: #${channel.name}\n\`\`\``)
     
     .setColor("RANDOM")   
     
  prefixdb.establecer(`${message.guild.id}.logs`, channel.id), message.channel.send(NUEVO);
     
  }
  
    
    
    
    
    
     
  }
}
