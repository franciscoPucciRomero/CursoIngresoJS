/*Ejercicio  IF
Francisco Pucci Romero
Divicion C

Enunciado:
Al ingresar una edad debemos informar solo si la persona es mayor de edad
*/
function mostrar()
{	//declaracion variables
	let edad;

	//toma datos
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	//clausula if
	if(edad>17)
	{
	alert("Usted es mayor de edad");
	}
	//tomo la edad  
	//alert("ok");
	
}//FIN DE LA FUNCIÓN