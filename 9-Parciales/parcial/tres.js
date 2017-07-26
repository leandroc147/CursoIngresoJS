function Mostrar()
{

var largo;
var ancho;
var area;
var resultado;

largo = document.getElementById('alrgo').value;
ancho = document.getElementById('ancho').value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

       area = largo * ancho;

       resultado = area * 3;
       alert('El perímetro es de '+area+' se necesitan '+resultado+' metros de alambre');

}
