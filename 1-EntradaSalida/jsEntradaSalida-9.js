/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

var Importe;
var Aumento;

    Importe = document.getElementById("sueldo").value;
    Importe = parseInt(Importe);
	
    Aumento = Importe + ((Importe * 10) / 100);
    Aumento = parseInt(Aumento);

    document.getElementById("resultado").value = Aumento;
}
