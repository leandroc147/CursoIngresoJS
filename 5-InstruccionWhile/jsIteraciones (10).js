function Mostrar()
{

var numero;
	var sum_neg = 0; // acumulador de Negativos
	var sum_pos = 0; //acumulador de positivos
	var c_pos = 0;   // contador positivos
	var c_neg = 0;   //contador negativos
	var c_ceros = 0; //contador ceros
	var c_pares = 0; //contador de nros pares
	var pro_pos = 0; //promedio positivos
	var pro_neg = 0; //promedio negativos
	var dif_pos_neg = 0; //para diferencia de positivos y negstivos
	var respuesta = true; // para el primer while

	while (respuesta) {
		// pido ingresar numeros
		numero = prompt('Ingrese un Numero');
		numero = parseInt(numero);
		// validacion de entrada de numeros
		while(isNaN(numero)){
			numero = prompt('Ingrese Solo Numeros');
			numero = parseInt(numero);
		}
		// sumo y cuento los negativos
		if (numero<0){
			sum_neg = sum_neg + numero;
			c_neg = c_neg + 1;
		}
		// sumo y cuento los positivos
		else if (numero>0){
			sum_pos = sum_pos + numero;
			c_pos = c_pos + 1;
		}
		// cuento los Ceros
		else if (numero == 0){
			c_ceros = c_ceros + 1;
		}
		//verifico si el numero es par o impar y le sumo 1 a su contador
		if(numero%2==0){
			c_pares++;
		}
		
		// pregunto si quiere seguir ingresando datos
		respuesta = confirm('¿ Continuar ?');
	}

	// proceso informacion e informo

	pro_pos = sum_pos / c_pos;
	pro_neg = sum_neg / c_neg;

	dif_pos_neg = sum_pos + sum_neg;
	// Muestro  en pantalla toda la informacion.
	// para que funcione el agregar en el html <p id="resultados"></p>
	document.getElementById("resultados").innerHTML = "La suma de Negativos es: "+sum_neg+"</br> La suma de positivos es: "+sum_pos+" </br> Cantidad Nros Positivos: "+c_pos+" </br> Cantidad Negativos: "+c_neg+"</br> Cantidad de Ceros: "+c_ceros+" </br> Cantidad de Pares: "+c_pares+"</br> Promedio de Positivos: "+pro_pos+"</br> Promedio de Negativos "+pro_neg+"</br> Positivos - Negativos: "+dif_pos_neg;


}

//declarar contadores y variables 

	/*var contador=0;
	var contadorneg=0;
	var contadorpos=0;
	var contadorcero=0;
	var num;
	var respuesta=true;
	var pares=0;
	var acumneg=0;
	var acumpos=0;


	while(respuesta!="no")
	{
		num=prompt("Escriba un número ");
		num=parseInt(num);

			if(num<0)
			{
				acumneg+=num;
				contadorneg++;
			}
			else if(num >0)
			{
				acumpos+=num;
				contadorpos++;
			}
	
			else if (num==0)
			{
				contadorcero++;
			}


}



*/
}//FIN DE LA FUNCIÓN