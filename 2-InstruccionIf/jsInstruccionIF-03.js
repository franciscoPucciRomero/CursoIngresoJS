/*Ejercicio 3 IF
Francisco Pucci Romero
Divicion C

Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
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
		alert("usted es mayor de edad");
	}
	else//if(edad<18)
	{
		alert("ustede es menor de edad");
	}
	//tomo la edad  
	//alert("ok");

}//FIN DE LA FUNCIÓN