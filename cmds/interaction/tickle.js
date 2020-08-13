module.exports = {
  name: "tickle",
  alias: [],
  cooldown: 5,
  category: "interaction",
  run: async (cute, message, args) => {

  const client = require('nekos.life');  
    
  const Discord = require("discord.js")
    
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  
  if(!member) return message.channel.send("<a:cloading:713914246601113693> | ¿A quien quieres hacerle cosquilas?")

    
  let j = " ";  
    
  if(member.id === message.member.id){
    
  j = "Te hago cosquillas ¡Corre!"
    
  } else {
    
  
  j = `¡${message.author} le hace cosquillas a ${member}!`
    
 
  }
  
  const {sfw} = new client();
    
  var url;

  await sfw.tickle().then(res => {
      
  url = res.url;
  
  });

  const gif = new Discord.MessageEmbed()
 .setDescription(`${j}`)    
 .setColor("RANDOM")
 .setImage(url)
      

  await message.channel.send(gif);
    
    
    
    
   }
  }