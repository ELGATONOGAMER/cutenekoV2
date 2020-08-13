module.exports = {
  name: "structure",
  alias: [],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {
  
  const Discord = require("discord.js")  
    
  const { Util } = require("discord.js");
    
     if(!message.guild) return message.channel.send("<a:cloading:713914246601113693> | Supongo que este es el unico canal que hay..")

    let text = "";
    
   
    let member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[1]) 
    let col;
    if(member) {
     
      col = message.guild.channels.cache.filter(c => c.type === "category" ? (c.children.some(r => r.permissionsFor(member).has("VIEW_CHANNEL"))) : (c.permissionsFor(member).has("VIEW_CHANNEL")));

    } else {
     
      if(args[1]) member = await message.guild.members.fetch(args[1]).catch(err => {});
     
      if(member) col = message.guild.channels.cache.filter(c => c.type === "category" ? (c.children.some(r => r.permissionsFor(member).has("VIEW_CHANNEL"))) : (c.permissionsFor(member).has("VIEW_CHANNEL")));

   
      else col = message.guild.channels.cache;
    }
   
    const wocat = Util.discordSort(col.filter(c => !c.parent && c.type !== "category"))
 
    const textnp = wocat.filter(c => ['text', 'store', 'news'].includes(c.type));
    const voicenp = wocat.filter(c => c.type === "voice");
  
    if(wocat.size >= 1) {
     
      text += textnp.map(advancedmap).join("\n");
      text += voicenp.map(advancedmap).join("\n");
    };

   
    let cats = Util.discordSort(col.filter(c => c.type === "category"));
    cats.each(c => {
   
      const children = c.children.intersect(col);

      
      const textp = children.filter(c => ['text', 'store', 'news'].includes(c.type));
      const voicep = children.filter(c => c.type === "voice");
     
      text += "\n[📂] " + c.name;
      text += textp.size ? ("\n\t" + Util.discordSort(textp).map(advancedmap).join("\n\t")) : ""
      text += voicep.size ? ("\n\t" + Util.discordSort(voicep).map(advancedmap).join("\n\t")) : ""
    })

    const split = Util.splitMessage(text)

   
    for (let i in split) {
      await message.channel.send("\nEstructura de: " + message.guild.name + (member ? (" para " + member.user.tag) : ""), { code: split[i] })
    }
  },
  aliases: [],
  description: "Estructura para el servidor.",
}


function advancedmap(c) {
       
        let r = "";
       
        switch(c.type) {
          case "news":
             r += "[📣] " + c.name;
            break;
          case "text":
            r += "[💬] " + c.name;
            break;
          case "voice":
            r += " [🎙] " + c.name + (c.members.size ? (c.members.map(d => {
              if(d.user.bot) {
                return "\n\t\t[🤖] " + d.user.tag;
              } else {
                return "\n\t\t[🙍] " + d.user.tag;
              }
            })).join("") : "")
            break;
          case "store":
            r += "[💵] " + c.name;
            break;
          default:
        
            r += "[?] " + c.name;
            break;
        }
       
        return r;
}