const mongoose = require("mongoose");
const MemberSchema = new mongoose.Schema({
  mobile: {
    type: Number,
    required: [true, "Mobile number is required"],
    unique: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  occupation: {
    type: String,
    required: [true, "occupation is required"]
  },
  createpassword: {
    type: String,
    required: [true, "Password is required"]
  },
});
module.exports = mongoose.model("Member", MemberSchema);
