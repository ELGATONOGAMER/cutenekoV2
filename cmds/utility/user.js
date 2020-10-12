module.exports = {
  name: "user",
  alias: ["userinfo", "infouser"],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {
    
    const { crearDB } = require("megadb")
    const dev_db = new crearDB("devs");
    const vip_db = new crearDB("vips");
    
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
        return días == 0 ? "**Creada hoy**" : ("hace **" + días + (días == 1 ? "** día" : "** días"));
    
    }
    
  const status = {
    
  "dnd": "<a:No_molestar:722275627658379355> | No molestar",
  "idle": "<a:Ausente:722275618045034506> | Ausente",
  "offline": "<a:Offline:722275607957733496> | Desconectado",
  "online": "<a:Activo:722275598432469317> | Conectado"
  
  };  
    
  
let member = ""
let arein = ""
let purl = " ";
let pts = " ";  

if(!args.length){
member = message.member
} else {
member = args[0] ? message.mentions.members.first() 
|| message.guild.members.cache.get(args[0]) 
|| message.guild.members.cache.find(m => m.user.tag.toLowerCase() === args.join(" ").toLowerCase()) 
|| message.guild.members.cache.find(m => m.displayName.toLowerCase() === args.join(" ").toLowerCase()) 
|| message.guild.members.cache.find(m => m.user.tag.toLowerCase().includes(args.join(" ").toLowerCase())) 
|| message.guild.members.cache.find(m => m.displayName.toLowerCase().includes(args.join(" ").toLowerCase()))
|| args[0]
|| message.member : message.member;
}

member = cute.users.resolve(member) ? message.guild.member(member) : null;

if(member) {
    
let p = member.user.presence.activities.map(Activity => Activity.name).join(" ") ? member.user.presence.activities.map(Activity => Activity.name).join(" | ") : "No tiene";
let pt = member.user.presence.activities.map(Activity => Activity.type).join(" ") ? member.user.presence.activities.map(Activity => Activity.type) : "";
let ps = member.user.presence.activities.map(Activity => Activity.state).join(" ").length > 0 ? `\n- ${member.user.presence.activities.map(Activity => Activity.state).join(" | ")}` : "";
let pd = member.user.presence.activities.map(Activity => Activity.details).join(" ") ? `\n- ${member.user.presence.activities.map(Activity => Activity.details).join(" | ")}` : "";

let cS = member.presence.clientStatus

if(cS) {
  if(cS.desktop){
    arein = "🖥️ | PC"
  } else if(cS.web){
    arein = "🌐 | Navegador"
  } else if(cS.mobile){
    arein = "📱 | Móvil/Teléfono/Célular"
  }
}
    
if(pt == "PLAYING"){
    pts = "**Jugando a:**\n- "
    purl = p
  } else if(pt == "STREAMING"){
    pts = "**Transmitiendo:**\n- "
    purl = `[${p}](${member.user.presence.activities.map(Activity => Activity.url) < 1 ? member.user.presence.activities.map(Activity => Activity.url).join(" ") : member.user.presence.activities.map(Activity => Activity.url)[1]})`
  } else if(pt == "LISTENING"){
    pts = "**Escuchando:**\n- "
    purl = p
  } else if(pt == "WATCHING"){
    pts = "**Viendo:**\n- "
    purl = p
  } else if(pt == "CUSTOM_STATUS"){
    pts = "**Estado personalizado:**\n- "
    purl = p
  } else if(pt == null || pt == undefined || !pt){
    pts = ""
    purl = p
  } else {
    pts = ""
    purl = p
  }
    
 let insignias = " "
 
let badges = [];

 if(member.user.flags > 0){
  badges = member.user.flags.toArray();
    if(member.premiumSince){
      badges.push("NITRO", "NITRO_BOOSTER")
    } else if(member.user.avatar.startsWith("a_")){
      badges.push("NITRO")
    }
 }
    
    if(dev_db.tiene(`${member.user.id}`)) {
      badges.push("CUTESTAFF")
    } else {
      
    }
    
     if(vip_db.tiene(`${member.user.id}`)) {
      badges.push("VIPUSER")
    } else {
     
    }
    
    let dias = ""
    
    if (member.premiumSince) {
      
    dias = checkDays(member.premiumSince)  
      
    } else {
      
   dias = ""
      
    }

  const ins = {
    "NITRO": "<:cnitro:722327361651081226>",
    "NITRO_BOOSTER": "<:cbooster:722284492370477120>",
    "EARLY_SUPPORTER": "<:csupporter:722284492408094740>",
    "DISCORD_EMPLOYEE": "<:cempleado:722331558568263682>",
    "DISCORD_PARTNER": "<:cpartner:764339504692723752>",
    "HYPESQUAD_EVENTS": "<:ceventshype:722332456606367755>",
    "HOUSE_BRAVERY": "<:cbravery:722281913519177758>",
    "HOUSE_BRILLIANCE": "<:cbrilliance:722281913179701311>",
    "BUGHUNTER_LEVEL_1": "<:cbughunter:722284492386992167>",
    "BUGHUNTER_LEVEL_2": "<:cbughunterlvl2:722327361751875594>",
    "VERIFIED_DEVELOPER": "<:cbotdev:722284492643106836>",
    "HOUSE_BALANCE": "<:cbalance:722281913318113300>",
    "TEAM_USER": "<:cteam:722331558782042172>",
    "VERIFIED_BOT": "<:cbotverify:722331558387777567>",
    "SYSTEM": "<:csystem:722331558182125592>",
    "CUTESTAFF": "<a:cutestaff:723604933982552115>",
    "VIPUSER": "<a:cvip:715735223362519040>"
  }
  
  const boost = `${moment(member.premiumSince).utcOffset(-3).format("dddd D MMMM YYYY")}\n- ${dias}`
  
  insignias = `${member.user.flags ? badges && badges.length <= 0 ? "Ninguna." : `${badges.map(b => ins[b]).join(" | ")}` : "No tiene"}`
    
 
  
  const pre = `${pts}${purl}${pd}${ps}`
  
  let b = " ";
    
  if(member.presence.status == "offline") {
       
  b = `- ${status[member.presence.status]}` 
    
  } else {
    
  b = `- ${status[member.presence.status]}\n- ${arein}`  
    
  }
    
  const be = {
  
  false:"No",
  true:"Si"

  }

  const us = new Discord.MessageEmbed()  
  .addField(`Nombre:`, `- ${member.user.username}`)  
  .addField(`Apodo:`, `- ${member.nickname ? member.nickname : "No tiene"}`)   
  .addField(`Tag:`, `- #${member.user.discriminator}`)   
  .addField(`ID:`, `- ${member.user.id}`)   
  .addField(`¿Bot?`, `- ${be[member.user.bot]}`)
  .addField(`Presencia:`, `- ${pre}`)
  .addField(`Insignias:`, `- ${insignias}`)   
  .addField(`Estado:`, `${b}`)  
  .addField(`Rol más alto:`, `- ${member.roles.highest !== "@everyone" ? `${member.roles.highest}` : "¿No tiene?"}`)
  .addField(`Rol color:`, `- ${message.member.displayHexColor}`)
  .addField(`Roles:`, `- ${member.roles.cache.size-1}`)   
  .addField(`Boosteo este servidor el:`, `- ${member.premiumSince !== null ? `${boost}` : "No ha boosteado"}`)
  .addField(`Se unió a Discord:`, `- ${moment(member.user.createdAt).utcOffset(-3).format("dddd D MMMM YYYY")}\n- ${checkDays(member.user.createdAt)}`)
  .addField(`Se unió al Servidor:`, `- ${moment(member.joinedAt).utcOffset(-3).format("dddd D MMMM YYYY")}\n- ${checkDays(member.joinedAt)}`)
  .setThumbnail(member.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))     
  
  .setColor("RANDOM")
  
  message.channel.send(us)

} else {

  try{
    let userData = await cute.users.fetch(args[0]);
    
      const ins = {
    "NITRO": "<:cnitro:722327361651081226>",
    "NITRO_BOOSTER": "<:cbooster:722284492370477120>",
    "EARLY_SUPPORTER": "<:csupporter:722284492408094740>",
    "DISCORD_EMPLOYEE": "<:cempleado:722331558568263682>",
    "DISCORD_PARTNER": "<:cpartner:764339504692723752>",
    "HYPESQUAD_EVENTS": "<:ceventshype:722332456606367755>",
    "HOUSE_BRAVERY": "<:cbravery:722281913519177758>",
    "HOUSE_BRILLIANCE": "<:cbrilliance:722281913179701311>",
    "BUGHUNTER_LEVEL_1": "<:cbughunter:722284492386992167>",
    "BUGHUNTER_LEVEL_2": "<:cbughunterlvl2:722327361751875594>",
    "VERIFIED_DEVELOPER": "<:cbotdev:722284492643106836>",
    "HOUSE_BALANCE": "<:cbalance:722281913318113300>",
    "TEAM_USER": "<:cteam:722331558782042172>",
    "VERIFIED_BOT": "<:cbotverify:722331558387777567>",
    "SYSTEM": "<:csystem:722331558182125592>",
    "CUTESTAFF": "<a:cutestaff:723604933982552115>",
    "VIPUSER": "<a:cvip:715735223362519040>"
  }

    const be = {
    
    false:"No",
    true:"Si"
    
    }
    
let insignias = " "
 
let badges = [];

 if(userData.flags > 0){
  badges = userData.flags.toArray();
   if(userData.avatar.startsWith("a_")){
      badges.push("NITRO")
    }
 }
    
    if(dev_db.tiene(`${userData.id}`)) {
      badges.push("CUTESTAFF")
    } else {
      
    }
    
     if(vip_db.tiene(`${userData.id}`)) {
      badges.push("VIPUSER")
    } else {
     
    }

     insignias = `${userData.flags ? badges && badges.length <= 0 ? "Ninguna." : `${badges.map(b => ins[b]).join(" | ")}` : "No tiene"}`

    const embedData = new Discord.MessageEmbed()
    .addField('Nombre', `- ${userData.username}`)
    .addField('Tag', `- #${userData.discriminator}`)
    .addField('ID', `- ${userData.id}`)
    .addField(`¿Bot?`, `- ${be[userData.bot]}`)
    .addField(`Insignias`, `- ${insignias}`)
    .setThumbnail(userData.displayAvatarURL({ format: "png", dynamic: true, size: 2048 })) 
    .setColor("RANDOM")

    await message.channel.send(embedData);
  } catch(err) { 
    message.channel.send('<a:cloading:713914246601113693> | No encontre al usuario..\n<a:cloading:713914246601113693> | Tal vez pusiste algo mal, o simplemente no se encuentra en la base de datos.');
  }

}
    
  }
}