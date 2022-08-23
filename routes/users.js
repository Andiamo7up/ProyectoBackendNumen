const express = require('express');
const { verUser } = require('../controller/controller');
const router = express.Router();
const controllers = require('../controller/controller');

/* GET users listing. */
router.get('/', controllers.myUser);
router.post('/crearUsuario', controllers.newUser);
router.get('/verUser', controllers.verUser)

module.exports = router;