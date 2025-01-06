const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3000;
const SECRET_KEY = "votre_clé_secrète";

// Pour analyser les données JSON envoyées dans les requêtes
app.use(express.json());

// Génération d'un token directement sur une route simple
app.get("/generateToken", (req, res) => {
  const payload = { username: "admin", role: "user" }; // Exemple de données
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" }); // Crée un token valable 1 heure
  res.json({ token });
});

// Vérification du token directement dans une route
app.get("/verifyToken", (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Récupérer le token dans l'en-tête
  if (!token) return res.status(403).json({ message: "Token manquant" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY); // Décoder et vérifier le token
    res.json({ message: "Token valide", data: decoded });
  } catch (err) {
    res.status(401).json({ message: "Token invalide ou expiré" });
  }
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
