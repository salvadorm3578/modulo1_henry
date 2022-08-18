'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números 
naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y 
sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {

  if (n<3) return n;
  return n * nFactorial (n - 1)
  
  return 

}

function nFibonacci(n) {

if (n === 0) return 0;
if (n<3) return 1;

return nFibonacci (n-1) + nFibonacci (n-2)


}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {

  this.item = {};
  this.outCola = 0;
  this.inCola = 0;

  
  this.enqueue = function(dato){

      this.item[this.inCola]=dato;
      this.inCola++;    
  }

  this.dequeue = function(){
    if (this.outCola === this.inCola){
      return undefined;
      } 
      
      const datob = this.item[this.outCola];
      delete this.item[this.outCola];
      this.outCola++;
      return datob;
  }

  this.size = function(){
    return this.inCola - this.outCola;
  }
}

/*
  this.item = {};
  this.outCola = 0;
  this.inCola = 0;
  



this.dequeue = function  () {  // sacar de la fila
if (this.outCola === this.inCola){
return null;
} 

const datob = this.item[this.outCola];
delete this.item[this.outCola];
this.outCola++;
return datob;

}

this.Size = function(){  // ver datos en fila
  return this.inCola - this.outCola;
}

}

Queue.prototype.enqueue = function (dato) {  // agrega a fila
  this.item[this.inCola]=dato;
  this.inCola++;    
}


*/

/*
  const queue = new Queue;
  queue.enqueue(`A`);
  queue.enqueue(`B`);
  queue.enqueue(`C`);
  queue.dequeue();
  console.log(queue.Size());
  console.log(queue)
  */


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
