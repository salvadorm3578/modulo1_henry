class Queue {

    constructor() {
        this.item = {};
        this.outCola = 0;
        this.inCola = 0;
    }

    enqueue(dato) {  // agrega a fila
        this.item[this.inCola]=dato;
        this.inCola++;    
    }

    dequeue (){  // sacar de la fila
    if (this.outCola === this.inCola){
    return null;
    }   

    const datob = this.item[this.outCola];
        delete this.item[this.outCola];
        this.outCola++;
    return datob;

    }


    getSize(){  // ver datos en fila
        return this.inCola - this.outCola;

    }

    isEmpty(){  // validar si hay datos en fila
        if (this.getSize() === 0){
            return true;
        }else{
            return false;
        }
    }

    peek(){ // ver primer dato en fila de espera
        if (this.getSize() === 0){
            return null;
        }else{
            return this.item[this.outCola];
        }
    }


    print(){ // inprimir datos en cola

        if (this.getSize() === 0){
            return null;
        }else{

            let datosExistentes =``;

            for (let i=this.outCola; i<this.inCola; i++){

                datosExistentes += this.item[i] + ` - `;

            }

            return datosExistentes;
        }

    }


}

const queue = new Queue;
queue.enqueue(1);
queue.enqueue(5);
queue.enqueue(515);
queue.enqueue(57);
queue.enqueue(85);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log (queue);
console.log(queue.getSize());
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.print());



