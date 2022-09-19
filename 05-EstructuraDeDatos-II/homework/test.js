function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.size1 = 1;
  
}

BinarySearchTree.prototype.size = function(){
  return this.size1;
}

BinarySearchTree.prototype.insert = function(value){

if (value < this.value) {

      if (this.left){
          this.left.insert(value);
      }else {
          this.left = new BinarySearchTree(value)
      }

}else {

        if (this.right){
            this.right.insert(value);
        }else {
            this.right = new BinarySearchTree(value)   
        }
}
this.size1++;

}

BinarySearchTree.prototype.contains = function(value){


  if (value === this.value) {
    return true;
  }


  if (value < this.value) {
  if (this.left){
    if (this.left.value === value){
      return true;
    }else{
      this.left.contains(value);
    }
    }else { 
    return false;
  }

}else {

    if (this.right){
      if (this.right.value===value){
        return true;
      }else{
        this.right.contains(value);
      }
    }else {
      return false;
    }
}
  
}

const test = new BinarySearchTree(9);
console.log(test);
test.insert(4);
console.log(test);
console.log(test.left.value)
console.log(test.value);
console.log(test.contains(8));