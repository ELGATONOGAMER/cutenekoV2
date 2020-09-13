module.exports = {
  name: "avatar",
  alias: [],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
    
    const guild = message.guild; 
    
    const img = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
      
     if (!args.length) {
       
       const mencionado = new Discord.MessageEmbed()
    .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
    .setImage(`${message.author.avatarURL({ format: "png", dynamic: true, size: 2048 })}`)
    .setColor("RANDOM")
    .setFooter('Pedido por: '+message.author.username)
    .setTitle('Avatar de '+img.user.username)
    .setDescription('[Avatar URL]('+img.user.avatarURL({ format: "png", dynamic: true, size: 2048 })+')');
       
    message.channel.send(mencionado)   
       
    } else if (args[0] === 'server') {
     
         if(message.guild.iconURL({ format: "png", dynamic: true, size: 2048 }) === null){
           
      const nohayiwal = new Discord.MessageEmbed()
      .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
      .setColor("RANDOM")
      .setFooter('Pedido por: '+message.author.username)
      .setDescription(`**${guild.name}** no tiene un avatar :/`); 
           
           
      return message.channel.send(nohayiwal)
       }       
      
      
        const server = new Discord.MessageEmbed()
       .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
       .setTitle('Avatar de '+guild.name)
       .setDescription('[Avatar URL]('+message.guild.iconURL({ format: "png", dynamic: true, size: 2048 })+')')
       .setImage(`${message.guild.iconURL({ format: "png", dynamic: true, size: 2048 })}`)  
       .setColor("RANDOM")
       .setFooter('Pedido por: '+message.author.username)
       message.channel.send(server)     
      
      
       
    } else if (img.user.avatarURL({ format: "png", dynamic: true, size: 2048 }) === null) {
      
        const nohay = new Discord.MessageEmbed()
          .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
          .setColor("RANDOM")
          .setFooter('Pedido por: '+message.author.username)
          .setDescription(`<@${img.id}> no tiene un avatar :/`)
      
          message.channel.send(nohay)
        
      } else {
      
      
       const mencionado = new Discord.MessageEmbed()
    .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
    .setImage(""+img.user.avatarURL({ format: "png", dynamic: true, size: 2048 })+"")
    .setColor("RANDOM")
    .setFooter('Pedido por: '+message.author.username)
    .setTitle('Avatar de '+img.user.username)
    .setDescription('[Avatar URL]('+img.user.avatarURL({ format: "png", dynamic: true, size: 2048 })+')');
       
    message.channel.send(mencionado)  
      
    }
     
     
    
  }
}
