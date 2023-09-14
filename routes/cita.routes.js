const { Router } = require('express');
const { getCitaFecha } = require('../controller/cita.controller.js')
const router = Router();

router.get('/', getCitaFecha);

module.exports = router