/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{	//declaracion variables
	let importe;
	let resultado;
	let porcentaje;
	let mensajeSalida;
	let porcentajeUsuario;

	//entrada datos
	importe=document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);

	porcentajeUsuario=prompt("Porfavor ingresar porsentaje", "ingresar porcentaje");
	porcentajeUsuario=parseInt(porcentajeUsuario)


	//ecuacion
	porcentaje=((importe/100)*porcentajeUsuario);
	resultado=importe-porcentaje;

	//mensaje salida
	mensajeSalida="RESULTADO "+resultado;

	document.getElementById("txtIdResultado").value=mensajeSalida;
	



	//txtIdImporte
	//txtIdResultado
	//alert("ok");
}
