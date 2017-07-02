/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	var nombre;
    var age;

    nombre = document.getElementById("elNombre").value;
    age = document.getElementById("laEdad").value;
    
    alert ("Usted se llama "+ nombre + " y tiene "+ age +" años"); 
}

