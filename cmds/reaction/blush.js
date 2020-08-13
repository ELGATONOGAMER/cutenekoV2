module.exports = {
  name: "blush",
  alias: [],
  cooldown: 5,
  category: "reaction",
  run: async (cute, message, args) => {
    
  const star = require('star-labs');  
    
  const Discord = require("discord.js")
  
  const ha = new Discord.MessageEmbed()
  .setDescription(`¡${message.author} se ha sonrojado ^^" !`)
  .setImage(star.blush())
  .setColor("RANDOM")
  
  message.channel.send(ha);
  
    
    
    
    
    
    
    
  }
}