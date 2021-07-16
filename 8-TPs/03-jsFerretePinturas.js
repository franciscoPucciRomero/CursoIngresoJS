/*3.	
Trabajo Practico 3
Francisco Pucci Romero
Divicion C

Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   //delaracion variables
    let temperatuCentigrados;
    let temperaturaFahrenheit;
    let mensajeSalida;

    //asignacion
    temperaturaFahrenheit=document.getElementById("txtIdTemperatura").value;
    temperaturaFahrenheit=parseInt(temperaturaFahrenheit);

    //ecuacion 
    temperatuCentigrados=(5/9)*(temperaturaFahrenheit-32);
   
    //salida
	mensajeSalida=temperaturaFahrenheit+" Fahrenheit son "+temperatuCentigrados+" centígrados";
    alert(mensajeSalida);
}

function CentigradosFahrenheit () 
{   //declaracion variables
    let temperatuCentigrados;
    let temperaturaFahrenheit;
    let mensajeSalida;

    //asignacion
    temperatuCentigrados=document.getElementById("txtIdTemperatura").value;
    temperatuCentigrados=parseInt(temperatuCentigrados);

    //ecuacion
    temperaturaFahrenheit=(temperatuCentigrados*(9/5))+32;

    //salida
    mensajeSalida=temperatuCentigrados+" centígrados "+temperaturaFahrenheit+" Fahrenheit";
    alert(mensajeSalida);
}
