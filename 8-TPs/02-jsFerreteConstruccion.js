/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   let largoDelTerreno;
    let anchoDelTerreno;
    let radioDelTerreno;
    let perimetro;
    let alambreNecesario;
    let mensajeSalida;

    //
    largoDelTerreno=document.getElementById("txtIdLargo").value;
    largoDelTerreno=parseInt(largoDelTerreno);

    anchoDelTerreno=document.getElementById("txtIdAncho").value;
    anchoDelTerreno=parseInt(anchoDelTerreno);

    radioDelTerreno=document.getElementById("txtIdRadio").value;
    radioDelTerreno=parseInt(radioDelTerreno);

    //perimetro
    perimetro=(largoDelTerreno+anchoDelTerreno)+(largoDelTerreno+anchoDelTerreno);
    alambreNecesario=perimetro*3

    //
    mensajeSalida="Se necesita "+ alambreNecesario + " metros de alambre";
    alert(mensajeSalida);



}
function Circulo () 
{ 
    let largoDelTerreno;
    let anchoDelTerreno;
    let radioDelTerreno;
    let circumferencia;
    let alambreNecesario;
    let mensajeSalida;

    //
    largoDelTerreno=document.getElementById("txtIdLargo").value;
    largoDelTerreno=parseInt(largoDelTerreno);

    anchoDelTerreno=document.getElementById("txtIdAncho").value;
    anchoDelTerreno=parseInt(anchoDelTerreno);

    radioDelTerreno=document.getElementById("txtIdRadio").value;
    radioDelTerreno=parseInt(radioDelTerreno);
	
    //
    circumferencia=(3.14*(radioDelTerreno*radioDelTerreno));
    alambreNecesario=circumferencia*3;

    // 
    mensajeSalida="Se necesita "+ alambreNecesario + " metros de alambre";
    alert(mensajeSalida);
}
function Materiales () 
{   let largoDelTerreno;
    let anchoDelTerreno;
    let radioDelTerreno;
    let superficie;
    let cementoNecesario;
    let calNecesaria;
    let mensajeSalida;
    
    //
    largoDelTerreno=document.getElementById("txtIdLargo").value;
    largoDelTerreno=parseInt(largoDelTerreno);

    anchoDelTerreno=document.getElementById("txtIdAncho").value;
    anchoDelTerreno=parseInt(anchoDelTerreno);

    radioDelTerreno=document.getElementById("txtIdRadio").value;
    radioDelTerreno=parseInt(radioDelTerreno);
	
    //
    superficie=anchoDelTerreno*largoDelTerreno;
    calNecesaria=superficie*3;
    cementoNecesario=superficie*2;


    //
    mensajeSalida="Se necesita "+cementoNecesario+" bolsas de cemento y "+calNecesaria+" de cal";
    alert(mensajeSalida);
}