function Mostrar()
{
	var num = 0;
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var promedio;

//		(confirm("Quiere agregar más numeros?"))
while(respuesta=="si")
{
	contador ++;
	num=prompt("Escriba un número ");
	num=parseInt(num);

	acumulador+=num;
	//respuesta=confirm("si");
	respuesta=prompt("Quiere agregar más numeros?");
}


	/*contador=parseInt(contador);
	promedio=parseInt(promedio);

	while((contador<=5) || (respuesta==true)
	{
		num=parseInt(prompt("Escriba un número "+contador));
		contador ++;
		acumulador+=num;
		respuesta=confirm("Quiere agregar más numeros?");
		
	}
	promedio = acumulador/contador;
	alert("La suma es: "+ acumulador +" El promedio es "+ promedio);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
*/
}
//FIN DE LA FUNCIÓN