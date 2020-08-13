module.exports = {
  name: "poke",
  alias: [],
  cooldown: 5,
  category: "interaction",
  run: async (cute, message, args) => {

  const client = require('nekos.life');  
    
  const Discord = require("discord.js")
    
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  
  if(!member) return message.channel.send("<a:cloading:713914246601113693> | ¿A quien quieres molestar un poco?")

    
  let j = " ";  
    
  if(member.id === message.member.id){
    
  j = "Bup, bup, bup. ^^"
    
  } else {
    
  
  j = `¡${message.author} le da toques a ${member}!`
    
 
  }
  
  const {sfw} = new client();
    
  var url;

  await sfw.poke().then(res => {
      
  url = res.url;
  
  });

  const gif = new Discord.MessageEmbed()
 .setDescription(`${j}`)    
 .setColor("RANDOM")
 .setImage(url)
      

  await message.channel.send(gif);
    
    
    
    
   }
  }