module.exports = {
  name: "pacman",
  alias: ["pac-man", ":v"],
  cooldown: 60,
  category: "fun",
  run: async (cute, message, args) => {
    
  const game = require("pacman-djs");
 
    
let mapa = [
  "▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣",
  "▣▩◇◇◇▩▩▩ᗣ▩▩▩◇◇◇▩▣",
  "▣▩▣▣◇▣▩▩▣▩▩▣◇▣▣▩▣",
  "▣▩▣▩▩▩▩▣▣▣▩▩▩▩▣▩▣",
  "▣▩▩▩▣▣▩▩▣▩▩▣▣▩▩▩▣",
  "▣◇▩▩▩▩▩▩ᗣ▩▩▩▩▩▩◇▣",
  "▣◇▩▩▩▩▩▩▩▩▩▩▩▩▩◇▣",
  "▣▩▩▩▣▣▩▩▣▩▩▣▣▩▩▩▣",
  "▣▩▣▩▩▩▩▣▣▣▩▩▩▩▣▩▣",
  "▣▩▣▣◇▣▩▩▣▩▩▣◇▣▣▩▣",
  "▣▩◇◇◇▩▩▩ᗧ▩▩▩◇◇◇▩▣",
  "▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣▣"
]  
  

let start = new game.PacGame(mapa, 3, {
  win_text: "¡¡"+ message.author.username + " ganaste!!\n\nVuelve en 1 minuto si quieres jugar de nuevo.",
  to_lose_text: "¡¡"+message.author.username + " perdiste!!\n\nVuelve en 1 minuto si quieres jugar de nuevo.",
  time_out_text: "¡Se acabo el tiempo!",
  coin_points: 15,
  coin_text: "💰",
  time_text: "⏲"
})
 
start.start_game(message)
 
start.on("end", (type, monedas, tiempo) => {
  if(type == "ghost") {
    //haz algo
  }
  else if(type == "player") {
    //haz algo
  }
  else if(type == "time") {
    //haz algo
  }
  else if(type == "error") {
    //haz algo
  }
})

    
    
    
  }
}