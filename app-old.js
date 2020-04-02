const http = require('http');

//Recibe callback(Solicitudes, respuestas)
http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Waposcar',
            edad: 21,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();


    })
    .listen(8080);


console.log('Esuchando el puerto 8080');