function Queue() {

    this.item = {};
    this.outCola = 0;
    this.inCola = 0;
    
  
  this.enqueue = function (dato) {  // agrega a fila
      this.item[this.inCola]=dato;
      this.inCola++;    
  }
  
  this.dequeue = function  (){  // sacar de la fila
  if (this.outCola === this.inCola){
  return null;
  } 
  
  const datob = this.item[this.outCola];
  delete this.item[this.outCola];
  this.outCola++;
  return datob;
  
  }
  
  //this.Size = function(){  // ver datos en fila
  //  return this.inCola - this.outCola;
  //}
  
  }
  Queue.prototype.Size = function () {  // agrega a fila
    return this.inCola - this.outCola;   
  }


  
  
  const queue = new Queue;
  queue.enqueue(`A`);
  queue.enqueue(`B`);
  queue.enqueue(`C`);
  queue.enqueue(`h`);
  queue.dequeue();
  console.log(queue.Size());
  console.log(queue)
  