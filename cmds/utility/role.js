module.exports = {
  name: "role",
  alias: [],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
    
     const boolean = {
        "false":"No",
        "true":"Si"
      }
    
      const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
      
      if(!role) return message.channel.send("<a:cloading:713914246601113693> | ¡Especifica un rol!")
      
      const rol = new Discord.MessageEmbed()
      .setAuthor(cute.user.username, cute.user.displayAvatarURL({ format: "png", dynamic: true, size: 2048 }))
      .setDescription("Informacion sobre el rol mencionado.")
      .addField("Nombre:", `- ${role.name}`)
      .addField("ID:", `- ${role.id}`)
      .addField("Miembros con el Rol:", `- ${role.members.size}`)
      .addField("Posición:", `- ${role.rawPosition}`)
      .addField("HexColor:", `- ${role.hexColor}`)
      .addField("¿Editable?:", `- ${boolean[role.editable]}`)
      .addField("¿Mencionable?:", `- ${boolean[role.mentionable]}`)
      .addField("¿Separado?:", `- ${boolean[role.hoist]}`)
      .addField("¿Gestionado por el sistema?:", `- ${boolean[role.managed]}`)
      .setColor("RANDOM")
      
      
      message.channel.send(rol)
      
    
    }
}