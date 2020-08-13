module.exports = {
  name: "pussy",
  alias: ["papaya"],
  cooldown: 10,
  category: "nsfw",
  run: async (cute, message, args) => {
  
   if(!message.channel.nsfw) return message.channel.send("Dirígete a un canal `NSFW`")    
    
  const client = require('nekos.life');  
    
  const Discord = require("discord.js") 
  
  const {nsfw} = new client();
    
  var url;

  await nsfw.pussy().then(res => {
      
  url = res.url;
  
  }); 
    
  const gif = new Discord.MessageEmbed()
 .setDescription(`${message.author} hey... te sale baba.`)    
 .setColor("RANDOM")
 .setImage(url)
      

  await message.channel.send(gif);
    
    
    
    
   }
  }  
