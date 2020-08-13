module.exports = {
  name: "reload",
  alias: [],
  cooldown: 5,
  category: "development",
  run: async (cute, message, args) => {
    
    const Discord = require("discord.js")
    
    const { crearDB } = require("megadb")
    const dev_db = new crearDB("devs");
    
    
    if(!dev_db.tiene(`${message.author.id}`)) return message.channel.send("<a:cloading:713914246601113693> | Solo mi querido amo puede usar este comando.")      
    
    
    
 if(!args.length){
      
      return message.channel.send(`<a:cloading:713914246601113693> | ¿Qué comando reiniciarás, ${message.member}?`)
      
    }
    
    const commandName = args[0].toLowerCase();
		const command = cute.commands.get(commandName) || cute.commands.find(cmd => cmd.alias && cmd.alias.includes(commandName));
 
    if (commandName == "all"){
      
    cute.commands.map(c => `${cute.commands.delete(c.name)}`)
      
      message.channel.send(`<a:cloading:713914246601113693> | Reiniciando comandos...`).then(m => {
        
        setTimeout(function(){
          
          m.edit(`<a:cloading:713914246601113693> | Comandos reiniciados exitosamente.`).then(msg => {
            
            msg.edit(`${msg.content}\n<a:cloading:713914246601113693> | Reiniciando procesos...`)
            
            setTimeout(function(){
          
              msg.edit(`<a:cloading:713914246601113693> | Comandos reiniciados exitosamente.\n<a:cloading:713914246601113693> | Procesos reinciados exitosamente.`).then(me => {
                
            setTimeout(function(){
              
              me.edit(`${me.content}\n<a:cloading:713914246601113693> | Reinicio completado exitosamente.`)
              
            }, 1000)
                
              })
           }, 5000)
        
          })
            
          
        }, 5000)
        
        setTimeout(function(){
        
        process.exit() && cute.destroy()
        
        }, 14000)
        
      })
      
    } else if(!command) {
      
			return message.channel.send(`<a:cloading:713914246601113693> | El comando **\`${commandName.toUpperCase()}\`** no existe, ${message.member}`);
      
		} else {

		delete require.cache[require.resolve(`../${command.category}/${command.name}.js`)];

		try {
      
			const newCommand = require(`../${command.category}/${command.name}.js`);
      
			cute.commands.set(newCommand.name, newCommand);
      
			message.channel.send(`<a:cloading:713914246601113693> | El comando **\`${command.name.toUpperCase()}\`** de la categoría **\`${command.category.toUpperCase()}\`** fue reiniciado, ${message.member}`);
      
      console.log(`El comando ${command.name.toUpperCase()} de la categoría ${command.category.toUpperCase()} fue reiniciado amo.`)
      
		} catch (error) {
      
			console.log(error);
      
			message.channel.send(`<a:cloading:713914246601113693> | Ha ocurrido un error reiniciando el comando **\`${command.name.toUpperCase()}\`** de la categoría **\`${command.category.toUpperCase()}\`**, ${message.member}`);
      
		}
      
    }   
    
    
    
    
    
  }
}