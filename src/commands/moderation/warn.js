const permissions = require('../../lib/permissions');
const { MessageEmbed } = require('discord.js');
const gen = require('../../utility/gen');
const infraction = require('../../database/schemas/infraction');

module.exports.run = async (client, interaction) => {
    const infID = await gen('id', 6);
	const user = interaction.options.getUser('user');
	const reason = interaction.options.getString('reason');
	let userEmbed = new MessageEmbed({
		title: `You have been warned in ${interaction.guild.name}`,
		thumbnail: { url: interaction.guild.iconURL() },
		color: '#FAF333',
		description: `**ID:** ${infID}\n**Reason:** ${reason}\n${interaction.options.getBoolean('anonymous') ? '' : `**Moderator:** ${interaction.user.tag} (${interaction.user.id})`}`,
		footer: { text: 'Comet Moderation', iconURL: client.user.avatarURL() },
		timestamp: Date.now()
	});
	/*let logsEmbed = new MessageEmbed({
		author: { name: `Infraction | Warn | ${infID}`, iconURL: user.avatarURL() },
		color: '#FAF333',
		fields: [
			{
				name: 'User:',
				value: `${user.tag} (${user.id})`,
				inline: true
			},
			{
				name: 'Moderator:',
				value: `${interaction.user.tag} (<@${interaction.user.id}>)`,
				inline: true
			},
			{ name: 'Reason:', value: reason, inline: false }
		],
		footer: { text: 'Comet Moderation', iconURL: client.user.avatarURL() },
		timestamp: Date.now()
	});*/
	await infraction.create({ infID: infID, guild: interaction.guild.id, type: 'Warn', user: user.id, details: { reason: reason, moderator: interaction.user.id } });
	await user.send({ embeds: [userEmbed] }).catch(() => {});
	//client.log('moderation', { embeds: [logsEmbed] });
	await interaction.reply({ content: `Successfully warned ${user.tag}.` });
};

module.exports.info = {
    name: 'warn',
	category: 'moderation',
	description: 'Warns a member.',
	default_member_permissions: permissions.moderateMembers,
	dm_permission: false,
	options: [
		{
			type: 6,
			name: 'user',
			description: 'User to perform the action on.',
			required: true
		},
		{
			type: 3,
			name: 'reason',
			description: 'Reason for the warning.',
			required: true
		},
		{
			type: 5,
			name: 'anonymous',
			description: 'Show the user your username?',
			required: false
		}
	]
}