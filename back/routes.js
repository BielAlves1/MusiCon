const express = require('express');

const router = express.Router();

const Ususarios = require('./controllers/usuarios.controller.js');

router.get('/usuarios', Ususarios.test);
router.post('/usuarios/create', Ususarios.create);
router.get('/usuarios/read', Ususarios.readAll);
router.get('/usuarios/read/:id', Ususarios.read);
router.post('/usuarios/login', Ususarios.login);
router.put('/usuarios/update/:id', Ususarios.update);
router.delete('/usuarios/delete/:id', Ususarios.del);

module.exports = router;