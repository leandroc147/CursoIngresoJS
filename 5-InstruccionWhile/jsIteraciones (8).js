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

var numero;
	var positivo=0;
	var negativo=1; //pongo en 1 porque en cero siempre dara 0.
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var respuesta  = true;

	while(respuesta){
		
		numero = prompt('ingrese un numero');
		numero = parseInt(numero);
		// valido que ingrese solo numeros
		while(isNaN(numero)){
			numero = prompt('Ingrese Solo Numeros');
			numero = parseInt(numero);
		}
		// sumar los positivos y los cuento
		if(numero>=0){
			positivo = positivo + numero;
			contadorPositivos = contadorPositivos +1;
		} else {
			// multiplico los negativos y los cuento
			negativo = negativo * numero;
			contadorNegativos = contadorNegativos +1;

		}
		// pregunto al usuario si quiere seguir o no
		respuesta = confirm('Seguir Ingresando ? ') ;
	}

	document.getElementById('suma').value="Suma de "+contadorPositivos+" Nº positivos es: "+positivo;
	document.getElementById('producto').value="Producto de "+contadorNegativos+" Nº negativos es: "+negativo;


	/*
	num=prompt("Escriba un número ");
	num=parseInt(num);
	
	/*	while(isNaN(numero))
	{
		numero = prompt("ingrese un número");
	numero = parseInt(numero);
	
	}
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
*/
}//FIN DE LA FUNCIÓN