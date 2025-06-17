const Curso = require('../models/cursosModel');

exports.getCursos = async (req, res) => {
  const cursos = await Curso.find();
  res.json(cursos);
};

exports.getCurso = async (req, res) => {
  const curso = await Curso.findById(req.params.id);
  res.json(curso);
};

exports.createCurso = async (req, res) => {
  const novoCurso = await Curso.create(req.body);
  res.status(201).json(novoCurso);
};

exports.updateCurso = async (req, res) => {
  const cursoAtualizado = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(cursoAtualizado);
};

exports.deleteCurso = async (req, res) => {
  await Curso.findByIdAndDelete(req.params.id);
  res.status(204).end();
};