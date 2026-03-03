const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages
  ]
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.cache.get('1418604119202992229');
  if (!channel) return;

  const embed = new EmbedBuilder()
    .setColor('#00ffcc')
    .setTitle('🎉 Welcome!')
    .setDescription(`Welcome ${member} to **${member.guild.name}**!\nEnjoy your stay!`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setFooter({ text: `Member #${member.guild.memberCount}` })
    .setTimestamp();

  channel.send({ embeds: [embed] });
});

client.login(process.env.TOKEN);