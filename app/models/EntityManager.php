<?php
require_once "Connexion.php";
class EntityManager
{

    public function __construct()
    {
        $this->connect = new Connexion;
    }

    public function create(array $data)
    {
        $sql = "INSERT INTO 
            `list_objectif` (title, objectif_text) 
            VALUES(:title, :objectif_text)";

        $query = $this->connect->getConnect()->prepare($sql);
        $query->bindParam("title", $data['title']);
        $query->bindParam("objectif_text", $data['objectif_text']);
        // $query->bindParam("join_date", $data['join_date']);

        $query->execute();
    }

    public function read(int $id)
    {
        $sql = "SELECT * FROM list_objectif WHERE id = :id";
        $query = $this->connect->getConnect()->prepare($sql);
        $query->bindParam("id", $id);
        $query->execute();
        $result = $query->fetch(PDO::FETCH_ASSOC);

        return $result;
    }

    public function readAll()
    {
        $query = $this->connect->getConnect()->prepare("SELECT * FROM list_objectif");
        $query->execute();
        $result = $query->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }

    public function update(int $id, array $data)
    {
        $sql = "UPDATE `list_objectif` 
            SET title = :title, objectif_text = :objectif_text, join_date = :join_date
            WHERE id = :id";

        $query = $this->connect->getConnect()->prepare($sql);
        $query->bindParam("title", $data['title']);
        $query->bindParam("objectif_text", $data['objectif_text']);
        $query->bindParam("join_date", $data['join_date']);
        $query->bindParam("id", $id);

        $query->execute();
    }

    public function delete($id)
    {
        $sql = "DELETE FROM `list_objectif` WHERE `list_objectif`.`id` = :id";
        $query = $this->connect->getConnect()->prepare($sql);
        $query->bindParam("id", $id);
        $query->execute();
    }
}
