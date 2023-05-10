const PORT = process.env.PORT || 5000
const express = require('express');
const cors = require('cors');

const usuario = require('./src/routes/usuario.route');
const curso = require('./src/routes/curso.route');
const perfil = require('./src/routes/perfil.route');

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(usuario);
app.use(perfil);
app.use(curso);

app.listen(PORT, () => {
    console.log('Tamo on na porta: ' + PORT);
});