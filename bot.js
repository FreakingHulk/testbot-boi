const discord = require('discord.js')
const bot = new discord.Client()

bot.on("ready", () => {
  bot.user.setStatus(`online`)
  bot.user.setGame(`help | ${bot.guilds.array().length}`)
  console.log(`${bot.user.username} v1.0 Loaded!`)
})

bot.on('message', message => {
  if (message.author == bot.user) {
    return;
  } else {
    if (message.content == "help") {
      message.channel.send("No commands yet sorry")
    }
    if (message.content == "ping") {
    let embed = new discord.RichEmbed()
    .setTitle(`${bot.user.username} Ping Command`)
    .setDescription(`Bot Ping: ${bot.ping} ms.`)
      message.channel.send({ embed })
    }
  }
})

bot.login(process.env.token)
