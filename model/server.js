const express = require('express');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            paciente: '/paciente',
            cita: '/cita',
            medico: '/medico'
        };
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.paths.paciente, require('../routes/paciente.routes.js'));
        this.app.use(this.paths.cita, require('../routes/cita.routes.js'));
        this.app.use(this.paths.medico, require('../routes/medico.routes.js'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Corriendo en el puerto ${this.port}`);
        })
    }
}

module.exports = Server