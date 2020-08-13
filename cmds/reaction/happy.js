module.exports = {
  name: "happy",
  alias: [],
  cooldown: 5,
  category: "reaction",
  run: async (cute, message, args) => {
    
 const marsnpm = require("marsnpm");  
    
  const Discord = require("discord.js")
   
  let url = await marsnpm.happy();
  
  const ha = new Discord.MessageEmbed()
  .setDescription(`¡${message.author} esta feliz!`)
  .setImage(url)
  .setColor("RANDOM")
  
  message.channel.send(ha);
  
    
    
    
    
    
    
    
  }
}