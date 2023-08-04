const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');
require('dotenv').config();
  

const commands = [
    {
        name: 'alimentos',
        description: 'Muestra los alimentos en la BD',
        // options: [
        //     {
        //         name: 'nombre-alimento',
        //         description: 'Nombre del alimento',
        //         type: ApplicationCommandOptionType.String,
        //         required: true,
        //     }
        // ]
    },
]

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {

    try{
        
      
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




