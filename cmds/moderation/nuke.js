module.exports = {
  name: "nuke",
  alias: ["clone"],
  cooldown: 5,
  category: "moderation",
  run: async (cute, message, args) => {

  const Discord = require("discord.js")
  
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("<a:cloading:713914246601113693> | Necesitas permisos de: `Gestionar Canales.`");
   
  if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("<a:cloading:713914246601113693> | Necesito permisos de: `Gestionar Canales.`")   
    
  message.channel.send("<a:cloading:713914246601113693> | Clonando canal...").then(m => {
  
  setTimeout(function() {  
    
  message.channel.clone().then(c => {

  c.send(`<a:cloading:713914246601113693> | Listo, clonado con exito.`)
  c.send(`<a:cloading:713914246601113693> | ${message.author}`)
    
  })  
     
  }, 2000)
    
  setTimeout(function() {  
    
   m.edit(`<a:cloading:713914246601113693> | Canal clonado.`) 
     
  }, 3500) 
  
  setTimeout(function() {  
    
   m.edit(`<a:cloading:713914246601113693> | Borrando canal actual.`) 
     
  }, 5000)  
    
  setTimeout(function() {  
    
   message.channel.delete() 
     
  }, 6500)    
    
    
  })
    
  
  
  
  
  
  }
}