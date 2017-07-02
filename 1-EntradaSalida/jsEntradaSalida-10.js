/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
var num1;
var num2;
var resultado;

num1 = document.getElementById("importe").value;
//num2 = document.getElementById("resultado").value;



resultado = parseInt(num1) + parseInt (num2);

alert (resultado);
}
