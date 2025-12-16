const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const tarefasRoutes = require('./routes/tarefasRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/tarefas', tarefasRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
