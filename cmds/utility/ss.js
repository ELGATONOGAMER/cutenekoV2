module.exports = {
  name: "ss",
  alias: ["cap"],
  cooldown: 5,
  category: "utility",
  run: async (cute, message, args) => {

  const puppeteer = require('puppeteer');

const web = args.join(" ")
if (!web) return message.channel.send('Ingresa una web.');

message.channel.send(web)



const browser = await puppeteer.launch({defaultViewport: {width: 1920, height: 1080}, 
args: ['--no-sandbox', '--disable-setuid-sandbox']});

const page = await browser.newPage(); 
await page.goto(web); 
await page.screenshot({path: 'foto.png'}); 
await browser.close(); 
message.channel.send(``, { files: ["foto.png"] }).catch(error =>  



message.channel.send(error));



  }
}