<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $date_naissance = $_POST["date_naissance"];

    $sql = "INSERT INTO Patients (nom, prenom, date_naissance) VALUES ('$nom', '$prenom', '$date_naissance')";

    if ($conn->query($sql) === TRUE) {
        echo "Patient ajouté avec succès !";
    } else {
        echo "Erreur : " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Ajouter un patient</title>
</head>
<body>
    <h1>Ajouter un patient</h1>
    <form method="post">
        Nom : <input type="text" name="nom" required><br>
        Prénom : <input type="text" name="prenom" required><br>
        Date de naissance : <input type="date" name="date_naissance" required><br>
        <input type="submit" value="Ajouter">
    </form>
</body>
</html>
