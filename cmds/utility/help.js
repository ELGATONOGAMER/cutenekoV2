module.exports = {
  name: "help",
  alias: ["cmds", "commands"],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
    
     const { crearDB } = require("megadb")
    const prefixdb = new crearDB("serveropts")
    
    let im = ["https://media2.giphy.com/media/kXdo4BgGoFC80/giphy.gif",
     "https://media.giphy.com/media/13Z5kstwARnPna/giphy.gif",
     "https://media.giphy.com/media/VUC9YdLSnKuJy/giphy.gif",
     "https://media.giphy.com/media/ErZ8hv5eO92JW/giphy.gif"];

    let img = im[Math.floor(im.length * Math.random())];  
  
    const prefix = prefixdb.tiene(`${message.guild.id}.prefix`) ? await prefixdb.obtener(`${message.guild.id}.prefix`) : "g?" 
    
    const emhelp = new Discord.MessageEmbed()
    .setDescription("Hola! este es un cuadro de ayuda para que puedas orientarte, si necesitas saber cual es el prefix del bot actualmente es: `"+prefix+"`..\n\nPara ver una lista de todos los comandos que poseo utiliza: `"+prefix+"commands`\n\nRecuerda que los signos `<>` no se deben colocar y solo son demostrativos.\n\nOtro dato es que puedes usar el comando: `"+prefix+"set` para ver las configuraciones del servidor.\n\nPor ultimo te invitamos a que veas los siguientes links UwU y disfrutes al maximo del Bot..\n\n[Vota](https://top.gg/bot/684594811700903939/vote) | [Invitame](https://discord.com/oauth2/authorize?client_id=684594811700903939&scope=bot&permissions=268764168) | [Servidor de soporte](https://discord.gg/vYpsRTm) | [Servidor social](https://discord.gg/C6tpUPH)")
    .setImage("https://media.giphy.com/media/ErZ8hv5eO92JW/giphy.gif")
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`Pedido por ${message.author.tag}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 })}`)
    
    message.channel.send(emhelp)
    
  }
}