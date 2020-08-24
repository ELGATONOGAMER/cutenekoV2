module.exports = {
  name: "meme",
  alias: ["momazo"],
  cooldown: 7,
  category: "fun",
  run: async (cute, message, args) => {

  const { memeAsync } = require('memejs');

 message.channel.send("<a:cloading:713914246601113693> | Espera mientras se carga el meme.").then(async o => {

memeAsync('SpanishMeme') 
.then(async m => {
  
 

  await message.channel.send(`${m.title}`,{ files : [`${m.url}`] })
  await o.delete()

  })

})





  }
}