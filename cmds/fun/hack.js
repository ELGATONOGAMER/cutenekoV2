module.exports = {
  name: "hack",
  alias: [],
  cooldown: 5,
  category: "fun",
  run: async (cute, message, args) => {
    
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])   
    
  if(!member) return message.channel.send("<a:cloading:713914246601113693> | ¿A quien quieres hackear ^^?")  
    
  let correo = ['badbunny@gmail.com', member.user.username+'OwO@hotmail.com','elverGalarga@outlook.com','btsforever@discord.com','dormammu@negocios.com'];
  let correos = correo[Math.floor(correo.length * Math.random())];  
  
  let co = ['maincra777', 'Xx'+member.user.username+'xX','babylavidaeunciclo','password','wakandaForEver'];
  let ca = co[Math.floor(co.length * Math.random())]; 
   
  let is = ['129.33.501', 'Xx.xx.xX','12.678.4','666.66.666','no.ip._.'];
  let ip = is[Math.floor(is.length * Math.random())];   
    
  let u = ['Mexico', '"  " (Peru)','Narnia','CHINA._.','España..'];
  let ub = u[Math.floor(u.length * Math.random())];     
    
  message.channel.send(`<a:cloading:713914246601113693> | Iniciando hack hacia \`${member.user.tag}\``).then(m => {
    
   setTimeout(function() {  
    
   m.edit(`<a:cloading:713914246601113693> | Obteniendo correo.`) 
     
   }, 3000)
    
   setTimeout(function() {  
    
   m.edit(`<a:cloading:713914246601113693> | Correo: \`${correos}\`\n<a:cloading:713914246601113693> | Obteniendo contraseña.`) 
     
   }, 5000) 
    
  setTimeout(function() {  
    
   m.edit(`<a:cloading:713914246601113693> | Correo: \`${correos}\`\n<a:cloading:713914246601113693> | Contraseña: \`${ca}\``) 
     
   }, 7000) 
    
  setTimeout(function() {  
    
   m.edit(`<a:cloading:713914246601113693> | Metiendo virus a su PC.`) 
     
   }, 9000)   
    
   setTimeout(function() {  
    
   m.edit(`<a:cloading:713914246601113693> | Inyeccion finalizada.`) 
     
   }, 12000)  
    
   setTimeout(function() {  
    
   m.edit(`<a:cloading:713914246601113693> | Obteniendo IP.`) 
     
   }, 14000)   
    
   setTimeout(function() {  
    
   m.edit(`<a:cloading:713914246601113693> | IP:\`${ip}\``) 
     
   }, 16000)    
    
   setTimeout(function() {  
    
   m.edit(`<a:cloading:713914246601113693> | Obteniendo su ubicacion.`) 
     
   }, 18000)    
    
   setTimeout(function() {  
    
   m.edit(`<a:cloading:713914246601113693> | Ubicacion:\`${ub}\``) 
     
   }, 20000)     
    
    setTimeout(function() {  
    
   m.edit(`<a:cloading:713914246601113693> | Hack finalizado <:floushed:709118755757883473>`) 
     
   }, 22000)      
    
    
    
    
  }) 
    
    
    
  }
}