/*

Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/
function mostrar()
{
/*	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);*/

let destinoIngresado;
destinoIngresado=document.getElementById("txtIdDestino").value;

switch(destinoIngresado)
{
	case "Bariloche" :
	{
		alert("Se encuentra al Sur");//oeste???
		break;
	}
	case "Cataratas"://iguazo????
	{
		alert("Se encuentra al Norte");
		break;
	}
	case "Mar del plata" :
	{
		alert("se encuentra al Oeste");
		break;
	}
	case "Ushuaia" :
	{
		alert("Se encuentra al Sur");
		break;
	}
}

}//FIN DE LA FUNCIÓN