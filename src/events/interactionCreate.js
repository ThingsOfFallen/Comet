const { CommandInteraction, Client } = require("discord.js");

/**
 * @param {Client} client 
 * @param {CommandInteraction} interaction 
 */
module.exports = (client, interaction) => {
    if (interaction.isCommand()) return require('./interactions/commandInteraction')(client, interaction);
};