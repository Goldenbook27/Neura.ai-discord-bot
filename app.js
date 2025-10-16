import { Client, GatewayIntentBits, Events } from 'discord.js';
import 'dotenv/config';

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

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'hello') {
    await interaction.reply("Hey there 👋 I'm alive!");
  } else if (commandName === 'ping') {
    const wsLatency = Math.round(client.ws.ping);
    await interaction.reply(`🏓 Pong! Neura.ai's heartbeat is ${wsLatency}ms`);
  }
});

client.login(process.env.DISCORD_TOKEN);
