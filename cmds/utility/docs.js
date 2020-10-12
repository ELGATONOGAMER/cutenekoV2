module.exports = {
  name: "docs",
  alias: ["documentation"],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {

   const Discord = require("discord.js") 

   const fetch = require('node-fetch');

   let con = ""
   let cont = ""
 
if(!args.join(" ")) return message.channel.send("<a:cloading:713914246601113693> | Introduce lo que quieres buscar.\n<a:cloading:713914246601113693> | Ejemplo: `g?docs master message || g?docs fetch -> (Default: stable)`")

  if(["stable", "master", "commando", "rpc", "akairo", "akairo-master", "collection"].includes(args[0])) {
      con = args[0];
      cont = args[1];
    } else { 
      con = "stable"
      cont = args.join(" ");
    }

    fetch(`https://djsdocs.sorta.moe/v2/embed?src=${encodeURIComponent(con)}&q=${encodeURIComponent(cont)}`)
      .then(r => r.json())
      .then(res => {
      message.channel.send(new Discord.MessageEmbed(res));
    }).catch(err => message.channel.send("<a:cloading:713914246601113693> | Error: " + err));


  }
}