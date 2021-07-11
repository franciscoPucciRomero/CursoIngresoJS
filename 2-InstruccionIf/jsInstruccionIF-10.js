function mostrar()
{
	let numeroRandom;

	numeroRandom=Math.floor(Math.random() * 11);

	if(numeroRandom>=9)
	{
		alert("Su nota es "+numeroRandom+". EXCELENTE")
	}
	else if(numeroRandom<9 && numeroRandom>=4)
	{
		alert("Su nota es "+numeroRandom+". APROBÓ")
	}
	else
	{
		alert("Su nota es "+numeroRandom+". Vamos, la proxima se puede")
	}
	
	
	//Genero el número RANDOM entre 1 y 10 
	//alert("ok");

}//FIN DE LA FUNCIÓN