<?php
header("Content-Type: application/json");

try {
    $pdo = new PDO("mysql:host=localhost;dbname=aims", "root", "");
} catch (PDOException $e) {
    echo "erreur: " . $e->getMessage();
}

$result = $pdo->prepare("SELECT * FROM list_objectif");
$result->execute();
$result = $result->fetchAll(PDO::FETCH_ASSOC);

$api = array();
$api["success"] = true;
$api["message"] = "all is ok";
$api["resultat"]["vols"] = $result;

echo json_encode($api);
