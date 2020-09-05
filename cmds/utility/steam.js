module.exports = {
  name: "steam",
  alias: ["game", "gameinfo"],
  cooldown: 8,
  category: "utility",
  run: async (cute, message, args) => {

  const cloudlyapi = require("@cloudlyteam/cloudlyapi.js");

  const Discord = require("discord.js")

  const { getSteamGame } = cloudlyapi;

  const juego = args.join(" ")

  if(!juego) return message.channel.send("Gay")

  getSteamGame.name(juego, (err, data) => {
  if(err) return console.log(err);


  const embed = new Discord.MessageEmbed()
   .setAuthor(cute.user.username+" | Steam informacion", cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
  .setDescription(`Juego: ${data.name}`)
  .addField(`Precio:`, `${!data.price ? "Gratis." : `$${data.price.final} ${data.price.currency}`}`)
  .addField(`Plataformas disponibles:`, `- ${data.platforms}`)
  .addField(`Categorias:`, `- ${data.categories.join("\n- ")}`)
  .addField(`Desarrollador:`, `- ${data.developers.join("\n- ")}`)

  .addField(`Descripcion:`, `${null ? "Sin Descripcion." : `${data.short_description}`}`)

  .setImage(`${data.background}`)

  .setColor("RANDOM")
 
  message.channel.send(embed);
  console.log(data)

});









  }
}