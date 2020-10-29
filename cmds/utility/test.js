module.exports = {
  name: "test",
  alias: [],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {

 const dimgs = require('discordimgs');

  message.channel.send("<a:cloading:713914246601113693> | Espera mientras se carga el meme.").then(async o => {

 
  await message.channel.send({ files :  [dimgs.randomMemeAll()] })
  await o.delete()
 


})

  }
}