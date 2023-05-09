const express = require('express');
const router = express.Router();

const Curso = require("../controllers/curso.controller")

router.get('/perfil/read', Curso.read)
router.post('/perfil/create', Curso.create)
router.put('/perfil/update/:id_User', Curso.update)
router.delete('/perfil/delete/:id_User', Curso.remove)

module.exports = router