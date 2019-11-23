const Discord = require('discord.js');

const client = new Discord.Client();

client.on("ready", () => {
  console.log("il est la le poto");
});

client.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Eхнιвιтιoɴ detente et plaisir :heart: https://discord.gg/tbBkjPZ');
  }).catch(console.error);
})


client.login(process.env.TOKEN_BOT);