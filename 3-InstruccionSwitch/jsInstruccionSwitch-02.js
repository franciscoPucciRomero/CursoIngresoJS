/*

Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/
function mostrar()
{
	/*//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);*/

	let mesDelAño;
	let mensajeSalida;

	mesDelAño=document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{	//verano
		case"Diciembre":
		case"Enero":
		case"Febrero":
		case"Marzo":
		{
			mensajeSalida="Ya pasamos el frio, ahora calor!!!.";
			break;
		}
		//otonio//no tengo enie jej
		case"Abril":
		case"Mayo":
		{
			mensajeSalida="Falta para el invierno.";
			break;
		}
		//invierno
		case"Junio":
		case"Julio":
		case"Agosto":
		case"Septiembre":
		{
			mensajeSalida="Abrigate que hace frio";
			break;
		}
		//primavera
		case"Octubre":
		case"Noviembre":
		{
			mensajeSalida="Ya pasamos el frio, ahora calor!!!.";
			break;
		}
	}
alert(mensajeSalida)




}//FIN DE LA FUNCIÓN