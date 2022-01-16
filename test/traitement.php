<?php
if (isset($_POST) and !empty($_POST)) {
    echo json_encode($_POST);
}
