const express = require('express');

const { makeRoutes } = require('./routes');

const app = express()

makeRoutes(app)

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
})