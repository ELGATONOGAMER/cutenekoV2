module.exports = {
  name: "cry",
  alias: [],
  cooldown: 5,
  category: "reaction",
  run: async (cute, message, args) => {
    
  const marsnpm = require("marsnpm");  
    
  const Discord = require("discord.js")
   
   let url = await marsnpm.cry();
  
  const ha = new Discord.MessageEmbed()
  .setDescription(`¡${message.author} se puso a llorar :c!`)
  .setImage(url)
  .setColor("RANDOM")
  
  message.channel.send(ha);

  
    
    
    
    
    
    
    
  }
}