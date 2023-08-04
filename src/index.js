const {Client, GatewayIntentBits} = require('discord.js');
require('dotenv').config();
const axios = require('axios');

const prefix = '!';

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

pollito.on('interactionCreate', async interaction => {

    if (!interaction.isChatInputCommand()) return;


    if(interaction.commandName === 'alimentos'){ 

        let getAlimentos = async () => {

        let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://us-east-1.aws.data.mongodb-api.com/app/botdiscord-pxxiu/endpoint/pollitoAlimentos',
                headers: { 
                  'api-key': 'WS13QVMfhcM5TqLvkdIev4IfD50p8aFMIvOayeMiQQg0xONpuNkJWqnmyO4LRPrn'
                }
        };
            
        let response =     axios.request(config)
                .then((response) => {
                console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                console.log(error);
                });

        let result = response.data;

        return result;

        }

        let valor = await getAlimentos();
        console.log(valor);


    }
});