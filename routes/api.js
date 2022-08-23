const express = require('express');
const router = express.Router();
const {vistaCasa, crearCasa, vistaUnicaCasa} = require('../controller/controller');

router.get('/ver', vistaCasa);
router.get('/ver/id', vistaUnicaCasa);
router.post('/crear', crearCasa);

module.exports = router;