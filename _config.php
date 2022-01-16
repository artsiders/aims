<?php

/**
 * les cofiguration de l'application
 */

class AutoLoad
{
    static function start()
    {
        spl_autoload_register(array(__CLASS__, 'autoload'));
        // creation des chemins absolu_________________________

        $root = $_SERVER["DOCUMENT_ROOT"];
        $host = $_SERVER["HTTP_HOST"];


        define("ROOT", "$root/app/");
        define("HOST", "http://" . "$host/app/");

        define("MODEL", "$root/app/models/");
        define("VIEW", "$root/app/views/");
        define("CONTROLER", "$root/app/controlers/");
        define("CLASSE", "$root/app/Class/");

        define("ASSET", "http://$host/assets/");

        // END chemins absolu__________________________________
    }
    static function autoload($class)
    {

        if (file_exists(MODEL . $class . '.php')) {
            include_once MODEL . $class . '.php';
        } else if (file_exists(VIEW . $class . '.php')) {
            include_once VIEW . $class . '.php';
        } else if (file_exists(CONTROLER . $class . '.php')) {
            include_once CONTROLER . $class . '.php';
        } else if (file_exists(CLASSE . $class . '.php')) {
            include_once CLASSE . $class . '.php';
        }
    }
}
