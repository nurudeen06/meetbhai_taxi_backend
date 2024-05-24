const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: [true, "Please fill Vehicle Category Name"],
  },
  priority: {
    type: String,
    required: [true, "Please fill Vehicle Priority"],
    unique: true,
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;