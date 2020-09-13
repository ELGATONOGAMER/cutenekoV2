module.exports = {
  name: "meme",
  alias: ["momazo"],
  cooldown: 7,
  category: "fun",
  run: async (cute, message, args) => {

  const meme = require('melphiworker').meme()

 message.channel.send("<a:cloading:713914246601113693> | Espera mientras se carga el meme.").then(async o => {

  await message.channel.send({ files :  [`${meme}`] })
  await o.delete()
 


})





  }
}