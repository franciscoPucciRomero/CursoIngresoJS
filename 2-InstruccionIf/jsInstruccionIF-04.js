/*Ejercicio 4 IF
Francisco Pucci Romero
Divicion C

Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/
function mostrar()
{ 
	//declaracion variables
	let edad;
	
	//toma datos
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	/*//clausula if
	if(edad>12 && edad<18)
	{
		alert("Usted es un adolescente");

	}*/
	if(edad>12)
	{
		if(edad<18)
		{
			alert("Usted es un adolescente");
		}
	}
	//tomo la edad  
	//alert("ok");
}//FIN DE LA FUNCIÓN