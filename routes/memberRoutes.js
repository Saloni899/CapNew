const express = require("express");
const { createMember, updatePassword, cancelMembership } = require("../controllers/memberController");
const router = express.Router();

router.post("/member", createMember);
router.put("/updatepassword", updatePassword);
router.delete("/cancelmember", cancelMembership);

module.exports = router;
