const express = require('express');
const router = express.Router();

const Usuario = require("./controllers/usuario.controller")
const Middleware = require('./middleware/middleware')
const Perfil = require("./controllers/perfil.controller")
const Publicacao = require("./controllers/publicacao.controller")
const Comentario = require("./controllers/comentario.controller")
const Resposta = require("./controllers/resposta.controller")
const Curso = require("./controllers/curso.controller")
const Modulo = require("./controllers/modulo.controller")
const Aula = require("./controllers/aula.controller")


router.post('/usuario/create', Usuario.create)
router.post('/login', Usuario.login)
router.get('/usuario/readUserName/:user_name', Usuario.readUserName)
router.get('/usuario/readEmail/:email', Usuario.readEmail)
router.post('/vereficaUser', Middleware.verificaAccess)
router.put('/usuario/update/:id_User', Usuario.update)
router.delete('/usuario/delete/:id_User', Usuario.remove)

router.get('/perfil/read', Perfil.read)
router.post('/perfil/create', Perfil.create)
router.put('/perfil/update/:id_User', Perfil.update)
router.delete('/perfil/delete/:id_User', Perfil.remove)

router.get('/publicacao/read', Publicacao.read)
router.post('/publicacao/create', Publicacao.create)
router.put('/publicacao/update/:id_Pub', Publicacao.update)
router.delete('/publicacao/delete/:id_Pub', Publicacao.remove)

router.get('/comentario/read', Comentario.read)
router.post('/comentario/create', Comentario.create)
router.put('/comentario/update/:id_Coment', Comentario.update)
router.delete('/comentario/delete/:id_Coment', Comentario.remove)

router.get('/resposta/read', Resposta.read)
router.post('/resposta/create', Resposta.create)
router.put('/resposta/update/:id_Resp', Resposta.update)
router.delete('/resposta/delete/:id_Resp', Resposta.remove)

router.get('/curso/read', Curso.read)
router.post('/curso/create', Curso.create)
router.put('/curso/update/:id_Curso', Curso.update)
router.delete('/curso/delete/:id_Curso', Curso.remove)

router.get('/modulo/read', Modulo.read)
router.post('/modulo/create', Modulo.create)
router.put('/modulo/update/:id_Resp', Modulo.update)
router.delete('/modulo/delete/:id_Resp', Modulo.remove)

router.get('/aula/read', Aula.read)
router.post('/aula/create', Aula.create)
router.put('/aula/update/:id_Resp', Aula.update)
router.delete('/aula/delete/:id_Resp', Aula.remove)

module.exports = router