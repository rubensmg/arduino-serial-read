const { Server } = require('hapi');
const Route = require('./lib/routes');

const server = new Server({ port: 3000, host: 'localhost' });

server.route(Route);

server.start().then(() => {
    console.log(`Server running in port ${server.info.port}`);
}).catch((error) => {
    console.log(`Error to start the server (Message: ${error.message})`);
});
