module.exports = {
  name: "channel",
  alias: [],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {
    
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
    
    const tipo = {
      "text":"De texto.",
      "voice":"De voz.",
      "category":"Categoria.",
      "news":"De noticias.",
      "store":"De tienda."
    }
    
   
    
    
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
    
    if(!channel) return message.channel.send("<a:cloading:713914246601113693> | ¡Especifica un canal!")
    
    
     let t = " ";
    
    if(channel.topic !== null){
    
      t = channel.topic
    
    } else {
    
     t = "No hay un tema."
    
    }
    
     const boolean = {
        "false":"No",
        "true":"Si"
      }
    
    const cha = new Discord.MessageEmbed()
    .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
    .setDescription("Informacion sobre el canal mencionado.")
    .addField(`Nombre:`, `- ${Discord.Util.escapeMarkdown(channel.name)}`)
    .addField(`Mencion:`, `- \`${channel}\``)
    .addField(`ID:`, `- ${channel.id}`)
    .addField(`Tipo`, `- ${tipo[channel.type]}`)
    .addField(`¿NSFW?`, `${boolean[channel.nsfw]}`)
    .addField(`Tema:`, `- ${t.toString().length < 1 ? "No hay un tema" : t}`)
    .addField(`Esta en:`, `- ${Discord.Util.escapeMarkdown(channel.parent.name)}`)
    .addField(`Creado el:`, `- ${moment(channel.createdAt).utcOffset(-3).format("dddd D MMMM YYYY")}\n- ${checkDays(channel.createdAt)}`)
    
    .setColor("RANDOM")
    
    message.channel.send(cha)
    
    
    }
}