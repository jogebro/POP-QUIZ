const { Router } = require('express');
const { getPacientes } = require('../controller/paciente.controller.js')
const router = Router();

router.get('/', getPacientes);

module.exports = router