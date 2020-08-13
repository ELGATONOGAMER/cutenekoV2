module.exports = {
  name: "reverse",
  alias: [],
  cooldown: 5,
  category: "fun",
  run: async (cute, message, args) => {
    
  const texto = args.join(" ").split("").reverse().join("") 
  
  if (!texto) return message.channel.send("<a:cloading:713914246601113693> | Ingresa algo a revertir.")  
    
  message.channel.send(texto)
  message.delete()
    
    
  }
}