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
  //generar numero
	numeroSecreto=Math.floor(Math.random() * 101)+1;
  numeroSecreto=parseInt(numeroSecreto);

  //inicio contador
  contadorIntentos=0;
  
  //salida opcional
  alert("comienza el juego");//no lo pidieron
  //Genero el número RANDOM entre 1 y 100
	 
	//alert(numeroSecreto );
}

function verificar()
{ 
  //toma datos y parseo
  numeroIngresado=document.getElementById("txtIdNumero").value;
  numeroIngresado=parseInt(numeroIngresado);

  //aumento contador y salida del mismo
  contadorIntentos+=1;
  document.getElementById("txtIdIntentos").value=contadorIntentos;

if(numeroIngresado>100 || numeroIngresado<1)//input invalido
{
  mensajeSalida="numero no valido";
}
else
{
  if(numeroIngresado==numeroSecreto)
  {
    mensajeSalida="Usted es un ganador!!! y en solo "+ contadorIntentos +" intentos";
  }
  else
  {
    if(numeroIngresado>numeroSecreto)
    {
      mensajeSalida="se pasó…";
    }
    else//menor
    {
      mensajeSalida="falta…";
    }
  }
}
  //salida
alert(mensajeSalida);
}
/*
//ganador
  if(numeroIngresado==numeroSecreto)
  {
    mensajeSalida="Usted es un ganador!!! y en solo "+ contadorIntentos +" intentos";
    
    //contador=0
    //numeroSecreto=Math.floor(Math.random() * 101);
  }

//input invalido
  else if(numeroIngresado>100 || numeroIngresado<1)//no lo pidieron
  {
	mensajeSalida="numero no valido";
  }

//tibio caliente frio
  else if(numeroIngresado>numeroSecreto)
  {
    	mensajeSalida="se pasó…";
  }
	else
  {
    	mensajeSalida="falta…";
  }*/