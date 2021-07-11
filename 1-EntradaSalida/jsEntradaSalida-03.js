/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	var mensajeAmostrar;

	nombreIngresado=document.getElementById("txtIdNombre").value;
    
	mensajeAmostrar = "Su nombre es " + nombreIngresado;
	
	alert(mensajeAmostrar);
	
	

}

