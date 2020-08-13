module.exports = {
  name: "confused",
  alias: [],
  cooldown: 5,
  category: "reaction",
  run: async (cute, message, args) => {
    
  const marsnpm = require("marsnpm");  
    
  const Discord = require("discord.js")
   
  let url = await marsnpm.confused();
  
  const ha = new Discord.MessageEmbed()
  .setDescription(`¡${message.author} esta confundido!`)
  .setImage(url)
  .setColor("RANDOM")
  
  message.channel.send(ha);
  
    
    
    
    
    
    
    
  }
}