/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
var Importe;
var Descuento;


Importe = document.getElementById("importe").value;
Importe = parseInt(Importe);
Descuento = Importe - ((Importe * 25) / 100);

Descuento = parseInt(Descuento);
document.getElementById("resultado").value = Descuento;


}
