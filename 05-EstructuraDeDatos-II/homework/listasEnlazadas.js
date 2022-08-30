class Node {

    constructor(data,next){
        this.data = data;
        this.next = next;
    }

}

class LinkedList {

    constructor(){
        this.head = null;
        this.size = 0;
    }


    add(data){ // agregar dato
        const newNode = new Node(data, null);
        if (!this.head){
            this.head = newNode;
        }else {
            let interar = this.head;
            while(interar.next){
                interar = interar.next;
            }
            interar.next = newNode;
            
        }
        this.size++;
    }


    insertAt(data,index){ //insertar dato por un indice dado
        if(index < 0 || index > this.size ){
            return null;
        }
        const newNode = new Node(data);
        let current = this.head;
        let previous; 

        if (index === 0){
            newNode.next = current;
            this.head = newNode;
        } else {
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
                
            }
            newNode.next = current;
            previous.next = newNode;

        }
        this.size++;

    }

    removeData(data){ // remover por dato 
        let current = this.head;
        let previous=null;

        while (current !=null) {
            if (current.data === data) {
                if (!previous){
                    this.head = current.next;
                }else {
                    previous.next = current.next;
                }
                this.size--;
                return current.data
            }
            previous=current;
            current=current.next;

        }

        return null;

    }

    removeFrom (index){  //remover dato por un indice dado
        if(index < 0 || index > this.size ){
            return null;
        }

        let current = this.head;
        let previous = null;

        if (index === 0){
            this.head = current.next;
        }else {
            for (let i = 0; i <index; i++) {
                previous = current;
                current = current.next;
                
            }
            previous.next = current.next;
        }
        this.size--;
        return current.data;

    }


    isEmpty (){  // validar la lista esta vacia
        if (this.size === 0){
            return true;
        }else {
            return false;
        }
    }

    getSize(){ // tamaño de lista
        return this.size
    }




    print(){

        if (!this.size){
            return null;
        }

        let current = this.head;
        let result =``;
        while (current){
            result += current.data += `->`;
            current = current.next;
        }
        result += `X`;
        return result;

    }




}

const test = new LinkedList;
console.log (test.isEmpty());
console.log (test);
test.add(15);
console.log (test);
test.add(21);
console.log (test);
test.add(47);
console.log (test);
test.insertAt(10,2);
console.log (test);
//console.log (test.removeData(21));
test.removeData(21);
console.log (test.removeFrom(20));
console.log (test);
console.log (test.print());
console.log (test.isEmpty());
console.log (test.getSize());



















