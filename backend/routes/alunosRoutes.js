const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunosController');

router.get('/', alunoController.getAlunos);
router.get('/:id', alunoController.getAluno);
router.post('/', alunoController.createAluno);
router.put('/:id', alunoController.updateAluno);
router.delete('/:id', alunoController.deleteAluno);

module.exports = router;