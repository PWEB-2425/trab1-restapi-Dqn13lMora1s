const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursosController');

/**
 * @swagger
 * tags:
 *   name: Cursos
 *   description: Endpoints relacionados a cursos
 */

/**
 * @swagger
 * /cursos:
 *   get:
 *     summary: Lista todos os cursos
 *     tags: [Cursos]
 *     responses:
 *       200:
 *         description: Lista de cursos
 */
router.get('/', cursoController.getCursos);

/**
 * @swagger
 * /cursos/{id}:
 *   get:
 *     summary: Obtém um curso por ID
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do curso
 *     responses:
 *       200:
 *         description: Curso encontrado
 *       404:
 *         description: Curso não encontrado
 */
router.get('/:id', cursoController.getCurso);

/**
 * @swagger
 * /cursos:
 *   post:
 *     summary: Cria um novo curso
 *     tags: [Cursos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - nomeDoCurso
 *             properties:
 *               id:
 *                 type: string
 *               nomeDoCurso:
 *                 type: string
 *     responses:
 *       201:
 *         description: Curso criado com sucesso
 */
router.post('/', cursoController.createCurso);

/**
 * @swagger
 * /cursos/{id}:
 *   put:
 *     summary: Atualiza um curso existente
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do curso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeDoCurso:
 *                 type: string
 *     responses:
 *       200:
 *         description: Curso atualizado
 *       404:
 *         description: Curso não encontrado
 */
router.put('/:id', cursoController.updateCurso);

/**
 * @swagger
 * /cursos/{id}:
 *   delete:
 *     summary: Apaga um curso
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do curso
 *     responses:
 *       204:
 *         description: Curso apagado com sucesso
 *       404:
 *         description: Curso não encontrado
 */
router.delete('/:id', cursoController.deleteCurso);

module.exports = router;