const nodemailer = require('nodemailer');
const {Router} = require('express');
const router = Router();


router.post('/', (req,res)=> {
    let nombre = req.body.nombre_form;
    let apellido = req.body.apellido_form;
    let correo = req.body.correo_form;
    let telefono = req.body.telefono_form;
    let mensaje = req.body.mensaje_form;
    let archivo = req.body.docs_form;
    
    let contentHTML = `
        <h1> MENSAJE VÍA FORMULARIO DEL CENTRO 404  </h1>
        <ul>
            <li>Nombre: ${nombre} </li>
            <li>apellido: ${apellido} </li>
            <li>correo: ${correo} </li>
            <li>telefono: ${telefono} </li>
        </ul>
        <p>
            Mensaje: <br>
                ${mensaje}
        </p>
        Archivo: ${archivo}
    `;
    console.log(contentHTML);
    //mailto:cfp404ensenada@gmail.com
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'bernardo.lindgren22@ethereal.email',
            pass: 'K9yF8NNAMCRMEYDzpr'
        },
        tls:{
            rejectUnauthorized: false
        }
    });

    // Message object
    let message = {
        from: 'Centro de Formación Laboral 404',
        to: 'brianpumaricapeche@gmail.com',
        subject: 'MENSAJE VÍA FORMULARIO DEL CENTRO 404',
        html: contentHTML,
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
    
});

module.exports = router;