/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
var mensajeSalida;







function comenzar()
{
	numeroSecreto=Math.floor(Math.random() * 101);
  contadorIntentos=0;
  
  alert("comienza el juego");
  //Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	

}

function verificar()
{
  numeroIngresado=document.getElementById("txtIdNumero").value;
  contadorIntentos+=1

  if(numeroIngresado==numeroSecreto)
  {
    mensajeSalida="Usted es un ganador!!! y en solo "+ contadorIntentos +" intentos";
    

    document.getElementById("txtIdIntentos").value=contadorIntentos;
    
    alert(mensajeSalida)
    //contador=0
    //numeroSecreto=Math.floor(Math.random() * 101);
  }
  else if(numeroIngresado>numeroSecreto)
  {
    mensajeSalida="se pasó…"

    document.getElementById("txtIdIntentos").value=contadorIntentos;

    alert(mensajeSalida);
  }
	else
  {
    mensajeSalida= "falta…"

    document.getElementById("txtIdIntentos").value=contadorIntentos;
    alert(mensajeSalida);

  }
	
}