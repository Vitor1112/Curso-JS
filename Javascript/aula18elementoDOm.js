
/// AULA Entendendo a relação dos elementos no DOM em Javascript #P1 //

/// Eexemplo 01 //

const caixa1=document.querySelector("#caixa1")
const botão_c=[...document.querySelectorAll(".curso")]
 

/// Para eu aponta o ultimo elemento da minha coleção 

//console.log(caixa1.children[caixa1.children.length-1])//

/// OUTROS MODOS DE PEGAR O ULTIMO ELEMENTO É USANDO "FIRSTELEMENTOCHILD "OU "LASTELEMENTOCHILD" E PARA PEGAS TODOS ELEMENTOS USANDO O "CHILDrem" OBSERVE O EXEMPLO A SEGUIR 

//console.log(caixa1.firstElementChild)
//console.log(caixa1.lastElementChild)
//console.log(caixa1.children)

//OUTRO EXEMPLO USANNDO ROOTNODE PEGA TODOS ELEMENTOS
console.log(document.getRootNode())


