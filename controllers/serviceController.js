const Service = require("../models/Service");
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getServiceByType = async (req, res) => {
  const { type } = req.params;
  try {
    const service = await Service.findOne({ type });
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const calculateEMI = (req, res) => {
    const { amt, tenure, type } = req.body;
    try {
      if (!amt || !tenure || !type) {
        return res.status(400).json({ message: "Amount, tenure, and type are required" });
      }
      if (amt <= 0 || tenure <= 0) {
        return res.status(400).json({ message: "Amount and tenure must be greater than 0" });
      }
      const interestRates = {
        "Home Loan": 6.8, 
        "Personal Loan": 11, 
        "Car Loan": 8, 
        "MI Loan": 9, 
      };
      const interestRate = interestRates[type];
      if (!interestRate) {
        return res.status(400).json({ message: "Invalid loan type" });
      }
      const monthlyRate = interestRate / (12 * 100); 
      const emi = (amt * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
      res.status(200).json({
        type,
        amt,
        tenure,
        interestRate,
        emi: emi.toFixed(2), 
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  };
  
  module.exports = { getAllServices, getServiceByType, calculateEMI };
  