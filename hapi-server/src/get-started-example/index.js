'use strict';

// https://hapi.dev/tutorials/?lang=en_US

const Hapi = require('../../node_modules/@hapi/hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3030,
        host: 'localhost'
	});
	
	server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return '<div style="font-size:2em;font-family:monospace">Hello Hapi!</div>';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();