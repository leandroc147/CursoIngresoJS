function Mostrar()
{

//declarar contadores y variables 

	var contadorneg=0;
	var contadorpos=0;
	var contadorcero=0;
	var num;
	var respuesta="si";
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




}//FIN DE LA FUNCIÓN