/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   
    let temperatuCentigrados;
    let temperaturaFahrenheit;
    let mensajeSalida;

    //
    temperaturaFahrenheit=document.getElementById("txtIdTemperatura").value;
    temperaturaFahrenheit=parseInt(temperaturaFahrenheit);

    //
    temperatuCentigrados=5/9*(temperaturaFahrenheit-32);
   

    //
	mensajeSalida=temperaturaFahrenheit+" Fahrenheit son "+temperatuCentigrados+" centígrados";
    alert(mensajeSalida);
}

function CentigradosFahrenheit () 
{   let temperatuCentigrados;
    let temperaturaFahrenheit;
    let mensajeSalida;

    //
    temperatuCentigrados=document.getElementById("txtIdTemperatura").value;
    temperatuCentigrados=parseInt(temperatuCentigrados);

    //
    temperaturaFahrenheit=(temperatuCentigrados*(5/9))+32;


    //
    mensajeSalida=temperatuCentigrados+" centígrados "+temperaturaFahrenheit+" Fahrenheit";
    alert(mensajeSalida);

	
}
