const Discord = require("discord.js")

module.exports =
  async (cute, guild) => {

 const gato = cute.users.resolve("672644434449399818")

 gato.send("Nuevo servidor: `"+guild.name+"`\nCon: `"+guild.memberCount+"` Gatitos\nID: `"+guild.id+"`")




  }