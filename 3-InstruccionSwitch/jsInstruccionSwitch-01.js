/*

Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!." */

function mostrar()
{
	//tomo el mes
	/*var mesDelAño =txtIdMes.value;
	alert(mesDelAño);*/

	//declaracion variables
	let mesDelAño;
	let mensajeSalida;

	//tomo el mes
	mesDelAño=document.getElementById("txtIdMes").value;

	//switch
	switch(mesDelAño)
	{
		case "Enero":
		{
			mensajeSalida="que comiences bien el año!!!.";
			break;
		}
		case "Marzo":
		{
			mensajeSalida="a clases!!!.";
			break;
		}
		case "Julio":
		{
			mensajeSalida="se vienen las vacaciones!!!.";
			break;
		}
		case "Diciembre":
		{
			mensajeSalida="Felices fiesta!!!.";
			break;
		}
	}

//salida
alert(mensajeSalida);

}//FIN DE LA FUNCIÓN