<?php
require_once "controler.php";
require_once "../models/EntityManager.php";

$EntityManager = new EntityManager;

$message = "";

if (isset($_POST) && !empty($_POST)) {

    try {
        $resuls = new Controler;
        $resuls->create($EntityManager, $_POST);
        $message = "insertion reussi";
    } catch (\Throwable $th) {
        throw $th;
        $message = "echec de l'insertion";
    }
    echo json_encode($message);
}
