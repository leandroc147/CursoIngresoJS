function Mostrar()
{
var nota;
var promedio;
var nota_min;
var nota_max;
var cant_var = 0;
var contador = 0;
var acumulador = 0;
var sexo = 'f' || 'm';
var bandera = true;

    while(contador <3){
        nota = prompt('Ingrese la nota del alumno');
        sexo = prompt('Ingrese f o m.');
        contador++;
        nota = parseInt(nota);

        acumulador+=nota
        while(nota >10 || nota <0){
            nota = prompt('la nota no es válida')
        }
            if(nota <=10 || nota >0){
                bandera = false;
                nota_max = nota;
                nota_min = nota;
            }
            else{

            }
            if(nota<nota_min){
                nota_min=nota;
            }
            if(nota>nota_max){
                nota_max=nota;
            }

                if(sexo != 'f' && nota >=6){
                    cant_var++;
                    nota_max = cant_var;
                        
                  

                }
                promedio=Math.floor(acumulador/contador);

    }

alert('cantidad de varones que su nota haya sido mayor o igual a 6: '+nota_max);
alert('La nota más baja es: '+nota_min);    
alert('Promedio de notas totales: '+promedio);
}
