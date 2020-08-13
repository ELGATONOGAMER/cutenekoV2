module.exports = {
  name: "fbi",
  alias: [],
  cooldown: 5,
  category: "reaction",
  run: async (cute, message, args) => {
    
  const marsnpm = require("marsnpm");  
    
  const Discord = require("discord.js")
   
  let url = await marsnpm.fbi();
  
  const ha = new Discord.MessageEmbed()
  .setDescription(`¡ATENCION todos, vino la FBI!`)
  .setImage(url)
  .setColor("RANDOM")
  
  message.channel.send(ha); 
    
    
    
    
  }
}