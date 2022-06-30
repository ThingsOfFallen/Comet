const axios = require('axios');

module.exports.run = async (client, interaction) => {
    const req = await axios.get('https://api.adviceslip.com/advice');
	await interaction.reply({ content: req.data.slip.advice });
};

module.exports.info = {
    name: 'advice',
	category: 'fun',
	description: 'Get a random peice of advice',
	dm_permission: true
};