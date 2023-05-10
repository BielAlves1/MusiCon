const express = require('express');
const router = express.Router();

const Publicacao = require("../controllers/publicacao.controller")

router.get('/publicacao/read', Publicacao.read)
router.post('/publicacao/create', Publicacao.create)
router.put('/publicacao/update/:id_Pub', Publicacao.update)
router.delete('/publicacao/delete/:id_Pub', Publicacao.remove)

module.exports = router