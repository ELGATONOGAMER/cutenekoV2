module.exports = {
  name: "createembed",
  alias: ["embedcreate", "embed",],
  cooldown: 5,
  category: "config",
  run: async (cute, message, args) => {

const Discord = require("discord.js")

const filtro = msg => msg.author.id === message.author.id; 

/* Primer wea */

const embedVacio = new Discord.MessageEmbed() 


const mensaje_array = await message.channel.send('<a:cloading:713914246601113693> | Ingresa una descripcion.\n<a:cloading:713914246601113693> | `Escribe: "No", si no lo deseas.`', embedVacio)

const array1 = await message.channel.awaitMessages(filtro, {max: 1, time: 60000}) 

if(array1.size < 1) return message.channel.send("<a:cloading:713914246601113693> | Tardaste demasiado en contestar.") 

let resultado_array1;

if(array1.first().content.toLowerCase() === "no") {

resultado_array1 = " "

} else {  

resultado_array1 = await array1.first().content;  

}

 

mensaje_array.delete()

const embedAuthor = new Discord.MessageEmbed() 
.setDescription(`${resultado_array1}`)

const aum_array = await message.channel.send('<a:cloading:713914246601113693> | Ingresa Author del embed.\n<a:cloading:713914246601113693> | `Escribe: "No", si no lo deseas.`', embedAuthor)

const au1 = await message.channel.awaitMessages(filtro, {max: 1, time: 60000}) 

if(au1.size < 1) return message.channel.send("<a:cloading:713914246601113693> | Tardaste demasiado en contestar.") 

let resultado_au1;

if(au1.first().content.toLowerCase() === "no") {

resultado_au1 = " "

} else {  

resultado_au1 = await au1.first().content;  

}

 

aum_array.delete()


const embedAuthorIM = new Discord.MessageEmbed() 
.setDescription(`${resultado_array1}`)
.setAuthor(`${resultado_au1}`)

const aumIM_array = await message.channel.send('<a:cloading:713914246601113693> | Ingresa el link de la imagen del Author \n<a:cloading:713914246601113693> | `Escribe: "No", si no lo deseas.`', embedAuthorIM)

const au1IM = await message.channel.awaitMessages(filtro, {max: 1, time: 60000}) 

if(au1IM.size < 1) return message.channel.send("<a:cloading:713914246601113693> | Tardaste demasiado en contestar.") 


let resultado_au1IM;

if(au1IM.first().content.toLowerCase() === "no") {

resultado_au1IM = " "

} else {  

if(resultado_au1 === " ") return message.channel.send('<a:cloading:713914246601113693> | ¡Error en la seleccion del link del Author!\n<a:cloading:713914246601113693> | `Elegiste no tener un Author, debiste poner: "no"`\n<a:cloading:713914246601113693> | Vuelve a colocar el comando.')

 if(!au1IM.first().content.startsWith('https://')) return message.channel.send('<a:cloading:713914246601113693> | ¡Error en la seleccion del link del Author!\n<a:cloading:713914246601113693> | `No creo que lo que pusiste, sea un link de mensaje.`\n<a:cloading:713914246601113693> | Vuelve a colocar el comando.')

resultado_au1IM = await au1IM.first().content;  

}

 

aumIM_array.delete()


const embedFoo = new Discord.MessageEmbed() 
.setDescription(`${resultado_array1}`)
.setAuthor(`${resultado_au1}`, resultado_au1IM)

const foo_array = await message.channel.send('<a:cloading:713914246601113693> | Ingresa un Footer.\n<a:cloading:713914246601113693> | `Escribe: "No", si no lo deseas.`', embedFoo)

const foo1 = await message.channel.awaitMessages(filtro, {max: 1, time: 60000}) 

if(foo1.size < 1) return message.channel.send("<a:cloading:713914246601113693> | Tardaste demasiado en contestar.") 

let resultado_foo1;

if(foo1.first().content.toLowerCase() === "no") {

resultado_foo1 = " "

} else {  

resultado_foo1 = await foo1.first().content;  

}

foo_array.delete()


const embedDesc = new Discord.MessageEmbed() 
.setDescription(`${resultado_array1}`)
.setAuthor(`${resultado_au1}`)
.setFooter(`${resultado_foo1}`)

const color_array = await message.channel.send('<a:cloading:713914246601113693> | Ingresa un color en: `Ingles(Mayusculas) o hexcolor.`\n<a:cloading:713914246601113693> | `Escribe: "No", si no lo deseas.`', embedDesc)

const color1 = await message.channel.awaitMessages(filtro, {max: 1, time: 60000}) 

if(color1.size < 1) return message.channel.send("<a:cloading:713914246601113693> | Tardaste demasiado en contestar.") 

let resultado_color1;

if(color1.first().content.toLowerCase() === "no") {

resultado_color1 = " "

} else {  

resultado_color1 = await color1.first().content;  

}

color_array.delete()



/* Segunda wea */

const embedDescolor = new Discord.MessageEmbed() 
.setDescription(`${resultado_array1}`)
.setAuthor(`${resultado_au1}`)
.setFooter(`${resultado_foo1}`)
.setColor(resultado_color1)

const mensaje_array2 = await message.channel.send('<a:cloading:713914246601113693> | ¿Deseas un Field?\n<a:cloading:713914246601113693> | `Escribe: "yes/no", para confirmar.`', embedDescolor) 

const array2 = await message.channel.awaitMessages(filtro, {max: 1, time: 60000})  

if(array2.size < 1) return message.channel.send("<a:cloading:713914246601113693> | Tardaste demasiado en contestar.")  

 if(!["yes", "no"].includes(array2.first().content.toLowerCase())) return message.channel.send('<a:cloading:713914246601113693> | ¡Error en la seleccion del Field!\n<a:cloading:713914246601113693> | `Debes colocar: "yes/no" dependiendo si lo querias o no.`\n<a:cloading:713914246601113693> | Vuelve a colocar el comando.');

if(array2.first().content.toLowerCase() === "yes") {

mensaje_array2.delete()

const mensaje_array3 = await message.channel.send("<a:cloading:713914246601113693> | Ingresa el titulo del Field.\n<a:cloading:713914246601113693> | `Campo obligatorio.`", embedDescolor) 

const array3 = await message.channel.awaitMessages(filtro, {max: 1, time: 60000})  

if(array3.size < 1) return message.channel.send("<a:cloading:713914246601113693> | Tardaste demasiado en contestar.")  

const resultado_array3 = await array3.first().content; 
 
mensaje_array3.delete()

const embedFiDes = new Discord.MessageEmbed() 
.setDescription(`${resultado_array1}`)
.setAuthor(`${resultado_au1}`)
.setFooter(`${resultado_foo1}`)
.addField(`${resultado_array3}`, ". . .")
.setColor(resultado_color1)

const mensaje_array4 = await message.channel.send("<a:cloading:713914246601113693> | Ingresa la descripcion del Field.\n<a:cloading:713914246601113693> | `Campo obligatorio.`", embedFiDes) 

const array4 = await message.channel.awaitMessages(filtro, {max: 1, time: 60000})  

if(array4.size < 1) return message.channel.send("<a:cloading:713914246601113693> | Tardaste demasiado en contestar.")  

const resultado_array4 = await array4.first().content; 

mensaje_array4.delete()

const embedFiDescription = new Discord.MessageEmbed() 
.setDescription(`${resultado_array1}`)
.setAuthor(`${resultado_au1}`)
.setFooter(`${resultado_foo1}`)
.addField(`${resultado_array3}`, `${resultado_array4}`)
.setColor(resultado_color1)

message.channel.send(embedFiDescription)

} else if(array2.first().content.toLowerCase() === "no") {  

mensaje_array2.delete()

 const embedFinal = new Discord.MessageEmbed() 
.setDescription(`${resultado_array1}`)
.setAuthor(`${resultado_au1}`)
.setFooter(`${resultado_foo1}`)
.setColor(resultado_color1)

message.channel.send(embedFinal)

} 














  }
}