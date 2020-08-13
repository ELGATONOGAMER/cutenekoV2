module.exports = {
  name: "mine",
  alias: [],
  cooldown: 5,
  category: "fun",
  run: async (cute, message, args) => {
    
   const db = require("megadb");
   const Dinero = new db.crearDB("Dinero");
   const user = message.author;
   let col = new db.crearDB("col");
    
   let random = Math.floor(Math.random() * (351 - 100)) + 100   
     
   const Discord = require("discord.js") 
   
   const moment = require("moment");
    require("moment-duration-format")
    
    
     moment.updateLocale('en', {
    months : [
        "de Enero del", "de Febrero del", "de Marzo del", "de Abril del", "de Mayo del", "de Junio del", "de Julio del",
        "de Agosto del", "de Septiembre del", "de Octubre del", "de Noviembre del", "de Diciembre del"
      ],
    weekdays : [
        "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
      ]          
        });    
    
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let días = Math.floor(diff / 86400000);
        return días == 0 ? "**Creado hoy**" : ("hace **" + días + (días == 1 ? "** día" : "** días"));
    
    }
   
  if(!col.tiene(`${message.author.id}`)){ 
       
  if (!Dinero.tiene(`${user.id}`)) {
  
  Dinero.establecer(`${user.id}`, 0)
  
  }
      
    
  Dinero.sumar(`${user.id}`, random);
  
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
    .setDescription("<@"+message.author.id+"> Minaste durante 30 minutos y ganaste: ``"+random+" CatCoins`` <a:monedas:711031721931571221>")
    .setFooter("Espera 30 minutos mas para usar este comando.")
  
  col.establecer(`${message.author.id}`, Date.now() + 1800000)
  message.channel.send(embed);

} else {
  
let timedb = await col.obtener(`${message.author.id}`) 

if(Date.now() < timedb){
  
  const actividad = moment
    .duration(timedb - Date.now())
    .format(" D [días], H [horas], m [minutos], s [segundos]", {
    usePlural: false
    });
  
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
    .setDescription("<@"+message.author.id+"> Tienes que esperar: ``"+actividad+"`` mas para poder volver a usar el comando.")
    .setFooter("Ya queda muy poco....");
  
  return message.channel.send(embed) 
  
  } else {
  
  col.establecer(`${message.author.id}`, Date.now() + 1800000)
  

      
  Dinero.sumar(`${user.id}`, random);
  
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
    .setDescription("<@"+message.author.id+"> Minaste durante 30 minutos y ganaste: ``"+random+" CatCoins`` <a:monedas:711031721931571221>")
    .setFooter("Espera 30 minutos mas para usar este comando.")
  message.channel.send(embed)
  
}
        
}  
    
    
    
    
    
    
    
  }
}