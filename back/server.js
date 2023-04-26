const PORT = process.env.PORT || 5000
const express = require('express');
const cors = require('cors');

const usuario = require('./src/routes/usuarios.route');

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(usuario);

app.listen(PORT, () => {
    console.log('Tamo on na porta: ' + PORT);
});