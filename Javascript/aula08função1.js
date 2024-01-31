
/*function mudarTexto(){
    let d1=document.getElementById("d1")
    let d2=document.getElementById("d2")
    let d3=document.getElementById("d3")
    d1.innerHTML ="cursos"
    d2.innerHTML ="cursos"
    d3.innerHTML ="cursos"
}*/

///////// Parte 02 de função ////////////

/*function canal(){
    let n1 = 3 
    let n2 = 5
    let res = n1 * n2
    if (res%2==0){
        return "Par"
    }else{
        return "Impar "
    }
    
}
let res= canal()
console.log(res)*/
////////////////////////////////////////////////////////////////

//FUNÇÕES parametrizadas em Javascript #P3  , Quando a gente entra com valor dentro do parametro ///

 // EXEMPLO 01 
/*function soma(n1 = 0, n2 = 0){
  
  return  n1 + n2 
}
console.log(soma(3,9))*/

//////////////////////////////////////////////////////////////////
// EXEMPLO 02//

/*function soma(n1 = 0, n2 = 0){
    let res = n1 +n2 
    return res 
  }
  let resultado = soma(20 ,30)
  console.log(resultado)*/

  ////////////////////////////////////////////////////////////////
  //EXEMPLO O3 //

 /* const valorPadrão = 0

  function soma(n1 = valorPadrão ,n2 = valorPadrão){
    let res = n1 +n2 
    return res 
  }
  let resultado = soma(20 ,30)
  console.log(resultado)*/

  /////////////////////////////////////////////////////////////////////

  ///EXEMPLO O4 //


 /* let valor = 0
  
  console.log(valor)
  
  function add(v){

    return valor + v

  }

  valor = add(10)
  console.log(valor)*/
  /////////////////////////////////////////////////////////////////////////////////////////////

  /////Parâmetros REST em funções Javascript #P4  serve para criar uma função sem numero  determinado de valores
   /////

  // EXEMPLO 01 //
  
  /* function soma(...valores ){
    let tamanho = valores.length
    let resultado = 0
    for(let i = 0 ; i<tamanho; i++){
       resultado = resultado + valores[i]
       // mesmo coisa de resulatdo +=valores[i]
    }
     return resultado
    
  }
console.log(soma(49 ,7,7,8))*/

 // EXEMPLO 02  Melhor percorrer vetores //

 /*function soma(...valores ){ /// Utilizando os 3 pontinhos  é Paramentro  Rest
  let resultado = 0 
  for(let i of valores){
     resultado = resultado + i
     // mesmo coisa de resulatdo +=v
  }
   return resultado
  
}
console.log(soma(9,1 ,2))*/

////EXEMPLO 03 USANDO FOR IN /////

function soma(...valores) { // Utilizando os 3 pontinhos como parâmetro Rest
  let resultado = 0;
  for (let i in valores) {
    resultado = resultado + valores[i]; // Correção aqui
    // ou também pode usar: resultado += valores[i];
  }
  return resultado;
}

console.log(soma(9, 1, 2));




 


