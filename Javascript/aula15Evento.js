///////Adicionando eventos com addEventListener em Javascript////

/// Primeira aula de Eventos //////

/// Exemplo 01 ///

//const c1 =document.getElementById("c1")

// const c1 =document.querySelector("#c1")

// const mensagem=()=>{
//     alert("OI")
// }

// c1.addEventListener("click",mensagem)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////EXEMPLO 02  Posso usa função anomima dentro do addEvento//////////////////////////////

// const c1 =document.querySelector("#c1")

// c1.addEventListener("click",()=>{
//     alert("OI")
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////EXEMPLO 03 outra de chama função  ///////////////

//const c1 =document.querySelector("#c1")
//
// const mensagem=()=>{
//     alert("clicou")
// }
// /* SE eu abrir uma função dentro do addevento vou ter opção de pegar target e pode adiciona cor ou algo o quiser */

// c1.addEventListener("click",(evento)=>{
//    const elemento = evento.target
//    elemento.classList.add("destaque")

// })


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////EXEMPLO 04 Usando arryays pegando todos os elementos e Usando o "MAP"   ///////////////
// const cursos=[...document.querySelectorAll(".curso")]

/// "TARGET" serve mostra QUem disparou o evento ou melhor falando quem foi clicado , dai posso usa ele para adiciona algo dentro dele ///

// cursos.map((elemento)=>{
//     elemento.addEventListener("click",(evento)=>{
//         const elemento=evento.target
//         elemento.classList.add("destaque")
//     })
// })



