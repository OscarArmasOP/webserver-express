const hbs = require('hbs');


// helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {

    let palbras = texto.split(' ');
    palbras.forEach((palabra, idx) => {
        //Actualizar palabra de [idx]
        palbras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palbras.join(' ');
});