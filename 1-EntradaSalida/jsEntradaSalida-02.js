/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{ 
	var nombre;
	var mostrarMensaje;

	nombre = prompt("Por favor ingresar nombre", "Ingresar nombre");
	
	mostrarMensaje = "Su nombre es " + nombre;

	alert(mostrarMensaje);



}

