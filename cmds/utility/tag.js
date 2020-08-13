module.exports = {
  name: "tag",
  alias: ["discriminator"],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {


let i = 0;

const tag = message.guild.members.cache.filter(m => m.user.discriminator === args[0]).map(m => `[${++i}] ${m.user.tag}`).join("\n")
    
 if(isNaN(args[0])){
        
     return message.channel.send("<a:cloading:713914246601113693> | ¡Solo agrega numeros!\n<a:cloading:713914246601113693> | Ejemplo: 6666")
   
 }    
    
 if (args[0].length > 4 || args[0].length < 4) return message.channel.send("<a:cloading:713914246601113693> | ¡Solo agrega 4 digitos!\n<a:cloading:713914246601113693> | Ejemplo: 6666")   
    
if(!message.guild.members.cache.find(m => m.user.discriminator === args[0])) return message.channel.send("```ml\nNo se encontraron usuarios con el tag: #"+args[0]+"```")    

message.channel.send("```ml\nUsuarios con el tag: #"+args[0]+"\n\n"+tag+"```")
    
    
  }
}