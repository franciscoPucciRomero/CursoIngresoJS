/*4.	Para el departamento de iluminación:
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
    let cantidadDeLamparas;
    let marcaLamparas;
    let precioDescuento;
    let ingresosBrutos;
    let precioMasIngresosBrutos;
    let mensajeSalida;

    //
    cantidadDeLamparas=document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas=parseInt(cantidadDeLamparas);

    marcaLamparas=document.getElementById("Marca").value;
    //alert(marcaLamparas);

    //punto A
    if(cantidadDeLamparas>=6)
    {   
        precioDescuento=(cantidadDeLamparas*35)-(((cantidadDeLamparas*35)/100)*50);
        
        if(precioDescuento>120)
        {
            ingresosBrutos=(precioDescuento/100)*10;
            precioMasIngresosBrutos=precioDescuento+ingresosBrutos;
    
            mensajeSalida=precioMasIngresosBrutos+" IIBB Usted pago "+ingresosBrutos;
    
            document.getElementById("txtIdprecioDescuento").value=mensajeSalida;
        }
        else
        {
            document.getElementById("txtIdprecioDescuento").value=precioDescuento;
        }
    }

    // punto B
    else if(cantidadDeLamparas==5 && marcaLamparas=="ArgentinaLuz")
    {
        precioDescuento=(cantidadDeLamparas*35)-(((cantidadDeLamparas*35)/100)*40);
        
        if(precioDescuento>120)
        {
            ingresosBrutos=(precioDescuento/100)*10;
            precioMasIngresosBrutos=precioDescuento+ingresosBrutos;
    
            mensajeSalida=precioMasIngresosBrutos+" IIBB Usted pago "+ingresosBrutos;
    
            document.getElementById("txtIdprecioDescuento").value=mensajeSalida;
        }
        else
        {
            document.getElementById("txtIdprecioDescuento").value=precioDescuento;
        }
    }
    else if(cantidadDeLamparas==5)
    {
        precioDescuento=(cantidadDeLamparas*35)-(((cantidadDeLamparas*35)/100)*30);
        
        if(precioDescuento>120)
        {
            ingresosBrutos=(precioDescuento/100)*10;
            precioMasIngresosBrutos=precioDescuento+ingresosBrutos;
    
            mensajeSalida=precioMasIngresosBrutos+" IIBB Usted pago "+ingresosBrutos;
    
            document.getElementById("txtIdprecioDescuento").value=mensajeSalida;
        }
        else
        {
            document.getElementById("txtIdprecioDescuento").value=precioDescuento;
        }
    }

    // punto C
    else if(cantidadDeLamparas==4 && marcaLamparas=="ArgentinaLuz")
 	{
        precioDescuento=(cantidadDeLamparas*35)-(((cantidadDeLamparas*35)/100)*25);
        
        if(precioDescuento>120)
        {
            ingresosBrutos=(precioDescuento/100)*10;
            precioMasIngresosBrutos=precioDescuento+ingresosBrutos;
    
            mensajeSalida=precioMasIngresosBrutos+" IIBB Usted pago "+ingresosBrutos;
    
            document.getElementById("txtIdprecioDescuento").value=mensajeSalida;
        }
        else
        {
            document.getElementById("txtIdprecioDescuento").value=precioDescuento;
        }
     }
    else if(cantidadDeLamparas==4 && marcaLamparas=="FelipeLamparas")
     {
        precioDescuento=(cantidadDeLamparas*35)-(((cantidadDeLamparas*35)/100)*25);
       
        if(precioDescuento>120)
        {
            ingresosBrutos=(precioDescuento/100)*10;
            precioMasIngresosBrutos=precioDescuento+ingresosBrutos;
    
            mensajeSalida=precioMasIngresosBrutos+" IIBB Usted pago "+ingresosBrutos;
    
            document.getElementById("txtIdprecioDescuento").value=mensajeSalida;
        }
        else
        {
            document.getElementById("txtIdprecioDescuento").value=precioDescuento;
        }
     }
     else if(cantidadDeLamparas==4)
     {
        precioDescuento=(cantidadDeLamparas*35)-(((cantidadDeLamparas*35)/100)*20);
        
        if(precioDescuento>120)
        {
            ingresosBrutos=(precioDescuento/100)*10;
            precioMasIngresosBrutos=precioDescuento+ingresosBrutos;
    
            mensajeSalida=precioMasIngresosBrutos+" IIBB Usted pago "+ingresosBrutos;
    
            document.getElementById("txtIdprecioDescuento").value=mensajeSalida;
        }
        else
        {
            document.getElementById("txtIdprecioDescuento").value=precioDescuento;
        }
     }

     //punto D
     else if (cantidadDeLamparas==3 && marcaLamparas=="ArgentinaLuz")
    {
        precioDescuento=(cantidadDeLamparas*35)-(((cantidadDeLamparas*35)/100)*15);
        
        if(precioDescuento>120)
        {
            ingresosBrutos=(precioDescuento/100)*10;
            precioMasIngresosBrutos=precioDescuento+ingresosBrutos;
    
            mensajeSalida=precioMasIngresosBrutos+" IIBB Usted pago "+ingresosBrutos;
    
            document.getElementById("txtIdprecioDescuento").value=mensajeSalida;
        }
        else
        {
            document.getElementById("txtIdprecioDescuento").value=precioDescuento;
        }
    }
    else if (cantidadDeLamparas==3 && marcaLamparas=="FelipeLamparas")
    {
        precioDescuento=(cantidadDeLamparas*35)-(((cantidadDeLamparas*35)/100)*10);
       
        if(precioDescuento>120)
        {
            ingresosBrutos=(precioDescuento/100)*10;
            precioMasIngresosBrutos=precioDescuento+ingresosBrutos;
    
            mensajeSalida=precioMasIngresosBrutos+" IIBB Usted pago "+ingresosBrutos;
    
            document.getElementById("txtIdprecioDescuento").value=mensajeSalida;
        }
        else
        {
            document.getElementById("txtIdprecioDescuento").value=precioDescuento;
        }
    }
    else if (cantidadDeLamparas==3)
    {
        precioDescuento=(cantidadDeLamparas*35)-(((cantidadDeLamparas*35)/100)*5);
        
        if(precioDescuento>120)
        {
            ingresosBrutos=(precioDescuento/100)*10;
            precioMasIngresosBrutos=precioDescuento+ingresosBrutos;
    
            mensajeSalida=precioMasIngresosBrutos+" IIBB Usted pago "+ingresosBrutos;
    
            document.getElementById("txtIdprecioDescuento").value=mensajeSalida;
        }
        else
        {
            document.getElementById("txtIdprecioDescuento").value=precioDescuento;
        }
    }

    //
    else
    {
        precioDescuento=(cantidadDeLamparas*35);
        if(precioDescuento>120)
        {
            ingresosBrutos=(precioDescuento/100)*10;
            precioMasIngresosBrutos=precioDescuento+ingresosBrutos;
    
            mensajeSalida=precioMasIngresosBrutos+" IIBB Usted pago "+ingresosBrutos;
    
            document.getElementById("txtIdprecioDescuento").value=mensajeSalida;
        }
        else
        {
            document.getElementById("txtIdprecioDescuento").value=precioDescuento;
        }
    }

   
/*    if(precioDescuento>120)
    {
        ingresosBrutos=(precioDescuento/100)*10;
        precioMasIngresosBrutos=precioDescuento+ingresosBrutos;

        mensajeSalida=precioMasIngresosBrutos+" IIBB Usted pago "+ingresosBrutos;

        document.getElementById("txtIdprecioDescuento").value=mensajeSalida;
    }
    else
    {
        document.getElementById("txtIdprecioDescuento").value=precioDescuento;
    }
  */ 

     //txtIdprecioDescuento
}
