const express = require('express');
const router = express.Router();

const Perfil = require("../controllers/perfil.controller")

router.get('/perfil/read', Perfil.read)
router.post('/perfil/create', Perfil.create)
router.put('/perfil/update/:id_User', Perfil.update)
router.delete('/perfil/delete/:id_User', Perfil.remove)

module.exports = router