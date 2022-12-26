const {Router} = require('express');
const router = Router();

router.post('/send-email', (req,res)=> {
    console.log(req.body);
    console.log(req.body.nombre);
    console.log(req.params.nombre);
    console.log(req.body);
    res.send('recibido');
    /*
    res.send('Datos' + req.params.nombre + req.params.apellido + req.body.correo + req.body.telefono + req.body.mensaje);
    console.log(req.body.nombre);
    console.log(req.params.nombre);
    console.log(req.body);
    
    //mailto:cfp404ensenada@gmail.com

    //funciando, la idea ahora, es en el correo 
    //mandar un mensaje en el body con los inputs
    /* 
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'lorenzo90@ethereal.email',
            pass: 'bxbTr3j61vwf8qt1Kc'
        }
    });

    // Message object
    let message = {
        from: 'Remitente',
        to: 'brianpumarica@gmail.com',
        subject: 'Ethereal unit test message',
        text: 'Hello world',
    };

    transporter.sendMail(message, (err, info) => {
        if(err){
            res.status(500).send(err.message);
        }
        else{
            //aca se podria poner if/else, para retornar mensaje
            res.status(200).jsonp(req.body);
        }
    });
    */
});

module.exports = router;