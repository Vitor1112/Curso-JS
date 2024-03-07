
////AULA DE Entendendo a relação dos elementos no DOM em Javascript #P2 /////

const caixa1=document.querySelector("#caixa1")
const botão_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")


// Aqui me mostra a DIV PAI eu sou " parentelemet ou parentNode" DO DA DIV 2 

console.log(c1_2.parentElement)
console.log(c1_2.parentNode)

//// PARA SABE O AVÔ DA VIDA USAMOS "parentNode.parentNode"

console.log(c1_2.parentNode.parentNode)

////// SE eu quiser pegar algo especifico daquela estrutura , vemos abaixo:

console.log(c1_2.parentNode.parentNode.parentNode.children[4])

 
//console.log(caixa1.hasChildNodes())  /// para verificar se possui filho ou não 
//console.log(botão_c[0].hasChildNodes()) /// para verificar se possui filho ou não do primeiro botão 
//console.log(botão_c[0].childNodes) // aqui para mostra que dentro da DIV Tem apenas um TEXTO nÃO outra DIV 
 
 /// Primeiro exemplo  ///

//if (botão_c[0].children.length>0){
   // console.log("Possui filhos ")
//}else{
    //console.log("Não possui filhos ")
//}

 /// Segundo  exemplo  /// 

//if (caixa1.children.length>0){
    //console.log("Possui filhos ")
//}else{
    //console.log("Não possui filhos ")
//}

///////////////////////////////////////////////////////////

/// OUTRO EXEMPLO USANDO OPERADOR TERNÁRIO ///

//console.log(caixa1.children.length > 0 ?"Possui filhos" : "Não possui filhos ")

/// Se quiser conteudo dele ? muda uma classe ou elemento .veja o exemplo abaixo :

//console.log(caixa1.firstElementChild.innerHTML="TESTE")

///// SE QUISER MUDA OUTRO TEXTO DA LISTA , BASTA O APONTA A POSSIÇÃO DO ELEMENTTO [0] OU [3], USANDO "CHILDREN" VEJAMOS O EXEMPLO ABAIXO;

//console.log(caixa1.children[2].innerHTML="2ESTE")