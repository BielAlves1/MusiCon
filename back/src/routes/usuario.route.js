const express = require('express');
const router = express.Router();

const Usuario = require("../controllers/usuario.controller")
const Middleware = require('../middleware/middleware')

router.post('/usuario/create', Usuario.create)
router.post('/login', Usuario.login)
router.post('/vereficaUser', Middleware.verificaAccess)
router.put('/usuario/update/:id_User', Usuario.update)
router.delete('/usuario/delete/:id_User', Usuario.remove)

module.exports = router