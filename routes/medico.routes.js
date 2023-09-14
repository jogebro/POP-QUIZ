const { Router } = require('express');
const { getMedicoEspecialidad } = require('../controller/medico.controller.js')
const router = Router();

router.get('/', getMedicoEspecialidad);

module.exports = router