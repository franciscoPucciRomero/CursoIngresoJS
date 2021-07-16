/*4.	
Trabajo Practico 4
Francisco Pucci Romero
Divicion C

Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{  
     //declaracion variables
    let cantidadDeLamparas;
    let marcaLamparas;
    let porcentajeDescuento;
    let precioDescuento;
    let ingresosBrutos;
    let precioMasIngresosBrutos;
    let mensajeSalida;
    let precioBruto;
    let descuento;
    
    porcentajeDescuento=0;

    //toma datos
    cantidadDeLamparas=document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas=parseInt(cantidadDeLamparas);

    marcaLamparas=document.getElementById("Marca").value;
    /*posibles marcas
    ArgentinaLuz    
    FelipeLamparas
    JeLuz
    HazIluminacion
    Osram
    */
    //alert(marcaLamparas);

    //clausula if ---aqui definimos cuanto descuento se aplica segun el enunciado
    if(cantidadDeLamparas>5)//punto A
    {
        porcentajeDescuento=50;
    }
    else
    {
        if(cantidadDeLamparas==5)//punto B
        {
            if(marcaLamparas=="ArgentinaLuz")
            {
                porcentajeDescuento=40;
            }
            else
            {
                porcentajeDescuento=30;
            }
        }
        else
        {
            if(cantidadDeLamparas==4)//punto C
            {
                if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas")
                {
                    porcentajeDescuento=25;
                }
                else
                {
                    porcentajeDescuento=20;
                }
            }
            else
            {
                if(cantidadDeLamparas==3)//punto D
                {
                    if(marcaLamparas=="ArgentinaLuz")
                    {
                        porcentajeDescuento=15;
                    }
                    else if(marcaLamparas=="FelipeLamparas")
                    {
                        porcentajeDescuento=10;
                    }
                    else
                    {
                        porcentajeDescuento=5;
                    }
                }
               /* else //sin descuento en realidad no necesito esta linea si declaro antes el decuento como 0
                {
                    //porcentajeDescuento=0;
                }*/
            }
        }
    }

//aplicacion descuento
precioBruto=cantidadDeLamparas*35;
descuento=((precioBruto)/100)*porcentajeDescuento;
precioDescuento=precioBruto-descuento;

//aplicacion impuesto 
if(precioDescuento>120)
{
    //calculo impuesto
    ingresosBrutos=(precioDescuento/100)*10;
    precioMasIngresosBrutos=precioDescuento+ingresosBrutos;

    //concatenacion mensaje
    mensajeSalida=precioMasIngresosBrutos+" IIBB Usted pago "+ingresosBrutos;
}
else
{   //sin impuesto
    mensajeSalida=precioDescuento;
}

//salida
document.getElementById("txtIdprecioDescuento").value=mensajeSalida; 
}