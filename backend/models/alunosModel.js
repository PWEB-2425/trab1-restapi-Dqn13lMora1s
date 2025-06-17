const mongoose = require('mongoose'); 

const alunoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true // important for proper querying
  },
  nome: {
    type: String,
    required: true
  },
  apelido: {
    type: String,
    required: true
  },
  idade: Number,
  anoCurricular: Number,
  curso: {
  type: String,
  required: true
  }
});

module.exports = mongoose.model('Aluno', alunoSchema);
