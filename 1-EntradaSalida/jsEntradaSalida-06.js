/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{	let numeroUno;
	let numeroDos;
	let suma;
	let mensajeSalida;

	//
	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;

	//aprox
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	//suma
	suma=numeroDos+numeroUno

	//
	mensajeSalida="La suma de los dos numeros es " + suma

	//
	alert(mensajeSalida)



	//txtIdNumeroUno
	//txtIdNumeroDos



}

