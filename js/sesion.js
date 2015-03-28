function reserva(sesion, carpeta){
	document.getElementById("reservacion").innerHTML = sesion;
	var ruta = "images/"+carpeta+"/"+sesion.split(" ").join("_")+".jpg";
	document.getElementById("imagenReservacion").src = ruta;
}