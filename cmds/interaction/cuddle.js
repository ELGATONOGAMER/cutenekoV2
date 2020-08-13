module.exports = {
  name: "cuddle",
  alias: [],
  cooldown: 5,
  category: "interaction",
  run: async (cute, message, args) => {

  const client = require('nekos.life');  
    
  const Discord = require("discord.js")
    
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  
  if(!member) return message.channel.send("<a:cloading:713914246601113693> | ¿Con quien te quieres acurucar >-<?")

    
  let j = " ";  
    
  if(member.id === message.member.id){
    
  j = "¿A-así esta bien... ^^?"
    
  } else {
    
  
  j = `¡${message.author} se acurrucó contra ${member} uwu!`
    
 
  }
  
  const {sfw} = new client();
    
  var url;

  await sfw.cuddle().then(res => {
      
  url = res.url;
  
  });

  const gif = new Discord.MessageEmbed()
 .setDescription(`${j}`)    
 .setColor("RANDOM")
 .setImage(url)
      

  await message.channel.send(gif);
    
    
    
    
   }
  }