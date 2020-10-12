module.exports = {
  name: "sarcastic",
  alias: [],
  cooldown: 5,
  category: "fun",
  run: async (cute, message, args) => {

   const marsnpm = require("marsnpm");

   const texto = args.join(" ")

   const sarc = marsnpm.getSarcastic(texto)

   message.channel.send(sarc)
   message.delete()

  }
}