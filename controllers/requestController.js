const Request = require("../models/Request");

const createRequest = async (req, res) => {
  const { mobile, email, amt, type, msg, code } = req.body;

  try {
    const request = await Request.create({ mobile, email, amt, type, msg, code });
    res.status(201).json({ message: "Request created successfully", request });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRequest = async (req, res) => {
  const { mobile, type, msg } = req.body;

  try {
    const request = await Request.findOneAndUpdate(
      { mobile },
      { type, msg },
      { new: true }
    );
    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }
    res.status(200).json({ message: "Request updated successfully", request });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteRequest = async (req, res) => {
  const { mobile } = req.body;
  try {
    const request = await Request.findOneAndDelete({ mobile });
    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }
    res.status(200).json({ message: "Request deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { createRequest, updateRequest, deleteRequest };
