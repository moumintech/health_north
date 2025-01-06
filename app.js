require("dotenv").config();
const express = require("express");
const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Log chaque requête reçue
app.use((req, res, next) => {
  console.log(`Requête : ${req.method} ${req.url}`); // Affiche la méthode et l'URL
  next();
});

// Importation des routes
const authRoutes = require("./routes/auth"); // Chemin relatif correct vers auth.js
app.use("/api/auth", authRoutes);

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error("Erreur globale :", err.stack); // Log utile
  res.status(500).send("Une erreur interne est survenue.");
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
