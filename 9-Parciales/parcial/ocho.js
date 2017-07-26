function Mostrar()
{
    var contador=0;
	var acumulador=0;
	var respuesta='si';
	var promedio;
    var num;
    var nummax;
    var nummin;
    var primera = true;
    var num_par = 0;
    var sum_total;

while(respuesta=="si")
{
	contador ++;
	num=prompt("Escriba un número ");
	num=parseInt(num);

    while(isNaN(num)){
			num = prompt('Ingrese Solo Numeros');
			num = parseInt(num);
            }
            if(num <0){
                num = prompt('Ingrese solo numeros positivos');
			    num = parseInt(num);
            }

	acumulador+=num;
	
	respuesta=prompt("Quiere agregar más numeros?");
          /*  if(primera)
			{
				nummax=num;
				nummin=num;
				primera=false;
			}
			else
			{
*/			
			if(num<nummin)
			{
				nummin=num;
			}
			if(num>nummax)
			{
				nummax=num;
			}
            if(num%2==0){
			num_par++;
		    }
                if (num>0){
			    sum_total = contador ++;
			   // c_pos = c_pos + 1;
            }

    promedio=acumulador/contador;
        }
            
    }
        document.write('Número máximo es: '+nummax+'. El número mínimo es: '+nummin+' .La suma de todos los números es: '+sum_total+' .El promedio es de: '+promedio+' .La cantidad de números pares es de: '+num_par).value;
