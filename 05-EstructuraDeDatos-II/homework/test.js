function LinkedList() {
    this.head = null;
    this.size = 0;
  
  
    this.add = function (value) {
  
      const newNode = new Node(value, null);
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
  
    this.remove = function () {
  
       let index = this.size - 1

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
        return current.value;
  
    }
  

    this.search = function (data) {

        let current = this.head;
        
    
        while (current !=null) {
            if (current.value === data) {

                return current.value

             }
             if (typeof data === `function`){
                if (data(current.value)){
                  return current.value
                }
              }
                
                current=current.next;
    
        
    
      }
      return null;
    
    }

  
  }
  
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  
  const test = new LinkedList;
  test.add('first'); 
  test.add('second'); 
  test.add('tres'); 
  console.log (test.head);
  console.log (test.size);
  console.log (test.search(function(nodeValue) {
    return nodeValue === 'tres';
  }));
  console.log (test.remove());
  console.log (test.remove());
  console.log (test.size);
  console.log(ana())

  function ana (nodeValue) {
    return nodeValue === 'tres';
  }
 
