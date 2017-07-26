function Mostrar()
{
  var importe;
  var imp_final;

  importe = prompt('Importe');
  importe = parseInt(importe);

  imp_final = importe * 1.21;
  document.write('Importe final mas IVA: '+imp_final).value;
}
