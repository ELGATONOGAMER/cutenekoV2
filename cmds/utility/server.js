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
        WELCOME_SCREEN_ENABLED: "Pantalla de bienvenida.",
        ENABLED_DISCOVERABLE_BEFORE: "Activación de Discovery List Temprana",
        PUBLIC_DISABLED: "Servidor no público."
   }
    
    
    const guild = cute.guilds.cache.get(args[0]) || message.guild;
    
    let t = " ";
    let x = " ";
    let y = " ";
    let s = " ";
    let w = " ";
    let j = " ";
    
    if(guild.owner !== undefined){
    
      t = guild.owner
    
    } else {
    
     t = "No encontrado."
    
    }
    
    
    const to = guild.members.cache.filter(m => m.presence.status == 'online').size+guild.members.cache.filter(m => m.presence.status == 'idle').size+guild.members.cache.filter(m => m.presence.status == 'dnd').size
    
    if(!guild.me.hasPermission("BAN_MEMBERS")){
   
    x = "No tengo permisos para ver la cantidad de baneos."
     
    } else {
     
    let banned = await guild.fetchBans()
   
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
    

     const newsch = guild.channels.cache.filter(x => x.type === 'news').map(x => x).join("\n- ")
   

    const serv = new Discord.MessageEmbed()
    .addField(`Nombre:`, `- ${Discord.Util.escapeMarkdown(guild.name+"\n- [Acrónimo: "+guild.nameAcronym+"]")}`) 
    .addField(`Dueño:`, `- ${t}`) 
    .addField(`ID:`, `- ${guild.id}`) 
    .addField(`Miembros Totales:`, `- ${guild.members.cache.size.toLocaleString()} [**${guild.members.cache.filter(m => !m.user.bot).size.toLocaleString()}** usuarios | **${guild.members.cache.filter(m => m.user.bot).size.toLocaleString()}** bots]\n- <a:Activo:722275598432469317> ${to.toLocaleString()} | <a:Offline:722275607957733496> ${guild.members.cache.filter(m => m.presence.status == 'offline').size.toLocaleString()}`) 
    .addField(`Canales Totales:`, `- ${guild.channels.cache.size} [**${guild.channels.cache.filter(c => c.type === 'text').size}** de texto | **${guild.channels.cache.filter(c => c.type === 'voice').size}** de voz | **${guild.channels.cache.filter(c => c.type === 'category').size}** categorías]`) 
    .addField(`Emojis:`, `- ${guild.emojis.cache.size} [**${guild.emojis.cache.filter(e => !e.animated).size}** estáticos | **${guild.emojis.cache.filter(e => e.animated).size}** animados]`)
    .addField(`Mensaje del sistema:`, `- ${s}`)
    .addField(`Canales de noticias:`, `- ${newsch.length <= 0 ? "Ningun canal." : `${newsch}`}`)
    .addField(`Rol mas alto:`, `- ${guild.roles.highest}`)
    .addField(`Canal AFK:`, `- ${guild.afkChannel !== null ? `**${guild.afkChannel}**\n- ${y}` : "No tiene"}  `) 
    .addField(`Region:`, `- ${region[guild.region]}`)
    .addField(`Baneos:`, `- ${x}`)
    .addField(`Roles:`, `- ${guild.roles.cache.size}`)  
    .addField(`Ventajas:`, `- ${guild.features.length <= 0 ? "Ninguna" : `${guild.features.map(f => mejoras[f]).join("\n- ")}`}`)
    .addField(`Nitro Boost:`, `- Boosteos: ${guild.premiumSubscriptionCount}\n- ${nivel[guild.premiumTier]}`)
    .addField(`Nivel de verificacion:`, `- ${w}`)
    .addField(`Creado el:`, `- ${moment(guild.createdAt).utcOffset(-3).format("dddd D MMMM YYYY")}\n- ${checkDays(guild.createdAt)}`)
    .setColor("RANDOM")
    .setThumbnail(guild.iconURL({ format: "png", dynamic: true, size: 2048 }))
    
    message.channel.send(serv)
    
    
  }
}