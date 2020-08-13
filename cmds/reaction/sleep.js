module.exports = {
  name: "sleep",
  alias: [],
  cooldown: 5,
  category: "reaction",
  run: async (cute, message, args) => {
    
  const marsnpm = require("marsnpm");  
    
  const Discord = require("discord.js")
   
  let url = await marsnpm.sleep();
  
  const ha = new Discord.MessageEmbed()
  .setDescription(`¡${message.author} se puso a dormir!`)
  .setImage(url)
  .setColor("RANDOM")
  
  message.channel.send(ha);
  
    
    
    
    
    
    
    
  }
}