const Aluno = require('../models/alunosModel');
const Curso = require('../models/cursosModel');

exports.getAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find();
    const cursos = await Curso.find();

    const alunosComCurso = alunos.map(aluno => {
      const curso = cursos.find(c => c.id === aluno.curso);
      return {
        ...aluno.toObject(),
        curso: curso ? curso.nomeDoCurso : null
      };
    });

    res.json(alunosComCurso);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAluno = async (req, res) => {
  console.log("🔍 A pesquisar pelo id do aluno:", req.params.id);

  try {
    // Find the aluno by custom id field
    const aluno = await Aluno.findOne({ id: req.params.id });

    if (!aluno) {
      return res.status(404).json({ message: "Aluno não encontrado" });
    }

    const curso = await Curso.findOne({ id: aluno.curso });

    const alunoComCurso = {
      ...aluno.toObject(),
      curso: curso ? curso.nomeDoCurso : null
    };

    res.json(alunoComCurso);
  } catch (error) {
    console.error("❌ Erro ao pesquisar aluno por id:", error);
    res.status(500).json({ message: "Erro ao buscar aluno" });
  }
};

exports.createAluno = async (req, res) => {
  try {
    const novoAluno = await Aluno.create(req.body);
    res.status(201).json(novoAluno);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Atualizar aluno por "id"
exports.updateAluno = async (req, res) => {
  const alunoAtualizado = await Aluno.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true }
  );

  if (!alunoAtualizado) {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }

  res.json(alunoAtualizado);
};

// Apagar aluno por "id"
exports.deleteAluno = async (req, res) => {
  const resultado = await Aluno.findOneAndDelete({ id: req.params.id });

  if (!resultado) {
    return res.status(404).json({ message: "Aluno não encontrado" });
  }

  res.status(204).end();
};

