function Mostrar()
{
var num = prompt('Número');

for(i=2; i<num;i++){
    if(num%i==0){
        console.log('Número primo '+num);
    }
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