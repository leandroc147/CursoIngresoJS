function Mostrar()
{	
	var num;
	var acumuladormulti=1;
	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

while(respuesta=="si")
{
	
	num=prompt("Escriba un número ");
	num=parseInt(num);
	
	/*	while(isNaN(numero))
	{
		numero = prompt("ingrese un número");
	numero = parseInt(numero);
	
	}*/
			if(num >=0)
	{
			positivo += num;
	}
			else
	{
			acumuladormulti*=num;
	}
			
				respuesta=prompt("Quiere agregar más numeros?");
				(respuesta == "si".toLowerCase("si"));
}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN