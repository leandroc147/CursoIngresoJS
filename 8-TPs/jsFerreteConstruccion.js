/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var largo;
var ancho;
var radio;
var resultado;

function Rectangulo () 
{
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    radio = document.getElementById("Radio").value;

        largo = parseInt (largo);
        ancho = parseInt (ancho);
        radio = parseInt (radio);

            resultado = largo*2 + ancho*2;
            
            resultado = resultado *3;
                alert (resultado);



}
function Circulo () 
{
	//56,54
    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    radio = document.getElementById("Radio").value;

        largo = parseInt (largo);
        ancho = parseInt (ancho);
        radio = parseInt (radio);

        resultado = (Math.Pi * radio * radio) *3;

            alert (resultado);

}
function Materiales () 
{
	
    //40 c y 60 cal

var cemento;
var cal;

    largo = document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    radio = document.getElementById("Radio").value;

        largo = parseInt (largo);
        ancho = parseInt (ancho);
        radio = parseInt (radio);


       cemento = (largo * ancho) *2;
        
        cal = (largo * ancho) *3;

            resultado = alert (cemento )



}