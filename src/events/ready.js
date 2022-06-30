const axios = require('axios');

module.exports = async (client) => {
    const commands = Array();
	client.commands.forEach((data) => {
		commands.push(data.info);
	});
	setTimeout(async () => {
		await axios({
			method: 'PUT',
			url: `https://discord.com/api/v9/applications/${client.user.id}/commands`,
			headers: { Authorization: `Bot ${client.config.token}`, 'Content-Type': 'application/json' },
			data: commands
		}).then(() => console.log('a'));
	}, 1000);
};