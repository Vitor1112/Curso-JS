
///Aula de Parando a propagação do evento com o método stopPropagation ///

//Exemplo 01 //

const caixa1=document.querySelector("#caixa1")
const botão_c1=document.querySelector("#c1")
const curso=[...document.querySelectorAll(".curso")]

caixa1.addEventListener("click",(evento)=>{
    console.log("clicou")
    
})

curso.map((elemento)=>{
  elemento.addEventListener("click",(evento)=>{
        evento.stopPropagation()
     })
     
})
