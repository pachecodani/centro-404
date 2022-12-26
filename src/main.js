//npm run dev
const express = require('express');
//const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
//EL POST FUNCIONA, PERO NO LLEGAN LOS DATOS, VER ALGUN VIDEO ACTUAL DE COMO PASAR DATOS DE UN FORM A NODE... El de FAZT es de hace 3 años
app.use(express.urlencoded({extended:false})); //Para entender un formulario
app.use(express.json());
app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname,'public')));

/*
app.get('/', function (req, res) {
    res.render('index.html');
    console.log('Home');
})
*/
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Corriendo en el puerto", PORT);
});