<?php 
/*
	Funciones para enviar correos
*/
function enviaCorreoUno($subject, $message, $headers){
	$resultado = "Correo Enviado";
if (!(@$correo=mail("contacto@universoalternativo.com.mx",$subject,$message,$headers))){
		$resultado = "Error al enviar el correo";
	}
	return $resultado;
}

function enviaCorreoDos($subject, $message, $headers){
	$resultado = "Correo Enviado";
if (!(@$correo=mail("universoestadodemex@gmail.com",$subject,$message,$headers))){
		$resultado = "Error al enviar el correo";
	}
	return $resultado;
}


/*
	Se reciben los parametros
*/
$form = $_GET["form"];

/*
	Según el formulario
	es correo que se envía
	1 - Contacto
	2 - Agenda Sesión
*/
$motivo = "";
if($form === "1"){
	$motivo = "Contacto</h2>";
} else {
	$motivo = $_GET["ageda"]."</b></h2>";
}	

$sede = $_POST["sede".$form][0];
$nombre = $_POST["nombre".$form];
$correo = $_POST["correo".$form];
$tel = $_POST["tel".$form];
$mensaje = $_POST["mensaje".$form];
$cursos="";

if(isset($_GET["reserva"])){
	$cursos = utf8_decode($_GET["reserva"]);
} else {
	if(isset($_POST["servicioSolicitado"])){
		foreach ($_POST["servicioSolicitado"] as $valor) {
			$cursos .= $valor.",";
		}
		$cursos = substr($cursos, 0,-1);
		$cursos = "<b>Cursos de interés: ".$cursos."</b> <br>";
	}
}
header("Content-Type: text/html; charset=UTF-8");

$subject = "Contacto Universo Alternativo";
$message = 
		'
		<html> 
		<head> 
		<meta charset="utf-8">
		<title>Contacto Universo Alternativo</title> 
		</head> 
		<body> 
		<center><img src="http://pruebasdarktech.comli.com/Universo_Alternativo_V7.5/logoUniverso.png"></center>
		<center><h2 style="font-weight: bold; color:#038ee5;">'.$sede.'<br>
		'.$motivo.'</center> 
		<br/>
		<h3>De: '.$nombre.' ('.$correo.')</h3> 
		<b>Tel: '.$tel.'</b>
		<br> <br>
		'.$cursos.' <h3 style="font-weight: bold; color:#038ee5;">Mensaje:<h3>
		<center><p style="width:80%;border:2px solid #038ee5;padding:10px;">'.$mensaje.'</p></center>
		<br/> 
		</body> 
		</html>';

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; 
$headers .= "Bcc: cp.jazmin@gmail.com\r\n";
$headers .= "X-Mailer:PHP/".phpversion();

/* A quien va diriguido el correo:*/
if($sede === "Sede Sur"){
	$resultado =  enviaCorreoUno($subject, $message, $headers);
} else {
	$resultado =  enviaCorreoDos($subject, $message, $headers);
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<link href="images/favicon.png" type="image/x-icon" rel="shortcut icon" />
	<title>Contacto: Universo Alternativo</title>
</head>
<body>
	<script>
	alert('<?php echo $resultado;?>');
	window.location="index.html";
	</script>
</body>
</html>