/*Ejercicio 6 IF
Francisco Pucci Romero
Divicion C

Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/
function mostrar()
{	
	//declaracion variables
	let edad;
	
	//toma datos
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	//clausula if
	if(edad>12)
	{	
		if(edad<18)
		{
			alert("Ustes es adolescente");
		}
		else
		{
			alert("Usted es mayor de edad");
		}
	}
	else
	{
		alert("Ustede es un niño");
	}
	



	/*
	if(edad>17)
	{
		alert("Usted es mayor de edad");
	}
	else if(edad>12 && edad<18)
	{
		alert("Ustes es adolescente");
	}
	else
	{
		alert("Ustede es un niño");
	}
	*/
	//tomo la edad  
	//alert("ok");

}//FIN DE LA FUNCIÓN