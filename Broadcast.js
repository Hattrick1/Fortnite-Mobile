const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`| Fortnite Mobile 🇲🇦 |`,'https://www.twitch.tv/icmail_dx');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
  client.login("NDU2MjA5Nzk1Nzk2NTY2MDE2.DgHP7w.lna7H0H4rWUPRYNUkWMdJjkvpAo");
