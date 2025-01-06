const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const SECRET_KEY = "votre_clé_secrète";

app.use(bodyParser.json());

// Route de connexion
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "1234") {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });
    }
    res.status(401).json({ message: "Identifiants invalides" });
});

// Middleware pour vérifier le token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).json({ message: "Accès interdit" });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Token invalide ou expiré" });
    }
};

// Route protégée
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: "Bienvenue dans la zone protégée", user: req.user });
});

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
