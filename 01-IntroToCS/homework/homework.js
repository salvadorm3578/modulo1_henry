'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  
  var dato=String(num);

  acomulador = 0;

  for (let i=1 ; i <= dato.length; i++) {
    
    var areglo = i - 1 ;
    var exponente = dato.length - i;
    var calculo = Math.pow(2,exponente) * dato[areglo];
    var acomulador = acomulador + calculo;

  }
  return acomulador;



}

function DecimalABinario(num) {
  // tu codigo aca

  var resul = 0;
  var dato=num;
  var areglo=[];

  for (let i=0 ; i < 1;) {
  var mod=dato%2;
  var dato=dato/2;
  dato = Math.floor(dato); 
  if (dato===1){
    areglo.unshift(mod);
    areglo.unshift(dato);
    resul=areglo.join("");
    i++; 
    return resul;
  }else{
    areglo.unshift(mod);
  }
  

  }



}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}