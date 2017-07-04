function Mostrar()
{
	var num = 0;
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var promedio;

	contador=parseInt(contador);
	promedio=parseInt(promedio);

	((contador<=5) || (respuesta=="si"))
	{
		num=parseInt(prompt("Escriba un número "+contador));
		acumulador+=num;
		respuesta=confirm("Quiere agregar más numeros?");

	}
	promedio = acumulador/5;
	alert("La suma es: "+ acumulador +"El promedio es "+ promedio);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN