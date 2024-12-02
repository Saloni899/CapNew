const express = require("express");
const {
  createRequest,
  updateRequest,
  deleteRequest,
} = require("../controllers/requestController");
const router = express.Router();

router.post("/service/:type/form", createRequest);
router.put("/updaterequest", updateRequest);
router.delete("/deleterequest", deleteRequest);

module.exports = router;
