const mongoose = require("mongoose");
const { CarroSchema } = require('./carro.js')
const MotoristaSchema = new mongoose.Schema(
  {
    matricula: {
        type: Number,
        required: true,
      },
    tipo: {
      type: String,
      required: true,
    },
    nome: {
      type: String,
      required: true,
    },
    telefone: {
      type: String,
      required: true,
    },
    carro: {
      type: [CarroSchema],
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Motorista", MotoristaSchema);
