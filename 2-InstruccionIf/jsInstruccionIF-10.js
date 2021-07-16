/*Ejercicio 10 IF
Francisco Pucci Romero
Divicion C

Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{	//declaracion variables
	let numeroRandom;
	//let mensajeSalida;
	
	//crear numero aleatorio
	numeroRandom=Math.floor(Math.random() * 11)+1;

	//clausula if 
	if(numeroRandom>8 && numeroRandom<11)
	{	//concatenacion mensaje y salida
		alert("Su nota es "+numeroRandom+". EXCELENTE");
	}
	else if(numeroRandom<9 && numeroRandom>3)
	{
		alert("Su nota es "+numeroRandom+". APROBÓ");
	}
	else
	{
		alert("Su nota es "+numeroRandom+". Vamos, la proxima se puede");
	}

	//Genero el número RANDOM entre 1 y 10 
	//alert("ok");

}//FIN DE LA FUNCIÓN