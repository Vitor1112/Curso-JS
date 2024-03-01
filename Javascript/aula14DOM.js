///// PRIMEIRA AULA DE DOM PEGANDO ELEMENTOPOR "ID " E DEPOIS PERCORRENDO ELES POR ARRAYS E USANDO FOR O E MAP PARA PEGAS OS ELEMENTOS DENTRO DELES///

/// Usando arrays para percorrer o Dom  e Usando For OF para altera nome none///

// const documento1=document.getElementById("c1")
// const documento2=document.getElementById("c2")
// const documento3=document.getElementById("c3")
// const documento4=document.getElementById("c4")
// const documento5=document.getElementById("c5")
// const documento6=document.getElementById("c6")

// const arraysElementos=[documento1,documento2,documento3,documento4,documento5,documento6]

// for(i of arraysElementos){
//     i.innerHTML="curso"
// }

// console.log(arraysElementos)
///////////////////////////////////////////////////////////////////////////

///criando uma Arrays com DOM  e Usando "MAP" para percorre os elementos ///

// SEMPRE DAR PREFERÊNCIA AO "MAP "PARA PECORRER TODOS OS ELEMENTOS INTERA TODOS OS ELEMENTOS , É MELHOR QUE USA "FOR OF "//

// const documento1=document.getElementById("c1")
// const documento2=document.getElementById("c2")
// const documento3=document.getElementById("c3")
// const documento4=document.getElementById("c4")
// const documento5=document.getElementById("c5")
// const documento6=document.getElementById("c6")

// const arraysElementos=[documento1,documento2,documento3,documento4,documento5,documento6]

// arraysElementos.map((elemento)=>{
//     elemento.innerHTML="CFB CURSOS"
//    console.log(elemento)
// })

// console.log(arraysElementos)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// Segunda Aula de DOM pegando os elementos por getElementsByTagName ///

/// EXEMPLO 01 ///

//  const documento1=document.getElementById("c1")
//  const documento2=document.getElementById("c2")
//  const documento3=document.getElementById("c3")
//  const documento4=document.getElementById("c4")
//  const documento5=document.getElementById("c5")
//  const documento6=document.getElementById("c6")

//  const arraysElementos=[documento1,documento2,documento3,documento4,documento5,documento6]

//  const coleçãoHTML=document.getElementsByTagName("div")

//  console.log(arraysElementos)
//  console.log(coleçãoHTML)

//// EXEMPLO 02 USando o "MAP" para percorrer mas vai dar ERRO porque estou usando "getElementsByTagName"  ///

// const documento1=document.getElementById("c1")
//  const documento2=document.getElementById("c2")
//  const documento3=document.getElementById("c3")
//  const documento4=document.getElementById("c4")
//  const documento5=document.getElementById("c5")
//  const documento6=document.getElementById("c6")

//  const arraysElementos=[documento1,documento2,documento3,documento4,documento5,documento6]

//  const coleçãoHTML=document.getElementsByTagName("div")
//  coleçãoHTML.map((elemento)=>{
//     console.log(elemento)
//  })

//  console.log(arraysElementos)
//  console.log(coleçãoHTML)

/////////////////////////////////////////////////////////

/// EXEMPLO 03 A MANEIRA CORRETA PARA USA "MAP "para percorrer todo getElementsByTagName é  USANDO O Spreed ////

// const coleçãoHTML = [...document.getElementsByTagName("div")];
// console.log(coleçãoHTML);

// coleçãoHTML.map((elemento) => {
//   console.log(elemento);
// });

//////////// EXEMPLO 04 PARA TRASFORMAR EM ARRAYS ///////////////////

// let coleçãoHTML = document.getElementsByTagName("div");
// coleçãoHTML= [...coleçãoHTML]

// console.log(coleçãoHTML);

// coleçãoHTML.map((elemento) => {
//   console.log(elemento);
// });

/////////////////////////////////////////////////////////////////////////////////////

///// TERCEIRA AULA DE DOM Aprenda o Método getElementsByClassName ////////
// Como transformar em um array ? basta usa "Spreed"

// const cursosTodos = [...document.getElementsByClassName("curso")];
// const cursosc1 = [...document.getElementsByClassName("c1")];
// const cursosc2 = [...document.getElementsByClassName("c2")];
// const cursosEspecial= document.getElementsByClassName("curso")[6];

// console.log(cursosTodos);
// console.log(cursosc1);
// console.log(cursosc2);
// console.log(cursosEspecial)

// cursosc1.map((elemento)=>{
//     elemento.classList.add("destaque")
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                   //// "QUARTA AULA DE DOM USANDO METODO querySelector e querySelectorAll."/////
  const divTodas=[...document.getElementsByTagName("div")]                 
  const cursosTodos = [...document.getElementsByClassName("curso")];
  const cursosc1 = [...document.getElementsByClassName("c1")];
  const cursosc2 = [...document.getElementsByClassName("c2")];
  const cursosEspecial= document.getElementById("c1")
   
  const query_divTodas=[...document.querySelectorAll(" div[class]")]
  const query_cursosTodas=[...document.querySelectorAll(".curso")]

  console.log(query_divTodas)
  console.log(query_cursosTodas)

//  console.log(divTodas)
//   console.log(cursosTodos);
//   console.log(cursosc1);
//   console.log(cursosc2);
//   console.log(cursosEspecial)                  
