const Discord = require("discord.js")
const cute = new Discord.Client({ allowedMentions: { parse: [] } })
cute.roles = new(require("./utils/RoleManager.js"))(cute);
const mongoose = require("mongoose")

const fs = require("fs"), { readdirSync } = require("fs")

cute.commands = new Discord.Collection()

cute.login(process.env.token).then(() => {
  
  console.log(`Sesión iniciada como ${cute.user.tag}\nID: ${cute.user.id}\nEn ${cute.guilds.cache.size.toLocaleString()} servidores`)
  
}).catch((err) => {
  
  console.error(`Ha ocurrido un error al intentar iniciar sesión.\n${err}`)
  
})


/* ===== EVENTO READY ===== */ 

for (const file of fs.readdirSync("./events/ready")){
  
  if(file.endsWith(".js")){
    
    let filen = file.substring(0, file.length - 3)
    
    let filec = require(`./events/ready/${file}`)
    
    cute.on(filen, filec.bind(null, cute))
    
  }
  
}

/* ====== EVENTO MESSAGE ====== */

for (const file of fs.readdirSync("./events/messages")){
  
  if(file.endsWith(".js")){
    
    let filen = file.substring(0, file.length - 3)
    
    let filec = require(`./events/messages/${file}`)
    
    cute.on(filen, filec.bind(null, cute))
    
  }
  
}

/* ====== EVENTOS DE GUILD ====== */

for (const file of fs.readdirSync("./events/guild")){
  
  if(file.endsWith(".js")){
    
    let filen = file.substring(0, file.length - 3)
    
    let filec = require(`./events/guild/${file}`)
    
    cute.on(filen, filec.bind(null, cute))
    
  }
  
}

/* <===== Eventos de guildMember =====> */

for (const file of fs.readdirSync("./events/guildMember")){
  
  if(file.endsWith(".js")){
    
    let filen = file.substring(0, file.length - 3)
    
    let filec = require(`./events/guildMember/${file}`)
    
    cute.on(filen, filec.bind(null, cute))

    
  }
  
}

/* ========  COMANDOS UTILES ======== */

for (const file of fs.readdirSync("./cmds/utility")){
  
  if(file.endsWith(".js")){
    
    let filec = require(`./cmds/utility/${file}`)
    
    cute.commands.set(filec.name, filec)
    
  }
  
}

/* <===== Comandos de Desarrollo =====> */

for (const file of fs.readdirSync("./cmds/development")){
  
  if(file.endsWith(".js")){
    
    let filec = require(`./cmds/development/${file}`)
    
    cute.commands.set(filec.name, filec)
    
  }
  
}

/* <===== Comandos de Configuracion =====> */

for (const file of fs.readdirSync("./cmds/config")){
  
  if(file.endsWith(".js")){
    
    let filec = require(`./cmds/config/${file}`)
    
    cute.commands.set(filec.name, filec)
    
  }
  
}

/* <===== Comandos de Reaccion =====> */

for (const file of fs.readdirSync("./cmds/reaction")){
  
  if(file.endsWith(".js")){
    
    let filec = require(`./cmds/reaction/${file}`)
    
    cute.commands.set(filec.name, filec)
    
  }
  
}

/* <===== Comandos de Interaccion =====> */

for (const file of fs.readdirSync("./cmds/interaction")){
  
  if(file.endsWith(".js")){
    
    let filec = require(`./cmds/interaction/${file}`)
    
    cute.commands.set(filec.name, filec)
    
  }
  
}

/* <===== Comandos de Diversión =====> */

for (const file of fs.readdirSync("./cmds/fun")){
  
  if(file.endsWith(".js")){
    
    let filec = require(`./cmds/fun/${file}`)
    
    cute.commands.set(filec.name, filec)
    
  }
  
}

/* <===== Comandos de Moderacion =====> */

for (const file of fs.readdirSync("./cmds/moderation")){
  
  if(file.endsWith(".js")){
    
    let filec = require(`./cmds/moderation/${file}`)
    
    cute.commands.set(filec.name, filec)
    
  }
  
}

