function Mostrar()
{
	var numero
	var contador=0;
	var acumulador=0;
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

while(contador<5)
{
	numero = parseInt(prompt("ingrese un número"));

	while(!(numero>=0 || numero<=0))
		numero = parseInt(prompt("ingrese un número"));
		
	acumulador = acumulador + numero;

	contador++;
}

}//FIN DE LA FUNCIÓN