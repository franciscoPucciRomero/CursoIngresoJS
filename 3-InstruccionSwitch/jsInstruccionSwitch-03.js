/*
Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"*/

function mostrar()
{
	//tomo el mes
	//var mesDelAño =txtIdMes.value;
	//alert(mesDelAño);

	let mesDelAño;
	let mensajeSalida;

	mesDelAño=document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Febrero" :
		{
			mensajeSalida=" Este mes no tiene más de 29 días.";
			break;
		}
		default:
		{
			mensajeSalida="Este mes tiene 30 o más días";
		}
	}
	alert(mensajeSalida);


}//FIN DE LA FUNCIÓN