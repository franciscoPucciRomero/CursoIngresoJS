/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declarar variables
	var nombre;
	var edad;
	var mensaje;
	
	//asignar valores
	nombre=document.getElementById("txtIdNombre").value;
	edad=document.getElementById("txtIdEdad").value;

	//mensaje
	mensaje="Usted se llama " + nombre +" y tiene "+ edad+" años"

	alert(mensaje)

	//txtIdEdad
	//txtIdNombre
	//alert("ok");
}

