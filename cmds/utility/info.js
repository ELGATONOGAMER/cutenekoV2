module.exports = {
  name: "info",
  alias: [],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
    
    const { crearDB } = require("megadb")
    const prefixdb = new crearDB("serveropts")
    

    
    const gato = cute.users.resolve("672644434449399818")
     const rickz = cute.users.resolve("551514133170880517")

    
    const prefix = prefixdb.tiene(`${message.guild.id}.prefix`) ? await prefixdb.obtener(`${message.guild.id}.prefix`) : "g?" 
  
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
        return "hace **" + días + (días == 1 ? "** día" : "** días");
    
    }
    
     const actividad = moment
    .duration(cute.uptime)
    .format("DD [Días] hh [horas] mm [minutos y] ss [segundos]", { usePlural: false });
    
    
    const inf = new Discord.MessageEmbed()
    .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
    .addField(`Nombre:`, `- ${cute.user.username}`)
    .addField(`Desarrolladores:`, `- ${gato.tag}\n- ${rickz.tag}`)
    .addField(`Memoria:`, `- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
    .addField(`Librería:`, `- Discord.js ( ${Discord.version} )`)
    .addField(`Servidores:`, `- ${cute.guilds.cache.size.toLocaleString()}`)
    .addField(`Usuarios:`, `- ${cute.users.cache.size.toLocaleString()}`)
    .addField(`Canales:`, `- ${cute.channels.cache.size.toLocaleString()}`)
    .addField(`Emojis:`, `- ${cute.emojis.cache.size.toLocaleString()}`)
    .addField(`Comandos:`, `- ${cute.commands.size+5}`)
    .addField(`Prefix:`, `- **${prefix}**`)
    .addField(`Creado el:`, `- ${moment(cute.user.createdAt).utcOffset(-3).format("dddd D MMMM YYYY")}\n- ${checkDays(cute.user.createdAt)}`) 
    .addField(`Uptime:`, `- ${actividad}`) 
    
    .setImage("https://top.gg/api/widget/684594811700903939.png")
    .setColor("RANDOM")
    
    message.channel.send(inf)
    
    
    
    
    
    
    
    
    
    
    
    }
}