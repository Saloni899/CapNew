const Member = require("../models/Member");

const createMember = async (req, res) => {
  const { mobile, email, occupation, createpassword } = req.body;

  try {
    const member = await Member.create({ mobile, email, occupation, createpassword });
    res.status(201).json({ message: "Member created successfully", member });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePassword = async (req, res) => {
  const { mobile, password } = req.body;

  try {
    const member = await Member.findOneAndUpdate({ mobile }, { createpassword: password }, { new: true });
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.status(200).json({ message: "Password updated successfully", member });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const cancelMembership = async (req, res) => {
  const { mobile } = req.body;

  try {
    const member = await Member.findOneAndDelete({ mobile });
    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }
    res.status(200).json({ message: "Membership canceled successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createMember, updatePassword, cancelMembership };
