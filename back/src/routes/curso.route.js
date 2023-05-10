const express = require('express');
const router = express.Router();

const Curso = require("../controllers/curso.controller")

router.get('/curso/read', Curso.read)
router.post('/curso/create', Curso.create)
router.put('/curso/update/:id_Curso', Curso.update)
router.delete('/curso/delete/:id_Curso', Curso.remove)

module.exports = router