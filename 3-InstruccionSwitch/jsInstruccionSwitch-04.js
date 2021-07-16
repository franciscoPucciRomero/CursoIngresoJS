/*Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/

function mostrar()
{
	/*//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);*/

	let mesDelAño;
	let cantidadDeDias;
	let mensajeSalida;

	mesDelAño=document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case"Diciembre":
		{
			cantidadDeDias=31;
			break;
		}
		case"Enero":
		{
			cantidadDeDias=31;
			break;
		}
		case"Febrero":
		{
			cantidadDeDias=28;
			break;
		}
		case"Marzo":
		{
			cantidadDeDias=31;
			break;
		}
		case"Abril":
		{
			cantidadDeDias=30;
			break;
		}
		case"Mayo":
		{
			cantidadDeDias=31;
			break;
		}
		case"Junio":
		{
			cantidadDeDias=30;
			break;
		}
		case"Julio":
		{
			cantidadDeDias=31;
			break;
		}
		
		case"Agosto":
		{
			cantidadDeDias=31;
			break;
		}

		case"Septiembre":
		{
			cantidadDeDias=30;
			break;
		}
		case"Octubre":
		{
			cantidadDeDias=31;
			break;
		}
		case"Noviembre":
		{
			cantidadDeDias=30;
			break;
		}
	}
//concatenacion mensaje
mensajeSalida=mesDelAño+" tiene "+cantidadDeDias;

//salida
alert(mensajeSalida);	



}//FIN DE LA FUNCIÓN