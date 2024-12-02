const express = require("express");
const { getAllServices, getServiceByType, calculateEMI } = require("../controllers/serviceController.js");
const router = express.Router();

router.get("/allservices", getAllServices);
router.get("/service/:type", getServiceByType);
router.post("/service/:type/calculate", calculateEMI);

module.exports = router;
