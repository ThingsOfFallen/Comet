const { Client, CommandInteraction } = require('discord.js');

/**
 * @param {Client} client 
 * @param {CommandInteraction} interaction 
 */
module.exports = (client, interaction) => {
    const int = interaction.commandName.toString().toLowerCase();
	const cmd = client.commands.get(int);
	if (!cmd) return;
	cmd.run(client, interaction);
};