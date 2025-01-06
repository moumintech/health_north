require("dotenv").config();
const express = require("express");
const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Importation des routes
const authRoutes = require("./routes/auth"); // Chemin relatif correct vers auth.js
app.use("/api/auth", authRoutes);

// Middleware global pour capturer les erreurs
app.use((err, req, res, next) => {
  console.error("Erreur globale :", err.stack);
  res.status(500).send("Une erreur interne est survenue.");
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
