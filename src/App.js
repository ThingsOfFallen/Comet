const { Client, Collection, Options, Intents } = require('discord.js');
const config = require('../config.json');
const permissions = require('./lib/permissions');

const client = new Client({
    makeCache: Options.cacheWithLimits({
        ...Options.defaultMakeCacheSettings,
        MessageManager: 180
    }),
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_WEBHOOKS
    ],
    partials: ['CHANNEL', 'GUILD_MEMBER', 'GUILD_SCHEDULED_EVENT', 'MESSAGE', 'REACTION', 'USER'],
    retryLimit: 6
});

client.config = config;
client.permissions = permissions;
client.buttons = new Collection();
client.commands = new Collection();
client.baseCommands = new Collection();

require('./database/connect');
require('./handlers/event')(client);
require('./handlers/command')(client);

client.login(config.token);