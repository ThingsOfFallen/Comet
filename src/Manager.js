const { ShardingManager } = require('discord.js')
const config = require('../config.json');
const { grey, yellow, white } = require('chalk');

const manager = new ShardingManager('./src/App.js', { totalShards: 'auto', token: config.token });

manager.on('shardCreate', async (shard) => {
    console.log(`${grey.bold('[')}${yellow.bold('MANAGER')}${grey.bold(']')} ${white(`Shard ${shard.id} has been created.`)}`);
    shard.on('ready', () => console.log(`${grey.bold('[')}${yellow.bold('MANAGER')}${grey.bold(']')} ${white.bold(`Shard ${shard.id} is now ready.`)}`));
});

manager.spawn();