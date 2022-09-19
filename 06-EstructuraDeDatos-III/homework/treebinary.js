const ConsoleLogger = require("@11ty/eleventy/src/Util/ConsoleLogger");

class Node {
    constructor (data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    add(data){
        if (data < this.data) {
            this.addtotheLeft (data);
        }else {
            this.addtotheRight (data);
        }

    }


    addtotheLeft (data){
        if (this.left){
            this.left.add(data);
        }else {
            this.left = new Node(data)
        }
    }


    addtotheRight (data){
        if (this.right){
            this.right.add(data);
        }else {
            this.right = new Node(data)
        }
    }



    

}

function inOrder (node,array){
    if (!node) return;
    inOrder(node.left,array);
    array.push(node.data);
    inOrder(node.right,array);
    return array;
}

function preOrder (node,array){
    if (!node) return;
    array.push(node.data);
    preOrder(node.left,array);
    preOrder(node.right,array);
    return array;
}


function postOrder (node,array){
    if (!node) return;
    postOrder(node.left,array);
    postOrder(node.right,array);
    array.push(node.data);
    return array;
}




const cabeza = new Node (10);
cabeza.add(5);
cabeza.add(15);
console.log(cabeza);
console.log(inOrder(cabeza,[]));
console.log(preOrder(cabeza,[]));
console.log(postOrder(cabeza,[]));


