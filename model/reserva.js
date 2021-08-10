const mongoose = require("mongoose");

const ReservaSchema = new mongoose.Schema(
  {
    matricula: {
      type: String,
      required: true,
    },
    turno: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
    observacao: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reserva", ReservaSchema);
