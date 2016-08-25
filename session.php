<?php
session_start();

$formData = [
    'name'=>'',
    'quantity'=>'',
    'price'=>''
];

foreach ($formData as $key=>$value){
	$formData[$key] = trim(isset($_POST[$key]) ? $_POST[$key] : '');
}
foreach ($formData as $key=>$value){
   
	if(!empty($_POST[$key])){
	$_SESSION[$key] = $value;
	}
}
echo json_encode($_SESSION);
