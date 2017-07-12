function Mostrar()
{

	var numero;
	var sum_neg = 0; 
	var sum_pos = 0; 
	var c_pos = 0;   
	var c_neg = 0;   
	var c_ceros = 0; 
	var c_pares = 0; 
	var pro_pos = 0; 
	var pro_neg = 0; 
	var dif_pos_neg = 0;
	var respuesta = true; 

	while (respuesta) {
		
		numero = prompt('Ingrese un Numero');
		numero = parseInt(numero);
		
		while(isNaN(numero)){
			numero = prompt('Ingrese Solo Numeros');
			numero = parseInt(numero);
		}
		
		if (numero<0){
			sum_neg = sum_neg + numero;
			c_neg = c_neg + 1;
		}
	
		else if (numero>0){
			sum_pos = sum_pos + numero;
			c_pos = c_pos + 1;
		}
	
		else if (numero == 0){
			c_ceros = c_ceros + 1;
		}
	
		if(numero%2==0){
			c_pares++;
		}
		
		
		respuesta = confirm('¿ Quiere continuar ?');
}

	pro_pos = sum_pos / c_pos;
	pro_neg = sum_neg / c_neg;

	dif_pos_neg = sum_pos - sum_neg;
		if(dif_pos_neg<0){
			dif_pos_neg = dif_pos_neg*-1;
	}
		if(c_neg>0)
		{
			sum_neg=sum_neg/c_neg
		}
		else
		{
			sum_neg="no hay negativos";
		}


	//document.getElementById
	Document.write("resultados").innerHTML= ("La suma de Negativos es: "+sum_neg+"</br> La suma de positivos es: "+sum_pos+" </br> Cantidad Nros Positivos: "+c_pos+" </br> Cantidad Negativos: "+c_neg+"</br> Cantidad de Ceros: "+c_ceros+" </br> Cantidad de Pares: "+c_pares+"</br> Promedio de Positivos: "+pro_pos+"</br> Promedio de Negativos "+pro_neg+"</br> Positivos - Negativos: "+dif_pos_neg);


}

//declarar contadores y variables 
/*
	var contador=0;
	var contadorpos=0;
	var contadorneg=0;
	var contadorcero=0;
	var num;
	var respuesta=true;
	var pares=0;
	var acumneg=0;
	var acumpos=0;
	var prom_pos=0;
	var prom_neg=0;

	while(respuesta == true)
	{
		num=prompt("Escriba un número ");
		num=parseInt(num);

		while(isNaN(numero)){
			numero = prompt('Ingrese Solo Numeros');
			numero = parseInt(numero);

			if(num<0)
			{
				acumneg+=num
			}
			else if(num >0)
			{
				acumpos+=num;
				contadorpos++;
				contadorneg++;
			}
	
			else
			{
				contadorcero++;
			}
			if(num%2==0)
			{
				pares++;
			}


}

prompt= acumpos/contadorpos
prompt= acumneg/contadorneg

dif= contadorneg - contadorpos;
	if(dif<0)
	{
		dif= dif*-1;
	}

	if(contadorneg > contadorpos)
	{
		dif=contadorneg - contadorpos;
	}
	else
	{
		dif=contadorpos - contadorneg;
	}

}//FIN DE LA FUNCIÓN*/