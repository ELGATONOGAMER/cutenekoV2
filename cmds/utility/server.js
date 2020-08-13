module.exports = {
  name: "server",
  alias: ["infoserver", "serverinfo"],
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
    
    const region = {
    
        "brazil": ":flag_br: | Brasil",
        "japan": ":flag_jp: | Japón",
        "europe": ":flag_eu: | Europa",
        "singapore": ":flag_sg: | Singapur",
        "us-central": ":flag_us: | Estados Unidos",
        "sydney": ":flag_au: | Sídney",
        "us-east": ":flag_us: | Estados Unidos",
        "us-south": ":flag_us: | Estados Unidos",
        "us-west": ":flag_us: | Estados Unidos",
        "eu-west": ":flag_eu: | Europa",
        "vip-us-east": ":gem: | [VIP] :flag_us: Estados Unidos",
        "london": ":flag_gb: | Londres",
        "amsterdam": ":flag_nl: | Ámsterdam",
        "hongkong": ":flag_cn: | China",
        "russia": ":flag_ru: | Rusia",
        "india": ":flag_in: | India",
        "southafrica": ":flag_za:  | Sudáfrica"
    
    }
    
    
    const mejoras = {
        ANIMATED_ICON: "Avatar animado",
        BANNER: "Banner ",
        COMMERCE: "Canal de tienda",
        DISCOVERABLE: "Servidor de Discord Discovery List",
        FEATURABLE: "Apto para estar en la lista de destacados",
        INVITE_SPLASH: "Fondo de invitación",
        PUBLIC: "Servidor público",
        NEWS: "Canal de novedades",
        PARTNERED: "Servidor asociado",
        VANITY_URL: "Invitacion personalizada",
        VERIFIED: "Servidor verificado",
        VIP_REGIONS: "Región VIP",
        NEWS: "Canales de noticias.",
        COMMUNITY: "Comunidad",
        WELCOME_SCREEN_ENABLED: "Pantalla de bienvenida."
   }
    
    
    const guild = message.guild;
    
    let t = " ";
    let x = " ";
    let y = " ";
    let s = " ";
    let w = " ";
    let j = " ";
    
    if(message.guild.owner !== undefined){
    
      t = message.guild.owner
    
    } else {
    
     t = "No encontrado."
    
    }
    
    
    const to = message.guild.members.cache.filter(m => m.presence.status == 'online').size+message.guild.members.cache.filter(m => m.presence.status == 'idle').size+message.guild.members.cache.filter(m => m.presence.status == 'dnd').size
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")){
   
    x = "No tengo permisos para ver la cantidad de baneos."
     
    } else {
     
    let banned = await message.guild.fetchBans()
   
    x = banned.size
    
    } 
    
    
     const sc = guild.systemChannel
     if(sc){
     
     s = sc
     
     } else {
     
     s = "Sin mensajes del sistema"
     
     }
    
    
     const afkt = guild.afkTimeout
  if(afkt == "60"){
    y = "1 minuto"
  } else if(afkt == "300"){
    y = "5 minutos"
  } else if(afkt == "900"){
    y = "15 minutos"
  } else if(afkt == "1800"){
    y = "30 minutos"
  } else if(afkt == "3600"){
    y = "1 hora"
  }
    
    
    const nivel = {
     0: "Sin nivel",
     1: "Nivel: 1",
     2: "Nivel: 2",
     3: "Nivel: 3"
   }
    
     const vL = guild.verificationLevel
     if(vL == "NONE"){
    w = "Ninguno\n- Sin restricciones"
  } else if(vL == "LOW"){
    w = "Bajo\n- Debe tener un correo electrónico verificado a su cuenta de Discord"
  } else if(vL == "MEDIUM"){
    w = "Medio\n- Debe llevar en Discord más de 5 minutos registrado y tener un correo electrónico verificado"
  } else if(vL == "HIGH"){
    w = "Alto\n- Debe llevar en Discord más de 5 minutos registrado, llevar más de 10 minutos conectado en el servidor y tener un correo electrónico verificado"
  } else if(vL == "VERY_HIGH"){
    w = "Muy Alto\n- Debe llevar en Discord más de 5 minutos registrado, llevar más de 10 minutos conectado en el servidor, tener un teléfono verificado y tener un correo electrónico verificado"
  }
    
    
    if (message.guild.bannerURL({ format: "png", dynamic: true, size: 2048 }) !== null) {
      
    j = message.guild.bannerURL({ format: "png", dynamic: true, size: 2048 })  
      
    } else {
      
    j = "https://images-ext-2.discordapp.net/external/UTkCgXNiwR8bdvi-Arc3MrunD7n1pD4L2M6c3_uiB9U/https/cdn.weeb.sh/images/HkUlIUXDZ.gif?width=400&height=225"  
      
    }
    
   

    const serv = new Discord.MessageEmbed()
    .addField(`Nombre:`, `- ${Discord.Util.escapeMarkdown(guild.name+"\n- [Acrónimo: "+guild.nameAcronym+"]")}`) 
    .addField(`Dueño:`, `- ${t}`) 
    .addField(`ID:`, `- ${guild.id}`) 
    .addField(`Miembros Totales:`, `- ${guild.members.cache.size.toLocaleString()} [**${guild.members.cache.filter(m => !m.user.bot).size.toLocaleString()}** usuarios | **${guild.members.cache.filter(m => m.user.bot).size.toLocaleString()}** bots]\n- <a:Activo:722275598432469317> ${to.toLocaleString()} | <a:Offline:722275607957733496> ${message.guild.members.cache.filter(m => m.presence.status == 'offline').size.toLocaleString()}`) 
    .addField(`Canales Totales:`, `- ${guild.channels.cache.size} [**${message.guild.channels.cache.filter(c => c.type === 'text').size}** de texto | **${message.guild.channels.cache.filter(c => c.type === 'voice').size}** de voz | **${message.guild.channels.cache.filter(c => c.type === 'category').size}** categorías]`) 
    .addField(`Emojis:`, `- ${message.guild.emojis.cache.size} [**${message.guild.emojis.cache.filter(e => !e.animated).size}** estáticos | **${message.guild.emojis.cache.filter(e => e.animated).size}** animados]`)
    .addField(`Mensaje del sistema:`, `- ${s}`)
    .addField(`Rol mas alto:`, `- ${guild.roles.highest}`)
    .addField(`Canal AFK:`, `- ${guild.afkChannel !== null ? `**${guild.afkChannel}**\n- ${y}` : "No tiene"}  `) 
    .addField(`Region:`, `- ${region[guild.region]}`)
    .addField(`Baneos:`, `- ${x}`)
    .addField(`Roles:`, `- ${guild.roles.cache.size}`)  
    .addField(`Ventajas:`, `- ${guild.features.length <= 0 ? "Ninguna" : `${guild.features.map(f => mejoras[f]).join("\n- ")}`}`)
    .addField(`Nitro Boost:`, `- Boosteos: ${message.guild.premiumSubscriptionCount}\n- ${nivel[message.guild.premiumTier]}`)
    .addField(`Nivel de verificacion:`, `- ${w}`)
    .addField(`Creado el:`, `- ${moment(guild.createdAt).utcOffset(-3).format("dddd D MMMM YYYY")}\n- ${checkDays(guild.createdAt)}`)
    .setImage(j)
    .setColor("RANDOM")
    .setThumbnail(guild.iconURL({ format: "png", dynamic: true, size: 2048 }))
    
    message.channel.send(serv)
    
    
  }
}