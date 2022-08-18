class Stack {

    constructor() {
        this.item = {};
        this.datoSuperio = 0;
    }

    push(dato) {  // agregar datos a pila
        this.datoSuperio++;
        this.item[this.datoSuperio]=dato;   
        
    }

    pop (){  // eliminar datos de pila
        let deletedata;
        if (this.datoSuperio > 0) {
            deletedata = this.item[this.datoSuperio];
            delete this.item[this.datoSuperio]
            this.datoSuperio--;
            return deletedata;
        }

    }   



    getSize(){  // ver datos en pila
        return this.datoSuperio;

    }

    isEmpty(){  // validar si hay datos en pila
        if (this.getSize() === 0){
            return true;
        }else{
            return false;
        }
    }

    peek(){ // ver dato  superior en pila
        if (this.getSize() === 0){
            return null;
        }else{
            return this.item[this.datoSuperio];
        }
    }


    print(){ // inprimir datos en pila

        if (this.getSize() === 0){
            return null;
        }else{

            let datosExistentes =``;

            for (let i=1; i<=this.datoSuperio; i++){

                datosExistentes += this.item[i] + ` - `;

            }

            return datosExistentes;
        }

    }


}


const stack = new Stack();
stack.push(`UNO`);
stack.push(`DOS`);
stack.push(`TRES`);
stack.push(`CUATRO`);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
console.log(stack.getSize());
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.print());




