const permissions = require("../../lib/permissions");
const ms = require("ms");

module.exports.run = async (client, interaction) => {
    const messages = await interaction.channel.messages.fetch({ limit: interaction.options.getNumber('amount') });
	const useable = messages.filter((m) => Date.now() - m.createdTimestamp < ms('14d') && !m.pinned);
	await interaction.channel.bulkDelete(useable);
	await interaction.reply({ content: 'Successfully deleted messages.' });
	setTimeout(async () => {
		await interaction.deleteReply();
	}, 3000);
};

module.exports.info = {
    name: 'clear',
	category: 'moderation',
	description: 'Purges messages in current channel.',
	default_member_permissions: permissions.kickMembers,
	dm_permission: false,
	options: [
		{
			type: 10,
			name: 'amount',
			description: 'Amount of messages to purge',
			required: true,
			min_value: 1,
			max_value: 100
		}
	]
}