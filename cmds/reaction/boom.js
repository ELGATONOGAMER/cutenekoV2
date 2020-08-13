module.exports = {
  name: "boom",
  alias: [],
  cooldown: 5,
  category: "reaction",
  run: async (cute, message, args) => {
    
  const Discord = require("discord.js")
   
  const marsnpm = require("marsnpm");  
    
 
   
  let url = await marsnpm.boom();
  
  const ha = new Discord.MessageEmbed()
  .setDescription(`¡¡¡${message.author} BOOOM!!!`)
  .setImage(url)
  .setColor("RANDOM")
  
  message.channel.send(ha);
    
    
    
    
    
    
    
  }
}