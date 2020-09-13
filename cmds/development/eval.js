module.exports = {
  name: "eval",
  alias: ["e"],
  cooldown: 5,
  category: "development",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
    const moment = require("moment")
    require("moment-duration-format")
    
    const { crearDB } = require("megadb")
    const dev_db = new crearDB("devs");
    const prefixdb = new crearDB("serveropts")
    
    const prefix = prefixdb.tiene(`${message.guild.id}.prefix`) ? await prefixdb.obtener(`${message.guild.id}.prefix`) : "g?"
  
    
    if(!dev_db.tiene(`${message.author.id}`)) return message.channel.send("<a:cloading:713914246601113693> | Solo mi querido amo puede usar este comando.")      
    
    if(!args.length) return message.channel.send(`¿Qué deseas evaluar, ${message.author.id == "686766483350880351" ? "Diosito Rickz" : "Sr Gato"}?`)
    
    let limit = 1000
    let code = args.join(" ")
    
    try{
      
      let evalued = eval(code)
      
      if(typeof evalued !== "string")
        evalued = require("util").inspect(evalued, { depth: 0 })
      let txt = ""+evalued
      
      const type2 = typeof eval(code)
      const type1 = type2.toString().split("")
      const type = type1[0].toUpperCase()+type1.slice(1).join("")
      
      if(txt.length > limit){
        
        const embed = new Discord.MessageEmbed()
        .setAuthor(`~ Evaluación`, `${cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 })}`)
        .setColor(`#1bb0ff`)
        .setDescription(`La evaluación fue recortada debido a que superó el límite de caracteres permitidos por Discord en un campo.`)
        .setFooter(`Evaluado por ${message.author.tag}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true, size: 2048 })}`)
        .addField("・Hecha en: ", `\`\`\`yaml\n${Math.floor(Date.now() - message.createdTimestamp)}ms\n\`\`\``, true)
        .addField("・Tipo", `\`\`\`css\n${type}\n\`\`\``, true)
        .addField("・Entrada", `\`\`\`js\n${code}\n\`\`\``)
        .addField("・Salida", `\`\`\`js\n${txt.slice(0, limit)}...\n\`\`\``)
        
        message.channel.send(embed)
        console.log(txt)
        
      } else {
        
        const embed = new Discord.MessageEmbed()
        .setAuthor(`~ Evaluación`, `${cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 })}`)
        .setColor(`#1bb0ff`)
        .setFooter(`Evaluado por ${message.author.tag}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true, size: 2048 })}`)
        .addField("・Hecha en: ", `\`\`\`yaml\n${Math.floor(Date.now() - message.createdTimestamp)}ms\n\`\`\``, true)
        .addField("・Tipo", `\`\`\`css\n${type}\n\`\`\``, true)
        .addField("・Entrada", `\`\`\`js\n${code}\n\`\`\``)
        .addField("・Salida", `\`\`\`js\n${txt}\n\`\`\``)
        
        message.channel.send(embed)
        
      }
      
    } catch (err) {
      
      const embed = new Discord.MessageEmbed()
      .setAuthor("Evaluación errónea", `${cute.user.displayAvatarURL({ format: "png", size: 1024 })}`)
      .addField("・Hecha en: ", `\`\`\`yaml\n${Math.floor(Date.now() - message.createdTimestamp)}ms\n\`\`\``, true)
      .addField("・Entrada", `\`\`\`js\n${code}\n\`\`\``)
      .addField("・Salida", `\`\`\`js\n${err}\n\`\`\``)
      .setColor("#ff0000")
      .setFooter(`Evaluado por ${message.author.tag}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true, size: 2048 })}`)
        
      message.channel.send(embed);
      
    }
    
  }
}