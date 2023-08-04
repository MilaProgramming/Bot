const {Client, GatewayIntentBits, MessageEmbed, EmbedBuilder} = require('discord.js');
require('dotenv').config();
const axios = require('axios');
const WOKCommands = require('wokcommands');

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

        ( async () => {

            let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'https://us-east-1.aws.data.mongodb-api.com/app/botdiscord-pxxiu/endpoint/pollitoAlimentos',
                    headers: { 
                    'api-key':  process.env.API
                    }
            };
                
            axios.request(config)
                    .then((response) => {
                        console.log(JSON.stringify(response.data));

                        const obj  = JSON.parse(JSON.stringify(response.data));
                        console.log(obj);

                                const embed = new EmbedBuilder()
                                .setTitle('Alimentos')
                                .setColor('#Ffadfd')
                                .setDescription('Comidas desde mi MongoRealm');

                        obj.forEach(food => {
                            embed.addFields(
                                { name: 'Nombre', value: food.nombreAlimento, inline: true },
                                { name: 'Tipo', value: food.dietaAlimento, inline: true },
                                { name: '** **', value:'** **'}
                            );
                            });

                            interaction.reply({ embeds: [embed] });
                    })
                    .catch((error) => {
                    console.log(error);
                    });

        })();


        // const fields = valor.map(food => {
        //     return {
        //         name: food.nombreAlimento,
        //         value: `Price: ${food.precioUnidadAlimento}\nExpires: ${food.fechaCaducidad}\nDiet: ${food.dietaAlimento}`,
        //     };
        // });

        // const embed = new EmbedBuilder()
        // .setTitle('Alimentos')
        // .setColor('#00FF00')
        // .addFields({
        //     fields
        // }) 


        // interaction.reply({ embeds: [embed] });
  


    }
});