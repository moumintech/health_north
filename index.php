<?php include 'db_connect.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Projet Médical</title>
</head>
<body>
    <h1>Bienvenue sur le Projet Médical</h1>
    <h2>Liste des patients :</h2>
    <ul>
        <?php
        $sql = "SELECT nom, prenom FROM Patients";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                echo "<li>" . $row["prenom"] . " " . $row["nom"] . "</li>";
            }
        } else {
            echo "<li>Aucun patient trouvé.</li>";
        }
        $conn->close();
        ?>
    </ul>
</body>
</html>
