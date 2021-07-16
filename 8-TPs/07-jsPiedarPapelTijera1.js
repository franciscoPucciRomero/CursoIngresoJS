/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
let mensajeSalida;

function comenzar()
{

    //asigancion numero random
    eleccionMaquina=Math.floor(Math.random() * 4)+1;


}//FIN DE LA FUNCIÓN
function piedra()
{ 
    if (numeroRandom==1)
    {
        mensajeSalida="empate";
    }
    else if(numeroRandom==2)
    {
        mensajeSalida="perdedor";
    }
    else
    {
        mensajeSalida="ganador";
    }	
alert("piedra");
alert(mensajeSalida);
}//FIN DE LA FUNCIÓN
function papel()
{ 
    if (numeroRandom==1)
    {
        mensajeSalida="ganador";
    }
    else if(numeroRandom==2)
    {
        mensajeSalida="empate";
    }
    else
    {
        mensajeSalida="perdedor";
    }
    alert(mensajeSalida);
}//FIN DE LA FUNCIÓN
function tijera()
{ 
    if (numeroRandom==1)
    {
        mensajeSalida="perdedor";
    }
    else if(numeroRandom==2)
    {
        mensajeSalida="ganador";
    }
    else
    {
        mensajeSalida="ganador";
    }
	alert(mensajeSalida);

}
//FIN DE LA FUNCIÓN