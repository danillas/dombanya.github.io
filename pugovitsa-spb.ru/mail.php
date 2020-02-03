<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;

if ( $method === 'POST' ) {
	$phone = $_POST['phone'];
	$project_name = "Ателье Пуговица";
	$admin_email  = "atelier.pugoviza@yandex.ru";
	$form_subject = "Заявка с сайта atelie-pugovitza.ru";
}

$message = "Телефон:".$phone;
		

function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}

$headers = "Content-type:text/plain; charset = utf-8\r\nFrom:$admin_email";
$headers .= "From: Отправитель <atelie-pugovitza.ru>\r\n";
mail($admin_email, adopt($form_subject), $message, $headers );
echo '<meta http-equiv="Refresh" content="0.1; URL=/">';
