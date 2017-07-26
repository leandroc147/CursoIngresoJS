function Mostrar()
{
var num = prompt('Ingrese un número');
var c_primos=0;

for(i=2; i<num;i++){
    
    if(num%i==0){
        c_primos++;
        
    }
}
if(c_primos>2){
    console.log('Número no es primo');
}
else{
    console.log('El número es primo');
}
/*
var num = prompt('');
var primo=true;
    
    for(i=2; i<num;i++){
        
        if(num%i==0){
            primo=false;
            console.log('Número primo '+num);
            break;
        }    
        }
        if(!primo){
            alert('');
        }
        else{
            alert('')

        }
    */
}//FIN DE LA FUNCIÓN