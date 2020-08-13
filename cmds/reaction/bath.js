module.exports = {
  name: "bath",
  alias: [],
  cooldown: 5,
  category: "reaction",
  run: async (cute, message, args) => {
    
  const marsnpm = require("marsnpm");  
    
  const Discord = require("discord.js")
  
  let url = await marsnpm.bath();
  
  const ha = new Discord.MessageEmbed()
  .setDescription(`¡${message.author} se toma un baño ^^!`)
  .setImage(url)
  .setColor("RANDOM")
  
  message.channel.send(ha);
  
    
    
    
    
    
    
    
  }
}