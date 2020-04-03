const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/herlpers');

//obtener puerto de heroku
const port = process.env.PORT || 3000;

//Crear middleware
//Haciendo public un directorio
app.use(express.static(__dirname + '/public'));

//Express HBS engine
//Creando parciales de hbs concatenando el directorio
hbs.registerPartials(__dirname + '/views/parciales/');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    //Renderiza(manda) el archivo 'home.hbs'
    res.render('home', {
        nombre: 'Humano'
    });

});

app.get('/about', (req, res) => {
    res.render('about');
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port } papi`);
});