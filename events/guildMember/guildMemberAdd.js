const Discord = require("discord.js")
const { crearDB } = require("megadb")
const prefixdb = new crearDB("serveropts")

module.exports =
  async (cute, member) => {
  
  const welcomeM = prefixdb.tiene(`${member.guild.id}.welcomeM`) ? await prefixdb.obtener(`${member.guild.id}.welcomeM`) : "Adios {usertag} te extrañaremos."   
    
  const guild = member.guild  
  
  let channel = " ";
  
  if(!prefixdb.tiene(`${guild.id}.welcome`)){
    
  return;
    
  } else {
    
  channel = await prefixdb.obtener(`${guild.id}.welcome`)
    
  }
  
  const canal = member.guild.channels.cache.get(channel);
  if (canal) return canal.send(replaces(welcomeM))
   else return;
    
    //
  
    
  function replaces(string) {
  return string
    .replace(/(?<![A-Z]){user}(?![A-Z])/gi, member)
    .replace(/(?<![A-Z]){usertag}(?![A-Z])/gi, member.user.tag)
    .replace(/(?<![A-Z]){username}(?![A-Z])/gi, member.user.username)
    .replace(/(?<![A-Z]){server}(?![A-Z])/gi, guild.name)
    .replace(/(?<![A-Z]){members}(?![A-Z])/gi, guild.memberCount);
        
  } 
  
  
}


