function mostrar()
{	
	let edad;
	let estadoCivil;

	//
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	estadoCivil=document.getElementById("estadoCivil").value;

	//
	if(edad<18 && estadoCivil!="Soltero" )
	{
		alert("Es muy pequeño para NO ser soltero.")
	}
	
	//tomo la edad  
	//alert("ok");
	


}//FIN DE LA FUNCIÓN