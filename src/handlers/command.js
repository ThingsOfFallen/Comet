const { Client } = require('discord.js');
const { readdirSync } = require('node:fs');

/**
 * @param {Client} client 
 */
module.exports = async (client) => {
    const path = `${__dirname}/../commands`;
    await readdirSync(path).forEach(async (dir) => {
        const commands = await readdirSync(`${path}/${dir}`).filter((file) => file.endsWith('.js'));
        for (const cmd of commands) {
            const command = require(`${path}/${dir}/${cmd}`);
            await client.commands.set(command.info.name, command);
        };
    });
};