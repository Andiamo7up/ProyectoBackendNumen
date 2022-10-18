const express = require('express');
const router = express.Router();
const {vistaCasa, crearCasa, vistaUnicaCasa, editarCasa, borrarCasa} = require('../controller/controller.js');
const { check, validationResult, body} = require ("express-validator");
const {validarId} = require ("../middleware/validarId")

router.get('/ver', vistaCasa);
router.get('/ver/:id', validarId, vistaUnicaCasa);
router.post('/crear', [
    check("name").not().isEmpty().withMessage("el campo esta vacio").islength({max:20, min:3}).withMessage("debe tener mas de 4 letras y menos de 20 caracteres")
], crearCasa);
router.put("/editar/:id", validarId [
    check("name").not().isEmpty().withMessage("el campo esta vacio").islength({max:20, min:3}).withMessage("debe tener mas de 4 letras y menos de 20 caracteres")
], editarCasa);
router.delete("/eliminar/:id", borrarCasa)

module.exports = router;