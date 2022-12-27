//npm run dev
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true})); //Para entender un formulario
app.use(bodyParser.json());
app.use(express.json());
app.use(require('./routes/index'));

/*
app.get('/', function (req, res) {
    res.render('index.html');
    console.log('Home');
})
*/
const PORT = 3000;
app.listen(PORT, ()=> console.log("Corriendo en el puerto", PORT));