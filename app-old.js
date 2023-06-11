const http = require('http');

/*http.createServer((request, response)=>{ //peticion http

    response.write('hola mundo'); // es la respuesta
    response.end(); // se tiene que poner eñ end para que sepa que hemos terminado la peticion

})
.listen(8080); //puerto en el que se ejecutara*/


//console.log('Escuchando en el puerto:', 8080 );

http.createServer((request, response)=>{ //recibe un callback con lo requerido y la respuesta
    
    

    response.writeHead(200, {'Content-Type' : 'application/json'});

    const Persona =[
        {
            id : 1,
            nombre:'pablo'
        },
        {
            id:2,
            nombre:'Eduardo'
        },
        {
            id:3,
            nombre:'Carlos'
        }

    ] 

    response.write(JSON.stringify(Persona));
    response.end();

    

})
.listen(8080);






