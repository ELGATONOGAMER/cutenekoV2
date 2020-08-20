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
    
    const coman = cute.commands.size+5

    const emhelp = new Discord.MessageEmbed()
     .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 })}`)
    .setDescription("¡¡Hola, me llamo: `"+cute.user.username+"` y lo que veras a continuacion es una informacion basica para empezar a usar mis comandos y opciones.!!\n\nTengo por ahora `8` categorias y `"+coman+"` comandos.\n\nActual prefix: `"+prefix+"`\n\n`"+prefix+"commands` | Para ver la lista de comandos disponibles.\n`"+prefix+"set` | Para ver las configuraciones actuales del servidor.\n\n<a:cloading:713914246601113693> | [Vota](https://top.gg/bot/684594811700903939/vote)\n<a:cloading:713914246601113693> | [Invitame](https://discord.com/oauth2/authorize?client_id=684594811700903939&scope=bot&permissions=268764168) \n<a:cloading:713914246601113693> | [Servidor social](https://discord.gg/C6tpUPH)\n<a:cloading:713914246601113693> | [GitHub](https://github.com/ELGATONOGAMER/cutenekoV2)")
    .setImage("https://media.giphy.com/media/ErZ8hv5eO92JW/giphy.gif")
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`Pedido por ${message.author.tag}`, `${message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 })}`)
    
    message.channel.send(emhelp)
    
  }
}