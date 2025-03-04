<?php

use PHPMailer\PHPMailer\PHPMailer;

require_once('vendor/autoload.php'); /* class PHPMailer */

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    die();
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

/* Recebe os dados do cliente via POST */
$requestData = json_decode(file_get_contents('php://input'), true);
$name = $requestData['name']; //filter_input(INPUT_POST, 'name');
$email = $requestData['email']; //filter_input(INPUT_POST, 'email');
$phone = $requestData['phone']; //filter_input(INPUT_POST, 'phone');
$subject = $requestData['subject']; //filter_input(INPUT_POST, 'subject');
$message = $requestData['message']; //filter_input(INPUT_POST, 'message');

if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    header("HTTP/1.1 401");
    echo "Campos obrigátorios não preenchidos";
    exit();
}

try {
    $mail = new PHPMailer(true); //New instance, with exceptions enabled

    /* CORPO DO E-MAIL */
    $body = "<h2>Mensagem recebida do site:</h2>";
    $body .= "---------------------------- ";
    $body .= "<br>";
    $body .= "<b>Nome: </b> $name <br/>";
    $body .= "<b>E-mail: </b> $email <br/>";
    $body .= "<b>Telefone: </b> $phone <br/>";
    $body .= "<b>message: </b> $message <br/>";
    $body .= "----------------------------";

    $mail->isSMTP();                    // Send using SMTP
    $mail->Host = 'mail.aqis.com.br';     // Set the SMTP server to send through
    $mail->SMTPAuth = true;             // Enable SMTP authentication
    $mail->Username = 'email@aqis.com.br'; // SMTP username
    $mail->Password = '[FBnIMRA4{~z}.&5';     // SMTP password
    $mail->SMTPSecure = 'tls';// Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port = 587;                  // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged

    $mail->From = 'email@aqis.com.br';
    $mail->FromName = 'LS ESTRUTURAS - CONTATO SITE';
    $mail->AddAddress("contato@lsestruturassolares.com.br");//Enviar para
    $mail->Subject = mb_convert_encoding($subject, "UTF-8", "auto"); //Assunto
    $mail->CharSet = 'UTF-8';
    $mail->WordWrap = 80; // set word wrap

    $mail->MsgHTML($body);
    $mail->IsHTML(true); // send as HTML
    $mail->Send();

    return ['msg' => 'Enviado com sucesso', 'status' => 201]; //retorno devolvido para caso sucesso
} catch (\PHPMailer\PHPMailer\Exception $e) {
    header("HTTP/1.1 401");
    return ['msg' => "Erro ao enviar email", 'status' => 401];
}
