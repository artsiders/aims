<?php
require_once "app/controlers/controler.php";

$entityManager = new EntityManager;

$resuls = Controler::showAll($entityManager);
?>

<div class="container">
    <div class="body_note">
        <?php foreach ($resuls as $key => $resul) : ?>

            <div class="note container" data-id="<?= $resul['id'] ?>">
                <div class="number" data-id="<?= $resul['id'] ?>">
                    <?= $key + 1; ?>
                </div>
                <div class="title" data-id="<?= $resul['id'] ?>">
                    <?= $resul['title'] ?>
                    <span class="date">date: <?= $resul['join_date'] ?></span>
                </div>
            </div>

        <?php endforeach; ?>
    </div>
</div>