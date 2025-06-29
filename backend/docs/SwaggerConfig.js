// backend/docs/swaggerConfig.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Alunos e Cursos",
      version: "1.0.0",
      description: "Documentação da API usando Swagger: Frontend app no -> https://trab1-restapi-dqn13l-mora1s-7boc.vercel.app",
    },
    servers: [
      {
        url: "https://trab1-restapi-dqn13lmora1s-backend.onrender.com", //  URL do Render
        description: "Servidor de produção",
      },
      {
        url: "http://localhost:5000", //  Localhost para testes locais
        description: "Servidor local",
      }
    ]
  },
  apis: [
    "./routes/alunosRoutes.js",
    "./routes/cursosRoutes.js"
  ],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
