/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{	let divisor;
	let dividendo;
	let resto;
	let mensajeSalida;

	//
	divisor=document.getElementById("txtIdNumeroDivisor").value;
	dividendo=document.getElementById("txtIdNumeroDividendo").value;

	divisor=parseInt(divisor);
	dividendo=parseInt(dividendo);

	//
	resto=dividendo%divisor;

	//
	mensajeSalida="El resto es "+ resto

	//
	alert(mensajeSalida)


	//txtIdNumeroDivisor
	//txtIdNumeroDividendo
	//alert("ok");
}
