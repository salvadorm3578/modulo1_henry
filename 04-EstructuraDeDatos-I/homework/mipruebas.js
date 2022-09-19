function henryParty(arr) {



    Queue.prototype.enqueue=function (dato) { 
        this.array.push(dato);
    }


    
    
    if (arr.length === 0){
        return false;
    }

    
    const queue = new Queue(); 
    

for (let i = 0; i < arr.length; i++) {
    const filtro = arr[i];

    if (filtro.ticket==="VIP" && filtro.estado==="Conocido"){
        queue.enqueue(filtro); 
    }
    if (filtro.ticket===undefined || filtro.estado===undefined){
        return false;
    }


    }

return queue;



    
}

class Queue {
    constructor(){
    this.array=[];
    }
}





let arr= [{name:"Carol", ticket:"FALSO", estado: "Desconocido"},{name:"Gonzalo", ticket:"VIP", estado: "Conocido"},{name:"manuel", ticket:"VIP", estado: "Conocido"}, {Name: "Micaias", ticket:"VIP", estado: "Desconocido"}];
   
//let arr=[]
console.log(henryParty(arr));
console.log(henryParty(arr) instanceof Queue)

