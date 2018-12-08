const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get(517968522513743872)
client.on('message', message => {
    if (message.content === '!spam') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 90000; x++) {
            message.channel.send(`credit credit credit credit credit credit credit credit credit credit credit credit credit credit
credit credit credit credit credit credit credit credit credit credit credit credit credit credit
credit credit credit credit credit credit credit credit credit credit credit credit credit credit
credit credit credit credit credit credit credit credit credit credit credit credit credit credit
credit credit credit credit credit credit credit credit credit credit credit credit credit credit
credit credit credit credit credit credit credit credit credit credit credit credit credit credit ${x}`)
              .then(m => {
                count++;
              })
              
            }
          }
    });
 
 
client.login(process.env.TOKEN);
