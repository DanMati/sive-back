const mongoose = require("mongoose");

const CarroSchema = new mongoose.Schema(
  {
    placa: {
      type: String,
      required: true,
    },
    modelo: {
      type: String,
      required: true,
    },
    cor: {
      type: String,
      required: true,
    },
    necessidadeEspecial: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Carro", CarroSchema);
