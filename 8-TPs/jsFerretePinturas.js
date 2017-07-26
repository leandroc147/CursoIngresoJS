/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

    var num = 0;
    var centigrados = 0;
    var farenheit = 32;
function FahrenheitCentigrados () 
{
	
    num = document.getElementById('Temperatura').value;
    numero = parseInt(num);

    centigrados = (num - 32) * 5 / 9;
    document.getElementById('mostrar').innerHTML=num+' Farenheit equivale a: '+centigrados+' Grados centígrados';
}

function CentigradosFahrenheit () 
{
	
    num = document.getElementById('Temperatura').value;
    num = parseInt(num);

    farenheit = num * 9 / 5 + 32;
    document.getElementById('mostrar').innerHTML = num+' Grados centígrados equivale a: '+farenheit+' grados farenheit';
}
