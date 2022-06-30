const axios = require('axios');
const { MessageAttachment } = require('discord.js');

module.exports.run = async (client, interaction) => {
    const image = await axios.get('https://api.thedogapi.com/v1/images/search', {
		headers: {
			'X-API-KEY': client.config.dogApiKey
		}
	});
	const attachment = new MessageAttachment(image.data[0].url, 'dog.jpg');
	await interaction.reply({ files: [attachment] });
};

module.exports.info = {
    name: 'dog',
	category: 'images',
	description: 'Posts a random dog picture',
	dm_permission: true
};