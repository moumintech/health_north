const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");

app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
