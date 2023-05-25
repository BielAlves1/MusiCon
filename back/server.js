const PORT = process.env.PORT || 5000
const express = require('express');
const cors = require('cors');

const routes = require('./src/routes.js');

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log('Tamo on na porta: ' + PORT);
});