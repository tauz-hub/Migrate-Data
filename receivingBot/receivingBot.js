const Discord = require('discord.js')
const fs = require('fs');
const accounts = require('../config/accounts.json')

const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USERS', 'GUILD_MEMBER'],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const dic = {
  "janeiro": '01',
  "fevereiro": '02',
  "março": '03',
  "abril": '04',
  "maio": '05',
  "junho": '06',
  "julho": '07',
  "agosto": '08',
  "setembro": '09',
  "outubro": '10',
  "novembro": '11',
  "dezembro": '12'
}

client.on('message', async msg => {
  if (msg.author.id !== '297153970613387264' || msg.channel.id !== '909485828433117225' || !msg) return
  if (!msg.embeds[0]) return
  if (!msg.embeds[0].fields) return
  if (msg.author.id === '297153970613387264') {

    const regexDate = /\*\*Data:\*\* (.*)/
    const regexAutor = /\*\*Punido por:\*\* (.*)/
    const regexMotivo = /\*\*Motivo:\*\* (.*)/
    const regexUser = /https:\/\/cdn.discordapp.com\/avatars\/(.*)\//

    const embed = msg.embeds[0].fields

    const idUser = msg.embeds[0].author.iconURL.match(regexUser)[1]
    const userObj = { id: idUser, description: [] }
    embed.forEach((warn) => {
      const motivo = warn.value

      let data = motivo.match(regexDate)[1].replace(' de ', ' ').replace(' às ', ' ').split(' ')
      const date = new Date(`${data[2]}/${dic[data[1].replace(',', '')]}/${data[0]} ${data[3]} GMT-3`).toISOString()
      const autor = motivo.match(regexAutor)[1]
      const reason = motivo.match(regexMotivo)[1]


      userObj.description.push({
        date: date,
        autor: autor.replace(/(<@)|(>)|(<@!)/g, ''),
        reason: reason
      })
    })
    msg.channel.send(`${JSON.stringify(userObj)}`)

    fs.readFile("./database/newData.json", function (err, content) {
      if (err) throw err;
      let parseJson = JSON.parse(content);
      parseJson.push(userObj)
      fs.writeFile("./database/newData.json", JSON.stringify(parseJson), function (err) {
        if (err) throw err;
      })
    })
  }
});

client.login(accounts[10].token)
