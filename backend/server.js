// API real a ser implementada
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/SwaggerConfig");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas
const alunoRoutes = require('./routes/alunosRoutes');
const cursoRoutes = require('./routes/cursosRoutes');

app.use('/alunos', alunoRoutes);
app.use('/cursos', cursoRoutes);

// Conexão à BD
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Ligado ao MongoDB');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Servidor a correr na porta ${process.env.PORT || 5000}`);
    });
  })
  .catch(err => console.error(err));

