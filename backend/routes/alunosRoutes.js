const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunosController');

/**
 * @swagger
 * tags:
 *   name: Alunos
 *   description: Endpoints relacionados a alunos
 */

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Lista todos os alunos
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: Lista de alunos
 */
router.get('/', alunoController.getAlunos);

/**
 * @swagger
 * /alunos/{id}:
 *   get:
 *     summary: Obtém um aluno por ID
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do aluno
 *     responses:
 *       200:
 *         description: Aluno encontrado
 *       404:
 *         description: Aluno não encontrado
 */
router.get('/:id', alunoController.getAluno);

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cria um novo aluno
 *     tags: [Alunos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - nome
 *               - apelido
 *               - curso
 *             properties:
 *               id:
 *                 type: string
 *               nome:
 *                 type: string
 *               apelido:
 *                 type: string
 *               idade:
 *                 type: number
 *               anoCurricular:
 *                 type: number
 *               curso:
 *                 type: string
 *     responses:
 *       201:
 *         description: Aluno criado com sucesso
 */
router.post('/', alunoController.createAluno);

/**
 * @swagger
 * /alunos/{id}:
 *   put:
 *     summary: Atualiza um aluno existente
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               apelido:
 *                 type: string
 *               idade:
 *                 type: number
 *               anoCurricular:
 *                 type: number
 *               curso:
 *                 type: string
 *     responses:
 *       200:
 *         description: Aluno atualizado
 *       404:
 *         description: Aluno não encontrado
 */
router.put('/:id', alunoController.updateAluno);

/**
 * @swagger
 * /alunos/{id}:
 *   delete:
 *     summary: Apaga um aluno
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Aluno apagado com sucesso
 *       404:
 *         description: Aluno não encontrado
 */
router.delete('/:id', alunoController.deleteAluno);

module.exports = router;

