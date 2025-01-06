const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = []; // Exemple : Simuler une base de données

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).send("Utilisateur enregistré avec succès !");
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).send("Utilisateur non trouvé.");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(400).send("Mot de passe incorrect.");

  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.status(200).json({ token });
};
