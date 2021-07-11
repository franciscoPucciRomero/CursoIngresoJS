/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor(Math.random() * 101);
	contadorIntentos=0;
	
	alert("comienza el juego");
	

}

function verificar()
{
	numeroIngresado=document.getElementById("txtIdNumero").value;
	contadorIntentos+=1

  if(numeroIngresado==numeroSecreto)
  {		
	
	  if(contadorIntentos==1)
	{
		mensajeSalida="usted es un Psíquico";
		alert(mensajeSalida);
	}

	else if (contadorIntentos==2)
	{
		mensajeSalida="excelente percepción";
		alert(mensajeSalida);
	}
	else if (contadorIntentos==3)
	{
		mensajeSalida="Esto es suerte";
		alert(mensajeSalida);
	}
	else if (contadorIntentos==4)
	{
		mensajeSalida="Excelente técnica";
		alert(mensajeSalida);
	}
	else if (contadorIntentos==5)
	{
		mensajeSalida="usted está en la media";
		alert(mensajeSalida);
	}
	else if (contadorIntentos>=6 && contadorIntentos<10)
	{
		mensajeSalida="falta técnica";
		alert(mensajeSalida);
	}
	else
	{
		mensajeSalida="afortunado en el amor!!";
		alert(mensajeSalida);
	}	

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
	
