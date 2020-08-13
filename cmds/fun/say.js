module.exports = {
  name: "say",
  alias: [],
  cooldown: 5,
  category: "fun",
  run: async (cute, message, args) => {
    
    
    
    const canal = message.mentions.channels.size < 1 ? message.channel : message.mentions.channels.first()
    
    let texto = canal === message.channel ? args.join(" ") : args.slice(1).join(" ")
    
    if (!texto) return message.channel.send("<a:cloading:713914246601113693> | Ingresa algo a decir.")
    
    canal.send(texto)
    message.delete()
    
  }
}