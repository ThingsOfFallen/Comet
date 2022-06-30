const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, interaction) => {
    const req = await axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist');
	const category = req.data.category.toString().replace('Misc', 'Random');
	switch (req.data.type) {
		case 'single':
			let sEmbed = new MessageEmbed({
				title: `${category} Joke`,
				color: client.config.themeColor,
				description: req.data.joke,
				footer: { text: 'Comet Fun', iconURL: client.user.avatarURL() },
				timestamp: Date.now()
			});
			await interaction.reply({ embeds: [sEmbed] });
			break;

		case 'twopart':
			let tEmbed = new MessageEmbed({
				title: `${category} Joke`,
				color: client.config.themeColor,
				description: `${req.data.setup}\n\n${req.data.delivery}`,
				footer: { text: 'Comet Fun', iconURL: client.user.avatarURL() },
				timestamp: Date.now()
			});
			await interaction.reply({ embeds: [tEmbed] });
			break;
	}
};

module.exports.info = {
    name: 'joke',
	category: 'fun',
	description: 'Get a random internet joke',
	dm_permission: true
};