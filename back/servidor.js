const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const Usuario = require('./src/routes/usuarios.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use(Usuario);

app.listen(PORT, () => {
    console.log('Tamo on na porta: ' + PORT);
});