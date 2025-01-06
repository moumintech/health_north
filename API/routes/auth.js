const express = require("express");
const router = express.Router();
const { register } = require("../controllers/authController");

// Route pour l'enregistrement
router.post("/register", register);

module.exports = router;
