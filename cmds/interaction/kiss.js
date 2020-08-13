module.exports = {
  name: "kiss",
  alias: [],
  cooldown: 5,
  category: "interaction",
  run: async (cute, message, args) => {

  const client = require('nekos.life');  
    
  const Discord = require("discord.js")
    
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  
  if(!member) return message.channel.send("<a:cloading:713914246601113693> | ¿A quien quieres darle un besito OwO?")

    
  let j = " ";  
    
  if(member.id === cute.user.id){
    
  return message.channel.send("¡BAKA! ni lo pienses..")
    
  }   
    
  if(member.id === message.member.id){
    
  return message.channel.send("N-no creas que te besare yo.. >-<")
    
  } else {
    
  
  j = `¡${message.author} beso a ${member} OwO!`
    
 
  }
  
  const {sfw} = new client();
    
  var url;

  await sfw.kiss().then(res => {
      
  url = res.url;
  
  });

  const gif = new Discord.MessageEmbed()
 .setDescription(`${j}`)    
 .setColor("RANDOM")
 .setImage(url)
      

  await message.channel.send(gif);
    
    
    
    
   }
  }