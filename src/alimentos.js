const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');
require('dotenv').config();
  

const commands = [
    {
        name: 'alimentos',
        description: 'Muestra los alimentos en la BD',
        options: [
            {
                name: 'nombre-alimento',
                description: 'Nombre del alimento',
                type: ApplicationCommandOptionType.String,
            }
        ]
    },
    {
        name: 'agregar-alimento',
        description: 'Agrega un alimento a la BD',
        options: [
            {
                name: 'nombre',
                description: 'Nombre del alimento',
                type: ApplicationCommandOptionType.String,
                required: true,
            
            },
            {
                name: 'tipo-alimento',
                description: 'Tipo de alimento',
                type: ApplicationCommandOptionType.String,
                required: true,
                choices: [
                    {   
                        name: 'Frutas y verduras',
                        value: 'Frutas y verduras'
                    },
                    {
                        name: 'Proteina',
                        value: 'Proteina'
                    },
                    {
                        name: 'Carbohidrato',
                        value: 'Carbohidrato'
                    },
                    {
                        name: 'Complementos',
                        value: 'Complementos'
                    },
                    {
                        name: 'Golosinas',
                        value: 'Golosinas'
                    }
                ]
            },
            {
                name: 'disponible',
                description: '¿Tienes este alimento en tu alacena?',
                type: ApplicationCommandOptionType.Boolean,
                required: true,
                choices: [
                    {   
                        name: 'Si',
                        value: true,
                    },
                    {
                        name: 'No',
                        value: false,
                    }
                ]
            },
            {
                name: 'precio',
                description: 'Precio del alimento',
                type: ApplicationCommandOptionType.Number,
                required: false,
            },
            {
                name: 'fecha-caducidad',
                description: 'Fecha de caducidad del alimento. Formato: DD-MM-YYYY',
                type: ApplicationCommandOptionType.String,
                required: false,
            }
        ]
    },
    {
        name: 'recetas',
        description: 'Muestra las recetas en la BD',
        options: [
            {
                name: 'nombre-receta',
                description: 'Nombre de la receta',
                type: ApplicationCommandOptionType.String,
            }
        ]
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




