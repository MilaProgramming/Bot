const {Client, IntentsBitField} = require('discord.js');
//Instents es un set de permisos para dar acceso a sets de eventos

/* El código está creando una nueva instancia de la clase `Cliente` de la biblioteca `discord.js`. La
clase `Client` representa un cliente bot de Discord. Guild otorga permisos */
const pollito = new Client({
        intents: [
            IntentsBitField.Flags.Guilds,
            IntentsBitField.Flags.GuildsMembers,
            IntentsBitField.Flags.GuildMessages,
            IntentsBitField.Flags.GuildsMessageReactions,
            IntentsBitField.Flags.MessageContent,
        ]
});

client.login(MTEzNjM0MzA5OTI1ODQ1ODI3Mw.GLKQ-x.SomPwbrwEwXrDVcRf-iKjihXMEUqAdO2HqhbJ4);

