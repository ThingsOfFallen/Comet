const axios = require('axios');

module.exports.run = async (client, interaction) => {
    const req = await axios.get('https://zenquotes.io/api/quotes/');
	await interaction.reply({ content: `\"${req.data[0].q}\" - ${req.data[0].a}` });
};

module.exports.info = {
    name: 'quote',
	category: 'fun',
	description: 'Get a random quote',
	dm_permission: true
}