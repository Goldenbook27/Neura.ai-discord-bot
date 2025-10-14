const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,             
    GatewayIntentBits.GuildMessages,      
    GatewayIntentBits.MessageContent      
  ],
});

client.once('ready', () => {
  console.log(`✅ Bot is online as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return; 

  if (message.content === '!hello') {
    message.reply("Hey there 👋 I'm alive!");
  }
  if (message.content === '!ping') {
    message.reply(`🏓 Pong! Neura.Ai's heartbeat is ${Math.round(client.ws.ping)}ms`);  }
});

client.login(process.env.DISCORD_TOKEN);
