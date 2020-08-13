module.exports = {
  name: "boobs",
  alias: ["bubis", "melones", "sandias"],
  cooldown: 10,
  category: "nsfw",
  run: async (cute, message, args) => {
  
  if(!message.channel.nsfw) return message.channel.send("Dirígete a un canal `NSFW`")  
    
  const client = require('nekos.life');  
    
  const Discord = require("discord.js") 
  
  const {nsfw} = new client();
    
  var url;

  await nsfw.boobs().then(res => {
      
  url = res.url;
  
  }); 
    
  const gif = new Discord.MessageEmbed()
 .setDescription(`${message.author} Bubis ^^" `)    
 .setColor("RANDOM")
 .setImage(url)
      

  await message.channel.send(gif);
    
    
    
    
   }
  }  