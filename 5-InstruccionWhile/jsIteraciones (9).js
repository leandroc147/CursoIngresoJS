function Mostrar()
{
	var nummax;
	var nummin;
	var contador=0;
	// declarar variables
	var primera=true; 
	var respuesta='si';

	while(respuesta=="si")
	{
		num=prompt("Escriba un número ");

			if(primera)
			{
				nummax=num;
				nummin=num;
				primera=false;
			}
			else
			{
			
			if(num<nummin)
			{
				nummin=num;
			}
			if(num>nummax)
			{
				nummax=num;
			}
}
respuesta=prompt("Quiere agregar más numeros?");
			//(respuesta = "si");	
}

			

document.getElementById("maximo").value=nummax;
document.getElementById("minimo").value=nummin


}//FIN DE LA FUNCIÓN