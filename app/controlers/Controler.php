<?php
if (isset($_GET['method']) && !empty($_GET['method'])) {
    require_once '../models/EntityManager.php';
    $entityManager = new EntityManager;
    if ($_GET['method'] == "show") {
        $data = Controler::show($entityManager, $_GET['id']);
        echo json_encode($data);
    } else if ($_GET['method'] == "update") {
        $data = Controler::update($entityManager, $_GET['id'], $_GET['id']);
        echo json_encode($data);
    } else if ($_GET['method'] == "delete") {
        $data = Controler::delete($entityManager, $_GET['id']);
        echo json_encode($data);
    }
}

class Controler
{

    static function create(object $entityManager, array $data)
    {
        try {
            $entityManager->create($data);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    static function showAll(object $entityManager)
    {
        $allNote = $entityManager->readAll();
        return $allNote;
    }

    static function show(object $entityManager, int $id)
    {
        $note = $entityManager->read($id);
        return $note;
    }


    static function update(object $entityManager, int $id, array $data)
    {
        try {
            $entityManager->update($id, $data);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    static function delete(object $entityManager, int $id)
    {
        try {
            $entityManager->delete($id);
            return true;
        } catch (\Throwable $th) {
            throw $th;
            return false;
        }
    }
}
