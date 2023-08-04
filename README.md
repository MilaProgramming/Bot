# Bot de Discord Pollito

Pollito es un versátil bot de Discord que actúa como un portal entre una base de datos MongoDB que contiene alimentos y recetas. Ayuda a los usuarios a acceder y administrar información relacionada con alimentos a través de comandos intuitivos.

![Bot Pollito](https://i.imgflip.com/1um67c.jpg?a469488)

## Características

- Accede a datos de alimentos y recetas desde una base de datos MongoDB.
- Comandos interactivos con barras para una fácil obtención de datos.
- Explora, busca y gestiona información de alimentos y recetas de manera conveniente.

## Instalación y Configuración

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tunombredeusuario/bot-discord-pollito.git
   cd bot-discord-pollito```
2. Instala las dependencias:
   ```sh
   npm install
  ```
3. Ejecuta el bot:
```sh
node index.js
```

## Comando `/alimentos`

El comando `/alimentos` es una característica central del bot Pollito que permite a los usuarios acceder a la lista de alimentos almacenados en la base de datos. Cuando los usuarios ejecutan este comando, el bot responderá con un embed que muestra la información detallada de cada alimento disponible.

Para usar este comando, simplemente escribe `/alimentos` en cualquier canal de texto donde el bot esté presente.

## APIs de MongoDB Realm

Pollito utiliza dos APIs de MongoDB Realm para acceder a los datos de alimentos y recetas desde la base de datos. A continuación, se describen estas APIs y sus endpoints:

### API GET de Alimentos

- **Endpoint:** `https://us-east-1.aws.data.mongodb-api.com/app/botdiscord-pxxiu/endpoint/pollitoAlimentos`
- **Ruta:** `/pollitoAlimentos`
- **Descripción:** Esta API permite realizar una solicitud GET para obtener la lista de alimentos almacenados en la base de datos.

### API POST de Alimentos

- **Endpoint:** `https://us-east-1.aws.data.mongodb-api.com/app/botdiscord-pxxiu/endpoint/pollitoAlimentosSet`
- **Ruta:** `/pollitoAlimentosSet`
- **Descripción:** Esta API permite realizar una solicitud POST para agregar nuevos alimentos o actualizar información existente en la base de datos.

En el caso de querer probar el bot, contactar con la autora, y entrar al servidor de pruebas
