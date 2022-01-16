<?php

class Routeur
{
    public static function route(string $action)
    {
        switch ($action) {
            case 'home':
                include "app/views/home.php";
                break;
            case 'details':
                include "app/views/details.php";
                break;
            case 'empty':
                include "app/views/home.php";
                break;
            default:
                include "app/views/error.php";
        }
    }
}
