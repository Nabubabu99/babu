<?php

// Llamando los datos y guardandolos en variables
$nombre = $_POST['nombre'];
$celular = $_POST['celular'];
$mail = $_POST['mail'];
$mensaje = $_POST['mensaje'];

// Mail destinatario
$destinatario = "nabu.medice@gmail.com";
$asunto = "Mensaje desde InfoScout"; 

$carta = "De: $nombre \n";
$carta .= "Correo: $mail \n";
$carta .= "celular: $celular \n";
$carta .= "Mensaje: $mensaje";

// Enviando mensaje
mail($destinatario, $asunto, $carta);
header('Location:enviadomensaje.html')

?>