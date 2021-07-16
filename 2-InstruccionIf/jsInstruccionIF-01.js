/*Ejercicio 1 IF
Francisco Pucci Romero
Divicion C

Enunciado:
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/
function mostrar()
{	
	//declaracion variables
	let edad;

	//toma informacion y pasar a numeros enteros
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	//clausula if
	if(edad==15)
	{	//salida
		alert("niña bonita");
	}
	//tomo la edad  
	//alert("ok");

}//FIN DE LA FUNCIÓN