# Bot de Discord Pollito

|             |              | 
| --------------------- | --------------------- | 
| ![Bot Pollito](https://i.imgflip.com/1um67c.jpg?a469488)          |  Domina el arte de la preparación con comodidad mientras :baby_chick:**Pollito**:baby_chick: te mantiene al tanto de las fechas de caducidad, te brinda información sobre los ingredientes y te acompaña en tu búsqueda de la perfección gastronómica. Además, si te encuentras jugando con tus amigos, no tendrás que salir de discord para usarlo. |


:rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball::rice_cracker::rice_ball:


## Características

- Accede a datos de alimentos y recetas desde una base de datos MongoDB REALM a tiempo real y de total disponibilidad a cualquier hora del día.
- Comandos interactivos con barras para una fácil obtención de datos, con ayuda de la interfaz familiar de discord.
- Explora, agrega y gestiona información de alimentos y recetas de manera conveniente.

## Instalación y Configuración

### Para su desarrollo

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tunombredeusuario/bot-discord-pollito.git
   cd bot-discord-pollito
2. Instala las dependencias:
   ```sh
   npm install
3. Ejecuta el bot:
   ```sh
   node .
### Para su uso

#### Invita a :baby_chick:**Pollito**:baby_chick: a tu servidor de confianza :rice_ball:

## Comandos Disponibles

### /agregar-alimento
Agrega un alimento a la base de datos. Te pedirá el nombre, el tipo de alimento (frutas y verduras, proteínas, carbohidratos, complementos o golosinas) y si está disponible. También puedes proporcionar el precio y la fecha de caducidad de manera opcional.

### /alimentos
Muestra hasta los 5 últimos alimentos agregados a la base de datos. Puedes utilizar un campo opcional para verificar si el alimento que ingresaste existe en la base de datos.

### /recetas
Muestra hasta las 5 últimas recetas agregadas. Si proporcionas el nombre de una receta como argumento, podrás verificar su existencia en la base de datos.

### /paso-receta
Ingresa el nombre de una receta y Pollito te proporcionará dos embeds. Uno contendrá la lista de ingredientes y el otro los pasos detallados para cocinar la receta. ¡Sigue las instrucciones paso a paso para crear platos deliciosos!

## Testing

En caso de querer probar la funcionalidad de la base de datos, se encuentra anexado el archivo JSON ```BotDiscord.postman_collection```, que, si se exporta a Postman :walking:, se pueden hacer peticiones de forma más sencilla para su prueba

## Contacto
Si tienes preguntas, sugerencias o simplemente quieres charlar sobre recetas, no dudes en enviarme un mensaje a mi [usuario de discord](https://discord.com/users/599334013563306005). :baby_chick:


