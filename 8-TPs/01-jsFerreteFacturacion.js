/*1.
Trabajo Practico 1
Francisco Pucci Romero
Divicion C

Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   //declaraciones
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let mensajeSalida;
    
    //asignacion
    precioUno=document.getElementById("txtIdPrecioUno").value;
    precioUno=parseFloat(precioUno);

    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioDos=parseFloat(precioDos);

    precioTres=document.getElementById("txtIdPrecioTres").value;
    precioTres=parseFloat(precioTres);

    //suma
    suma=precioTres+precioUno+precioDos;

    //salida
    mensajeSalida="El resultado de la suma es: " + suma;

    alert(mensajeSalida);
    
    //txtIdPrecioUno
    //txtIdPrecioDos
	//txtIdPrecioTres
}
function Promedio () 
{   //declaraciones
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let promedio;
    let mensajeSalida;
    
    //asignacion
    precioUno=document.getElementById("txtIdPrecioUno").value;
    precioUno=parseFloat(precioUno);

    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioDos=parseFloat(precioDos);

    precioTres=document.getElementById("txtIdPrecioTres").value;
    precioTres=parseFloat(precioTres);

    //suma y promedio
    suma=precioTres+precioUno+precioDos;
    promedio=suma/3;

    //salida
    mensajeSalida="El promedio de los precios es : " + promedio;

    alert(mensajeSalida);	
}
function PrecioFinal () 
{   //declaraciones
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let iva;
    let precioFinal;
    let mensajeSalida;
    
    //asignacion
    precioUno=document.getElementById("txtIdPrecioUno").value;
    precioUno=parseFloat(precioUno);

    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioDos=parseFloat(precioDos);

    precioTres=document.getElementById("txtIdPrecioTres").value;
    precioTres=parseFloat(precioTres);

    //suma + impuestos
    suma=precioTres+precioUno+precioDos;
    iva=((suma/100)*21);
    precioFinal=suma+iva;



    //salida
    mensajeSalida="El precio final es: " + precioFinal;

    alert(mensajeSalida);	
}