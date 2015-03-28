function validaFormulario(form,nombre, correo, telefono, mensaje) {
    var reg = "^[0-9]+$";
  
	if(!validaNombre(nombre)) {
		return false;
	}

	if(!validaCorreoTelefono(correo,telefono)) {
		return false;
	}

	if(mensaje == "Mensaje" || mensaje == "" || mensaje == null){
		alert("No olvides dejarnos tu mensaje!");
		return false;
	}

	if(mensaje.length < 15){
		alert("Déjanos un mensaje de al menos 15 carácteres!");
		return false;
	}
     return true;
}
function validaNombre(name){
	var reg = "^[(a-zA-Z |\s)]+$"; // Solo letras y espacios
	var caza = name.match(reg);
	if(name == "" || name == null) {
		alert("Escribe tu nombre");
		return false;
	}
	if(caza == null){
		alert("Tu nombre sólo debe tener letras!");
		return false;
	}
	return true;
}

function validaCorreoTelefono(correo,telefono){
	var regT = "^[0-9]+$";
	var regC = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	var caza = telefono.match(regT);

	if((correo == null || correo == "") && (telefono == null || telefono == "")) {
		alert("Debes proporcionar tu telefono o tu correo para poder contactarte!");
		return false;
	}
	if((correo == null || correo == "") && (telefono != "" || telefono != null)) {
		if(caza == null){
			alert("Tu telefono sólo debe tener números.");
			return false;
		}
		return true;
	}

	if((telefono == null || telefono == "") && (correo != "" || correo != null)) {
		if(!regC.test(correo)){
			alert("Tu correo debe tener el siguiente formato: user@ejemplo.algo (ejemplo: jean128@hotmail.com) ");
			return false;
		}
		return true;
	}	

	//Ambos son no nulos
	if(!regC.test(correo)){
			alert("Tu correo debe tener el siguiente formato: user@ejemplo.algo (ejemplo: jean128@hotmail.com) ");
			return false;
	}

	if(caza == null){
			alert("Tu telefono sólo debe tener números.");
			return false;
	}
	return true;
}

function enviaMail(form){

    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    mensaje = document.getElementById("mensaje").value;
	if(!validaFormulario(form,nombre,correo,telefono,mensaje)) return;

	document.getElementById(form).submit();

}

function enviaMail2(form){
    nombre = document.getElementById("nombre2").value;
    correo = document.getElementById("correo2").value;
    telefono = document.getElementById("telefono2").value;
    var bien = true;
    bien = bien && validaNombre(nombre) && validaCorreoTelefono(correo,telefono);
	if(!bien) return;
	document.getElementById("ContactForm2").action+= "&ageda=Agenda sesión: "+document.getElementById("reservacion").innerHTML;
	document.getElementById(form).submit();
}
