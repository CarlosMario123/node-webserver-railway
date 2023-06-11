const express = require("express");
const hbs = require('hbs');
//Para usar el archivo env
require('dotenv').config();

const app = express();

//asi se usa el archico
const port = process.env.PORT; 



app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.get("/", (req, res) => {
  res.render('home', {
    nombre: 'pablo',
    titulo:'curso node'
  }); 
});

app.get('/generic', (require,response)=>{
  response.render('generic',{
    nombre: 'pablo',
    titulo:'curso node'
  })
})

app.get('/elements', (require,response)=>{
  response.render('elements',{
    nombre: 'pablo',
    titulo:'curso node'
  })
})





//Servir contenido estatico
//Ejecutar lo siguiente
app.use(express.static('public'))




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
