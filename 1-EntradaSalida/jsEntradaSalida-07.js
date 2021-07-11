/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let ecuacion;
	let resultado;
	let mensajeSalida;

	//
	numeroDos=document.getElementById("txtIdNumeroDos").value;
	numeroUno=document.getElementById("txtIdNumeroUno").value;

	numeroDos=parseInt(numeroDos);
	numeroUno=parseInt(numeroUno);

	//
	ecuacion=numeroUno+numeroDos;

	mensajeSalida="La suma es " + ecuacion;

	alert(mensajeSalida)


	//alert("ok");	
}

function restar()
{	
	let numeroUno;
	let numeroDos;
	let ecuacion;
	let resultado;
	let mensajeSalida;

	//
	numeroDos=document.getElementById("txtIdNumeroDos").value;
	numeroUno=document.getElementById("txtIdNumeroUno").value;

	numeroDos=parseInt(numeroDos);
	numeroUno=parseInt(numeroUno);

	//
	ecuacion=numeroUno-numeroDos;

	mensajeSalida="la Resta es " + ecuacion;

	alert(mensajeSalida)
	
}

function multiplicar()
{ 	
	let numeroUno;
	let numeroDos;
	let ecuacion;
	let resultado;
	let mensajeSalida;

	//
	numeroDos=document.getElementById("txtIdNumeroDos").value;
	numeroUno=document.getElementById("txtIdNumeroUno").value;

	numeroDos=parseInt(numeroDos);
	numeroUno=parseInt(numeroUno);

	//
	ecuacion=numeroUno*numeroDos;

	//
	mensajeSalida="La multiplicacion es " + ecuacion;

	alert(mensajeSalida)
	
}

function dividir()
{	
	let numeroUno;
	let numeroDos;
	let ecuacion;
	let resultado;
	let mensajeSalida;

	//
	numeroDos=document.getElementById("txtIdNumeroDos").value;
	numeroUno=document.getElementById("txtIdNumeroUno").value;

	numeroDos=parseInt(numeroDos);
	numeroUno=parseInt(numeroUno);

	//
	ecuacion=numeroUno/numeroDos;

	mensajeSalida="La divicion es " + ecuacion;

	alert(mensajeSalida)
	
}
//txtIdNumeroUno
//txtIdNumeroDos
