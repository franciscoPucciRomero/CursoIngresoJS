
/*Ejercicio 5 IF
Francisco Pucci Romero
Divicion C
Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/function mostrar()
{
	//declaracion variables
	let edad;
	
	//toma datos
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	//clausula if
	if(edad<13 || edad >17)
	{
		alert("Usted no es un adolescente");
	}	
		//tomo la edad  
	//alert("ok");

}//FIN DE LA FUNCIÓN