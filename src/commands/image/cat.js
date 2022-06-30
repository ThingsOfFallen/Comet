const axios = require('axios');
const { MessageAttachment } = require('discord.js');

module.exports.run = async (client, interaction) => {
    const image = await axios.get('https://api.thecatapi.com/v1/images/search', {
		headers: {
			'X-API-KEY': client.config.catApiKey
		}
	});
	const attachment = new MessageAttachment(image.data[0].url, 'cat.jpg');
	await interaction.reply({ files: [attachment] });
};

module.exports.info = {
    name: 'cat',
	category: 'images',
	description: 'Posts a random cat picture',
	dm_permission: true
}