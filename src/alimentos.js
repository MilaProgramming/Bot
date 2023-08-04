const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');
const Realm = require('realm');
require('dotenv').config();

const commands = [
    {
        name: 'alimentos',
        description: 'Muestra los alimentos en la BD',
        options: [
            {
                name: 'nombre-alimento',
                description: 'Nombre del alimento',
                type: ApplicationCommandOptionType.STRING,
            }
        ]
    },
]

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () =>{

    try{

        const app = new Realm.App({ id: "botdiscord-pxxiu" });
        const credentials = Realm.Credentials.anonymous();
        try {
        const user = await app.logIn(credentials);
        } catch(err) {
        console.error("Failed to log in", err);
        }

        console.log("Inicio el proceso");
        
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT, process.env.GUILD),
            {body: commands},
        );

        console.log("Termino el proceso");

    }catch (error){
        console.log(`Hubo un error: ${error}`);
    }

})();




