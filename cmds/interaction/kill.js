module.exports = {
  name: "kill",
  alias: [],
  cooldown: 5,
  category: "interaction",
  run: async (cute, message, args) => {
    
  const marsnpm = require("marsnpm");  
    
  const Discord = require("discord.js")
  
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  
  if(!member) return message.channel.send("<a:cloading:713914246601113693> | ¿A quien quieres matar...?")

    
  let j = " ";  
    
  if(member.id === message.member.id){
    
  return message.channel.send("<a:cloading:713914246601113693> | No te puedes matar a ti mismo.\n<a:cloading:713914246601113693> | `Funcion eliminada, ya que esto cuenta como un suicide.`")
    
  } else {
    
  
  j = `¡${message.author} mato a ${member}!`
    
 
  }
  
  let url = await marsnpm.kill();
  
  const ha = new Discord.MessageEmbed()
  .setDescription(`${j}`)
  .setImage(url)
  .setColor("RANDOM")
  
  message.channel.send(ha);
  
    
    
    
    
    
    
    
  }
}