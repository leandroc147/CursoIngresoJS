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
    var cant=0;
    var marcas1="ArgentinaLuz";
    var precio=35;
    var preciofinal;
    var preciodescuento

    /*if(preciofinal=120)
        preciofinal= preciofinal * 1.10
        alert("Usted pagó "+preciofinal+" de IIBB")*/
  

 if(cant>=6)
    {
        precio= precio * -1.50;
         if(preciofinal=120)
        preciofinal= preciofinal * 1.10
        alert("Usted pagó "+preciofinal+" de IIBB")
    }
    else if(cant ==5)
    {
        if(marcas1)
        {
            precio= precio *-1.40;
            preciodescuento=precio
        }
        else
        {
            precio= precio *-1.30;
        }
     }

     if(cant==4)
     {
         if(marcas=="ArgentinaLuz")
         {
             precio= precio *-0.25;
         }                              // else if (marcas ="argluz" || marcas ="FelipeLamparas")
         else if (marcas=="FelipeLamparas")
         {
             precio= precio *-0.25;
         }                             // precio= precio *-1.25;
     }
        else
     {
         precio= precio *-1.20;
     }

     if(cant==3){
         if(marcas="argluz"){
            precio= precio *-1.15;
            }
            else if(marcas= "felipe"){
                precio= precio *-1.10;
            }  
            else
                precio= precio *-1.5;  
      }      

      if(cant<=3)
      {
          precio= precio;
      }

   }

   marcas1=document.getElementById("Marca").value;
   document.getElementById("Cantidad").value= cant;
   document.getElementById("precioDescuento").value= preciodescuento; 

    /* switch (marcas)
    {
        case"argluz":
        if(cant>=6)
        {

        }
    }
*/