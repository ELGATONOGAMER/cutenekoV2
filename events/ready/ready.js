module.exports =
  async (cute) => {
    
  console.log(`Con ${cute.users.cache.size.toLocaleString()} usuarios\nViendo ${cute.commands.size+5} comandos.`)
  
   setInterval(() => {
    
  let activities = [
    `g? | ${cute.guilds.cache.size} servidores`,
    `g? | ${cute.users.cache.size.toLocaleString()} usuarios`,
    `g? | Otakus`,
    `g? | @${cute.user.tag} help`,
    `g? | ${cute.channels.cache.size.toLocaleString()} canales`
    ]
  
  let activity = activities[Math.floor(4 * Math.random())]
    
  cute.user.setActivity(`${activity}`, {
    type: "WATCHING",
    url: "https://twitch.tv/el_gato_no_gamer_"
  })
    
  }, 30000)
  
  }