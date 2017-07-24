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
    var cantidad;
    var empresa;
    var precio=35;
    var preciofinal;
    var impuesto;
    var impuestototal=0;

cantidad=document.getElementById('Cantidad').value;
cantidad=parseInt(cantidad);
empresa=document.getElementById('Marca').value;
     
  
if (cantidad >= 1){
            if(cantidad >= 6){
        preciofinal=(precio * cantidad) * .50;
        console.log ('Compra 6 lámparas o más, tiene descuento del 50%: $'+preciofinal);
        }
        else if(cantidad == 5 && empresa == 'ArgentinaLuz'){
        preciofinal=(precio * cantidad) * .60;
        console.log ('Compra 5 lámparas de Argentina Luz, tiene un descuento del 40%: $'+preciofinal);
        }
        else if(cantidad == 5 && empresa !== 'ArgentinaLuz'){
        preciofinal=(precio * cantidad) * .70;
        console.log ('Compra 5 lámparas que no son de Argentina Luz, tiene un descuento del 30%: '+preciofinal);
        }
        else if(cantidad == 4 && empresa == 'ArgentinaLuz' || cantidad == 4 && empresa == 'FelipeLamparas'){
        preciofinal=(precio * cantidad) * .75;
        console.log ('Compra 4 lámparas de Argentina Luz o de Felipe Lámparas, tiene un descuento del 25%: $'+preciofinal);       
        }
        else if(cantidad == 4 &&!(empresa == 'ArgentinaLuz'|| empresa == 'FelipeLamparas')){
        preciofinal=(precio * cantidad) *.80;
        console.log ('Compra 4 lámparas con un descuento del 20%: $'+preciofinal);
        }
        else if(cantidad == 3 && empresa == 'ArgentinaLuz'){
        preciofinal=(precio * cantidad) *.85;
        console.log ('Compra 3 lámparas de Argentina Luz, tiene un descuento del 15%: $'+preciofinal);
        }
        else if(cantidad == 3 && empresa == 'FelipeLamparas'){
        preciofinal=(precio * cantidad) *.90;
        console.log ('Compra 5 lámparas de Felipe Lámparas, tiene un descuento del 10%: $'+preciofinal);
        }
        else{
        preciofinal=precio * cantidad    
   
        }
}
else{
    alert('ingrese un número mayor a 1')
}
    if(preciofinal>120){
        impuesto= preciofinal * .10;
        impuestototal=Math.floor(preciofinal+impuesto);

        console.log('Usted pago $'+impuesto+' de IIBB');
        console.log('El precio Final con impuesto incluido es $' +tot_impuesto);
    }
}    
