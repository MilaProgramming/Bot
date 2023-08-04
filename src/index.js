const {Client, GatewayIntentBits} = require('discord.js');
require('dotenv').config();
//Instents es un set de permisos para dar acceso a sets de eventos

/* El código está creando una nueva instancia de la clase `Cliente` de la biblioteca `discord.js`. La
clase `Client` representa un cliente bot de Discord. Guild otorga permisos */
const pollito = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        ],
});

pollito.on('ready', () => {
    console.log('Pio pio');
    pollito.user.setActivity('Pio pio');
});

pollito.login(
    process.env.TOKEN
);

pollito.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

pollito.on('interactionCreate', (interaction) => {

    if (!interaction.isChatInputCommand()) return;

    const nombre = interaction.options.get('nombre-alimento')?.value;
  
});