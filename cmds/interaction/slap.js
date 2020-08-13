module.exports = {
  name: "slap",
  alias: [],
  cooldown: 5,
  category: "interaction",
  run: async (cute, message, args) => {
    
  const marsnpm = require("marsnpm");  
    
  const Discord = require("discord.js")
  
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  
  if(!member) return message.channel.send("<a:cloading:713914246601113693> | ¿A quien quieres darle una cachetada >:D?")

    
  let j = " ";  
    
  if(member.id === message.member.id){
    
  j = "Pues vale... te cacheteo yo >.<"
    
  } else {
    
  
  j = `¡${message.author} le dio una cachetada a ${member}!`
    
 
  }
  
  let url = await marsnpm.slap();
  
  const ha = new Discord.MessageEmbed()
  .setDescription(`${j}`)
  .setImage(url)
  .setColor("RANDOM")
  
  message.channel.send(ha);
  
    
    
    
    
    
    
    
  }
}