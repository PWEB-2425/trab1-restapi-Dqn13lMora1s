# Trabalho Prático #1 - API RESTful com Frontend e Backend

Projeto desenvolvido para a unidade curricular de Tecnologias Web. O objetivo é consolidar os conhecimentos em criação, consumo e implementação de APIs RESTful utilizando o ecossistema JavaScript moderno, com foco em boas práticas, testes e deploy.

##  Autor

* Daniel Morais

---

##  Objetivo Geral

Construir uma aplicação completa (frontend + backend) com:

* CRUD completo de alunos
* Associação com cursos
* API RESTful real com MongoDB
* Interface web funcional
* Documentação com Swagger
* Deploy em Vercel (frontend) e Render (backend)

---

##  Tecnologias Utilizadas

### Frontend

* HTML, CSS, JavaScript
* Fetch API para consumir a API

### Backend

* Node.js + Express
* MongoDB Atlas + Mongoose
* Swagger (para documentação da API)

### Testes

* JSON Server (mock)
* Postman

### Deploy

* Vercel (frontend)
* Render (backend)

---

##  Estrutura do Projeto

```
projeto-raiz/
│
├── frontend/        # Interface web
|   └── index.html   # 
|   └── style.css    # 
|   └── script.js    # 
├── backend/         # API RESTful real (Express + MongoDB)
|   └── controllers/ # Lógica dos endpoints (CRUD)
│   └── docs/        # SwaggerConfig.js e documentação
|   └── models/      # Modelos Mongoose (Aluno, Curso)
|   └── routes/      # Definição das rotas da API
|   └── server.js    # Ficheiro principal do servidor
├── mock-server/     # JSON Server configurado
├── mock-data/       # bd.json (dados simulados)
├── tests/           # Coleção do Postman
└── README.md
```

---

##  Funcionalidades

### Frontend

* Visualizar todos os alunos
* Adicionar novo aluno
* Editar aluno existente
* Apagar aluno
* Pesquisa por nome, apelido, idade ou curso

### Backend

* Endpoints RESTful:

  * GET /alunos, GET /alunos/\:id
  * POST /alunos
  * PUT /alunos/\:id
  * DELETE /alunos/\:id
  * GET /cursos, GET /cursos/\:id
* Dados persistidos em MongoDB Atlas
* Documentação dos endpoints em Swagger

---

##  Links Importantes

*  Frontend (Vercel): [https://trab1-restapi-dqn13l-mora1s-7boc.vercel.app](https://trab1-restapi-dqn13l-mora1s-7boc.vercel.app)
*  API (Render): [https://trab1-restapi-dqn13lmora1s-backend.onrender.com](https://trab1-restapi-dqn13lmora1s-backend.onrender.com)
*  Documentação Swagger: [https://trab1-restapi-dqn13lmora1s-backend.onrender.com/docs](https://trab1-restapi-dqn13lmora1s-backend.onrender.com/docs)

---

##  Instalação Local

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
```

### 2. Instalar dependências do backend

```bash
cd backend
npm install
```

### 3. Criar o ficheiro `.env`

```env
MONGO_URI=<tua_connection_string_mongodb>
PORT=5000
```

### 4. Iniciar o backend

```bash
node server.js
```

### 5. Iniciar o frontend

Basta abrir o ficheiro `index.html` no navegador ou fazer o deploy via Vercel.

---

##  Testes com JSON Server (Mock API)

```bash
cd mock-server
npm install
npm run start
```

A API simulada irá usar o ficheiro `mock-data/bd.json`.

---

##  Swagger

A documentação da API encontra-se disponível na rota:

```
GET /docs
```

A configuração encontra-se em `backend/docs/SwaggerConfig.js`.

---

## Considerações Finais

Este projeto cobre todas as etapas do ciclo de desenvolvimento de aplicações web modernas, incluindo:

* Modelagem de dados
* Simulação de APIs
* Criação de APIs reais
* Integração full-stack
* Testes e documentação
* Deploy completo

---
