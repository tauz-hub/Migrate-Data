const Discord = require('discord.js');
const client = new Discord.Client();
const json = require('../database/users.json')
const accounts = require('../config/accounts.json')
const path = require('path')
const numberSelf = parseInt(path.basename(__dirname).replace('self', ''));
const userOwner = '454059471765766156'
function delay(n) {
  return new Promise(function (resolve) {
    setTimeout(resolve, n * 1050);
  });
}
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
  if (msg.author.id !== userOwner) return
  if (msg.content === '>iniciar') {
    const tam = Math.floor(json.length / 10)

    let i = numberSelf;
    await delay(numberSelf)
    do {
      msg.channel.send(`+warnlist ${json[i].id}`);

      await delay(3);
      i += 10;
    } while (i < tam)

  }
});

client.login(accounts[numberSelf].token);
