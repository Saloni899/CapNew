const mongoose = require("mongoose");
const RequestSchema = new mongoose.Schema({
  mobile: {
    type: Number,
    required: [true, "Mobile number is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"]
  },
  amt: {
    type: Number,
    required: [true, "Amount is required"]
   
  },
  type: {
    type: String,
    required: [true, "Loan type is required"]
  },
  msg: {
    type: String,
    maxlength: [200, "Message cannot exceed 200 characters"],
  },
  code: {
    type: String,
    required: [true, "Service code is required"],
  },
});

module.exports = mongoose.model("Request", RequestSchema);
