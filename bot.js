const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Script By : 3rb|pros`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : 3rb|pros ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`3rb|pros | ${client.guilds.size} ${client.users.size} servers/user`,"http://twitch.tv/YouTube")
client.user.setStatus("dnd")
});

client.on('message', message => {
    if (message.content === '+credit') {
        let helpEmbed = new Discord.RichEmbed()
#credit
      message.channel.send(helpEmbed);
    }
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
