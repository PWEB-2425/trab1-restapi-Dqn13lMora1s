const mongoose = require('mongoose'); 

const cursoSchema = new mongoose.Schema({
  id: {
  type: String, // this is your custom ID
  required: true,
  unique: true
  },
  nomeDoCurso: {
  type: String,
  required: true
}
});

module.exports = mongoose.model('Curso', cursoSchema);
