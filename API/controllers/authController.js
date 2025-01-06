const bcrypt = require("bcryptjs");

const users = []; // Simule une base de données

exports.register = async (req, res) => {
  try {
    console.log("Requête reçue :", req.body);

    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .send("Le nom d'utilisateur et le mot de passe sont requis.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });

    res.status(201).send("Utilisateur enregistré avec succès !");
  } catch (error) {
    console.error("Erreur dans register :", error);
    res.status(500).send("Erreur interne du serveur.");
  }
};
