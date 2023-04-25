const express = require('express');
const router = express.Router();

const Usuario = require("../controllers/usuarios.controller")
const Middleware = require('../middleware/middleware')

router.post('/usuario/create', Usuario.create)
router.post('/login', Usuario.login)
router.post('/vereficaUser', Middleware.verificaAccess)
router.put('/usuario/update', Usuario.update)
router.delete('/usuario/delete', Usuario.remove)