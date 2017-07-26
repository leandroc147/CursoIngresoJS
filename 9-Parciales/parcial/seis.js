function Mostrar()
{
var ventas;
var contador = 0; //contador porque hay que contar los 24 días
var importe_max;
var importe_min;
var bandera = true;



//ventas = prompt('ingresar el importe de las ventas');
    //if(ventas > 0){

        while(contador <24){
            ventas = prompt('Importe del día');
            contador++
            
            while(ventas<0){
                ventas = prompt('ingresar número mayor a 0');
            }
             if(bandera){
             bandera = false;
            importe_max = ventas;
            importe_min = ventas;
            }
            else{
                
            }

            if(ventas>importe_max){
                importe_max=ventas;

            }
            /*ventas = prompt('Importe día 2');
            ventas = prompt('Importe día 3');*/

                if(ventas<importe_min)
			{
				importe_min=ventas;
			}
			   else if(ventas>importe_max)
			{
				    importe_max=ventas;
            }

    }
console.log('importe máximo '+importe_max+' .Importe mínimo '+importe_min);
 

}

   // else{
   //     ventas = prompt('ingresar número mayor a 0');
   // }

