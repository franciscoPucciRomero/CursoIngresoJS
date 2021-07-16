/*Ejercicio 8 IF
Francisco Pucci Romero
Divicion C

Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{	//declaracion variables
	let edad;
	let estadoCivil;
	let mensajeSalida;

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
	if(edad>17 && estadoCivil=="Soltero")
	{
		mensajeSalida="Es soltero y no es menor";
		//salida
		alert(mensajeSalida);
	}

	//tomo la edad  
	//alert("ok");
	
}//FIN DE LA FUNCIÓN