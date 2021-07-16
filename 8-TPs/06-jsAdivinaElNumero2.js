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
var mensajeSalida;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100  ---parseo
	numeroSecreto=Math.floor(Math.random() * 101)+1;
	numeroSecreto=parseInt(numeroSecreto);

	//inicio intentos
	contadorIntentos=0;

	//salida 
	alert("comienza el juego");//no lo pidieron

	//alert(numeroSecreto);
}

function verificar()
{	
	//toma datos
	numeroIngresado=document.getElementById("txtIdNumero").value;
	numeroIngresado=parseInt(numeroIngresado);

	//aumento contador ysalida del mismo
	contadorIntentos+=1;
	document.getElementById("txtIdIntentos").value=contadorIntentos;

	//ganador y salida

	if(numeroIngresado>100 || numeroIngresado<1)//input invalido
	{
	  mensajeSalida="numero no valido";
	}
	else
	{
	  if(numeroIngresado==numeroSecreto)
	  {
		if(contadorIntentos==1)
		{
			mensajeSalida="usted es un Psíquico";
		}
		else
		{
			if(contadorIntentos==2)
			{
				mensajeSalida="excelente percepción";
			}
			else
			{
				if(contadorIntentos==3)
				{
					mensajeSalida="Esto es suerte";
				}
				else
				{
					if (contadorIntentos==4)
					{
						mensajeSalida="Excelente técnica";
					}
					else
					{
						if(contadorIntentos==5)
						{
							mensajeSalida="usted está en la media";
						}
						else
						{
							if(contadorIntentos>5 && contadorIntentos<11)
							{
								mensajeSalida="falta técnica";
							}
							else
							{
								mensajeSalida="afortunado en el amor!!";
							}
						}
					
					}
				}
			}
		}
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
if(numeroIngresado==numeroSecreto)
{	
  if(contadorIntentos==1)
  {	//asignacion mensaje 
	  mensajeSalida="usted es un Psíquico";
  }
  else if (contadorIntentos==2)
  {
	  mensajeSalida="excelente percepción";
  }
  else if (contadorIntentos==3)
  {
	  mensajeSalida="Esto es suerte";
  }
  else if (contadorIntentos==4)
  {
	  mensajeSalida="Excelente técnica";
  }
  else if (contadorIntentos==5)
  {
	  mensajeSalida="usted está en la media";
  }
  else if (contadorIntentos>5 && contadorIntentos<11)
  {
	  mensajeSalida="falta técnica";
  }
  else
  {
	  mensajeSalida="afortunado en el amor!!";
  }	
  //alert(mensajeSalida)
  /*para reinicio automatico
  //contador=0
  //numeroSecreto=Math.floor(Math.random() * 101)+1;
  //numeroSecreto=parseInt(numeroSecreto);
  */
//numero no valido
/*else if(numeroIngresado>100 || numeroIngresado<1)//no lo pidieron
{
  mensaje="numero no valido";
}
//tibio caliente frio
else if(numeroIngresado>numeroSecreto)
{
  mensajeSalida="se pasó…";
 // alert(mensajeSalida);
}
  else 
{
  mensajeSalida= "falta…";
  //alert(mensajeSalida);
}*/
	
