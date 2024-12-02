const mongoose = require("mongoose");
const ServiceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "Service type is required"],
  },
  code: {
    type: String,
    required: [true, "Service code is required"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Service description is required"],
  },
  imgUrl: {
     type: String 
  },
  detail: {
     type: Array, 
     required: [true, "Service detail is required"]},
});
module.exports = mongoose.model("Service", ServiceSchema);
