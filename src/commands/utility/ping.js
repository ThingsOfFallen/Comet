const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, interaction) => {
    const appPing = Date.now() - interaction.createdTimestamp;
	let embed = new MessageEmbed({
		title: '🏓 System Ping',
		color: client.config.themeColor,
		description: `⏳️ App: ${appPing}ms\n💓 WS: ${client.ws.ping}ms\n⚙ Gen: ${(appPing + client.ws.ping) / 2}ms`,
		footer: { text: 'Comet Utility', iconURL: client.user.avatarURL() },
		timestamp: Date.now()
	});
	interaction.reply({ embeds: [embed] });
};

module.exports.info = {
    name: 'ping',
    description: 'Show the bots ping.',
    dm_permission: true
};