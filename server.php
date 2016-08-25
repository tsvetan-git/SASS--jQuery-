<?php
$login = 'successful';
$error = 'denied';

$name = isset($_POST['username']) ? $_POST['username'] : '';
$pass = isset($_POST['password']) ? $_POST['password'] : '';

    if ($name == 'test' && $pass == 'test') {
        echo json_encode($login);
    } else {
        echo json_encode($error);
    }


