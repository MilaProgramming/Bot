const {Client, GatewayIntentBits, MessageEmbed, EmbedBuilder} = require('discord.js');
require('dotenv').config();
const Realm = require("realm");
const {PaginatedEmbed} = require('embed-paginator');
const axios = require('axios');


class recetas extends Realm.Object {
  static schema = {
    name: "recetas",
    primaryKey: "_id",
    properties: {
      _id: { type: "objectId", default: () => new Realm.BSON.ObjectId() },
      nombreReceta: "string",
      descripcionReceta: "string",
      alimentos: { type: "list", objectType: "string" }, // Use 'list' for arrays
      imagenReceta: "string",
      dificultadReceta: "string",
    },
  };
}



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

//leer alimentos
pollito.on('interactionCreate', async interaction => {

    if (!interaction.isChatInputCommand()) return;
    
    //Funcion que extrae a los alimentos de la base de datos
    if(interaction.commandName === 'alimentos'){ 

        const comida = interaction.options.getString('nombre-alimento');
        console.log(comida);

        //Si se especifica un alimento en especifico
        if (comida) {
            console.log("Entro al if");

            let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://us-east-1.aws.data.mongodb-api.com/app/botdiscord-pxxiu/endpoint/getNombrePollito?nombreAlimento=${comida.toLowerCase()}`,
            headers: { 
                'api-key':  process.env.API
            }
            };

            axios.request(config)
            .then((response) => {

                if(!response.data){
                    const embed = new EmbedBuilder()
                    .setTitle('No se ha encontrado el alimento')
                    .setColor('#B41282')
                    .setDescription(`Intenta con algo que pueda existir`);
                    interaction.reply({ embeds: [embed] });

                    return;
                }

                console.log(JSON.stringify(response.data));

                const food  = JSON.parse(JSON.stringify(response.data));
                console.log(food);

                const embed = new EmbedBuilder()
                .setTitle('Alimentos')
                .setColor('#984eb6')
                .setDescription(`Datos de ${comida}`);


                    embed.addFields(
                        { name: 'Nombre', value: food.nombreAlimento},
                        { name: 'Tipo', value: food.dietaAlimento},
                        { name: 'Disponible', value: food.enAlacena ? 'Si' : 'No'},
                        { name: 'Precio', value: food.precioUnidadAlimento === 0 ? 'No especificado' : food.precioUnidadAlimento.toString() + ' dólares'},
                        { name: 'Fecha de expiración', value: food.fechaCaducidad === 'Invalid Date' ? 'No especificada' : food.fechaCaducidad},
                    );


                    interaction.reply({ embeds: [embed] });
            })
            .catch((error) => {
                console.log(error);

                const embed = new EmbedBuilder()
                .setTitle('Ocurrió un error')
                .setColor('#B41282')
                .setDescription(`Lo más probable es que no tengamos alimentos en el sistema. ¿qué tal agregar unos cuantos antes de empezar?`);
                interaction.reply({ embeds: [embed] });
            });

        }else{
        //Si no se especifica un alimento en especifico
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

                            let count = 0;
                            obj.forEach(food => {
                                if(count > 4) return;

                                embed.addFields(
                                    { name: 'Nombre', value: food.nombreAlimento, inline: true },
                                    { name: 'Tipo', value: food.dietaAlimento, inline: true },
                                    { name: 'Disponible', value: food.enAlacena ? 'Si' : 'No', inline: true },
                                );

                                count++;

                                });

                                interaction.reply({ embeds: [embed] });
                        })
                        .catch((error) => {
                            console.log(error);

                            const embed = new EmbedBuilder()
                            .setTitle('Ocurrió un error')
                            .setColor('#B41282')
                            .setDescription(`Lo más probable es que no tengamos alimentos en el sistema. ¿qué tal agregar unos cuantos antes de empezar?`);
                            interaction.reply({ embeds: [embed] });
                        });

            })();
        }

    }


});

//Agregar alimentos
pollito.on('interactionCreate', async interaction => {

    if (!interaction.isChatInputCommand()) return;
    //Funcion que agrega un alimento a la BD 
    if(interaction.commandName === 'agregar-alimento'){

            const comida = interaction.options.getString('nombre');
            console.log(comida);
    
            const tipo = interaction.options.getString('tipo-alimento');
            console.log(tipo);
    
            const disponible = interaction.options.getBoolean('disponible');
            console.log(disponible);
    
            const precio = interaction.options.get('precio') ? interaction.options.get('precio').value : 0;
            console.log(precio);            
    
            const fecha = interaction.options.getString('fecha-caducidad') ? interaction.options.getString('fecha-caducidad') : 'No especificada';
            console.log(fecha);
        
  
            let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://us-east-1.aws.data.mongodb-api.com/app/botdiscord-pxxiu/endpoint/pollitoAlimentosSet?nombreAlimento=${comid.toLowerCasea}&precioUnidadAlimento=${precio}&fechaCaducidad=${fecha}&enAlacena=${disponible}&dietaAlimento=${tipo}`,
            headers: { 
                'api-key': process.env.API
            }
            };
                    
            axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
    
                const embed = new EmbedBuilder()
                .setTitle('Alimento agregado')
                .setColor('#2625BE')
    
    
                    embed.addFields(
                        { name: 'Nombre', value: comida},
                        { name: 'Tipo', value: tipo},
                        { name: 'Disponible', value: disponible ? 'Si' : 'No'},
                        { name: 'Precio', value: precio === 0 ? 'No especificado' : precio.value.toString() + ' dólares'},
                        { name: 'Fecha de expiración', value: fecha},
                    );
    
    
                    interaction.reply({ embeds: [embed] });
    
            })
            .catch((error) => {
                console.log(error);
            });

    
    }
    

});

//Leer recetas
pollito.on('interactionCreate', async interaction => {

    if (!interaction.isChatInputCommand()) return;
    //Funcion que agrega un alimento a la BD 
    if(interaction.commandName === 'recetas'){
        

        const receta = interaction.options.getString('nombre-receta');
        console.log(receta.toLowerCase());

        //Si se especifica una receta en especifico
        if (receta) {
            console.log("Entro al if");

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://us-east-1.aws.data.mongodb-api.com/app/botdiscord-pxxiu/endpoint/getNombreReceta?nombreReceta=${receta.toLowerCase()}`,
                headers: { 
                  'api-key': process.env.API
                }
              };

            axios.request(config)
            .then((response) => {

                if(!response.data){
                    const embed = new EmbedBuilder()
                    .setTitle('No se ha encontrado la receta')
                    .setColor('#B41282')
                    .setDescription(`Intenta con algo que pueda existir`);
                    interaction.reply({ embeds: [embed] });

                    return;
                }

                console.log(JSON.stringify(response.data));

                const food  = JSON.parse(JSON.stringify(response.data));
                console.log(food);

                const embed = new EmbedBuilder()
                .setTitle('Recetas')
                .setColor('#984eb6')
                .setImage(`${food.imagenReceta}`);


                    embed.addFields(
                        { name: 'Nombre', value: food.nombreReceta},
                        { name: 'Dificultad', value: food.dificultadReceta},
                    );


                    interaction.reply({ embeds: [embed] });
            })
            .catch((error) => {
                console.log(error);
            });

        }else{
        //Si no se especifica un alimento en especifico
            // ( async () => {

            //     let config = {
            //             method: 'get',
            //             maxBodyLength: Infinity,
            //             url: 'https://us-east-1.aws.data.mongodb-api.com/app/botdiscord-pxxiu/endpoint/pollitoAlimentos',
            //             headers: { 
            //             'api-key':  process.env.API
            //             }
            //     };
                    
            //     axios.request(config)
            //             .then((response) => {
            //                 console.log(JSON.stringify(response.data));

            //                 const obj  = JSON.parse(JSON.stringify(response.data));
            //                 console.log(obj);

            //                         const embed = new EmbedBuilder()
            //                         .setTitle('Alimentos')
            //                         .setColor('#Ffadfd')
            //                         .setDescription('Comidas desde mi MongoRealm');

            //                 let count = 0;
            //                 obj.forEach(food => {
            //                     if(count > 4) return;

            //                     embed.addFields(
            //                         { name: 'Nombre', value: food.nombreAlimento, inline: true },
            //                         { name: 'Tipo', value: food.dietaAlimento, inline: true },
            //                         { name: 'Disponible', value: food.enAlacena ? 'Si' : 'No', inline: true },
            //                     );

            //                     count++;

            //                     });

            //                     interaction.reply({ embeds: [embed] });
            //             })
            //             .catch((error) => {
            //                 console.log(error);

            //                 const embed = new EmbedBuilder()
            //                 .setTitle('Ocurrió un error')
            //                 .setColor('#B41282')
            //                 .setDescription(`Lo más probable es que no tengamos alimentos en el sistema. ¿qué tal agregar unos cuantos antes de empezar?`);
            //                 interaction.reply({ embeds: [embed] });
            //             });

            // })();
        }

        

    }

});