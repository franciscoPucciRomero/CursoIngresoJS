/*Ejercicio 7 IF
Francisco Pucci Romero
Divicion C

Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",#
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{	
	//declaracion variables
	let edad;
	let estadoCivil;
	// let mensajeSalida;

	//toma datos
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	estadoCivil=document.getElementById("estadoCivil").value;
	/*  posibles entradas
	Soltero
	Casado
	Divorciado
	*/

	//clausula if
	if(edad<18 && estadoCivil!="Soltero" )
	{
		alert("Es muy pequeño para NO ser soltero.");
	}

	//tomo la edad  
	//alert("ok");
	
}//FIN DE LA FUNCIÓN