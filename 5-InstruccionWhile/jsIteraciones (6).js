function Mostrar()
{
	var numero
	var contador=0;
	var acumulador=0;
	
numero = parseInt(prompt("ingrese un número"));

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

while(contador<4)
{
	contador++;
	numero = prompt("ingrese un número");
	numero = parseInt(numero);
	acumulador = acumulador + numero;
}	
	while(isNaN(numero))
	{
		numero = prompt("ingrese un número");
	numero = parseInt(numero);
	
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
	
	/*alert (acumulador/contador);

	numero = parseInt(prompt("ingrese un número"));

	while(!(numero>=0 || numero<=0))
		numero = parseInt(prompt("ingrese un número"));
		
	acumulador = acumulador + numero;

	contador++;*/
//}

}//FIN DE LA FUNCIÓN