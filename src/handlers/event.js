const { Client } = require('discord.js');

/**
 * @param {Client} client
 */
module.exports = (client) => {
    client.once('ready', () => require('../events/ready')(client));
    client.on('interactionCreate', async (interaction) => require('../events/interactionCreate')(client, interaction));
};