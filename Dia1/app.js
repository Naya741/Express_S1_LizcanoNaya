//Dia1

//Importación de express en variable app
const express = require ('express');
const app = express();

//Definimos el puerto
const PORT= process.env.PORT;

//Ruta principal -> Endpoint
app.get('/',(req,res) =>{
    res.send('Holi! Bievenidos a express!');
});

//Ruta con respuesta en formato JSON
app.get('/mensaje2',(req,res) =>{
    let jsonsito= {
        "mensaje":"Holiii"
    };
    //res.send('Este es otro endpoint');
    res.json(jsonsito);
});


//Iniciar el servidor
app.listen(PORT,()=>{
    console.log("Servidor iniciado!");
});