module.exports = {
  name: "dance",
  alias: [],
  cooldown: 5,
  category: "reaction",
  run: async (cute, message, args) => {
    
  const marsnpm = require("marsnpm");  
    
  const Discord = require("discord.js")
   
  let url = await marsnpm.dance();
  
  const ha = new Discord.MessageEmbed()
  .setDescription(`¡${message.author} esta bailando!`)
  .setImage(url)
  .setColor("RANDOM")
  
  message.channel.send(ha);
  
    
    
    
    
    
    
    
  }
}