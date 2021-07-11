/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{	//declaracion variables
	let sueldo;
	let porciento;
	let sueldoAumentado;
	let mensajeSalida;
	let porcentajeUsuario;

	//toma datos
	sueldo=document.getElementById("txtIdSueldo").value;
	sueldo=parseInt(sueldo);
	porcentajeUsuario=prompt("Porfavor ingresar porsentaje", "ingresar porcentaje")

	//ecuacion
	porciento= ((sueldo/100)*porcentajeUsuario);
	sueldoAumentado= sueldo + porciento;

	//salida
	mensajeSalida="RESULTADO "+ sueldoAumentado;



	document.getElementById("txtIdResultado").value=mensajeSalida;

	//alert(mensajeSalida);
}
//txtIdSueldo
//txtIdResultado