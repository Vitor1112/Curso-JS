
//// AULA 41  Criando novos elementos e adicionando no DOM em Javascript - ///

const caixa1=document.querySelector("#caixa1")
const botão_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")

/// Aula Removendo elementos do DOM em Javascript com removeChild ///

const cursos=["HTML","CSS","JAVASCRIPT","PHP","React","MySQL","React Native"]

cursos.map((elemento,chave)=>{   
const novoElemento=document.createElement("div")
novoElemento.setAttribute("id","c"+(chave+1) ) 
novoElemento.setAttribute("class","curso c1")
novoElemento.innerHTML=elemento
                          /// Ensinando como adiconar imagem ///

const botao_lixeira=document.createElement("img") // para criar uma tag de img no html 
botao_lixeira.setAttribute("src","./icone_lixeira.webp") /// Para coloca imagem 

botao_lixeira.setAttribute("class","botao_lixeira")/// Para adiciona uma class


botao_lixeira.addEventListener("click",(evento)=>{

    caixa1.removeChild(evento.target.parentNode)//=>Para aponta para pai e remover usamos ParenteNode 
})
novoElemento.appendChild(botao_lixeira) // Aqui vai criar um elemento da Div que será que será filha , no a lixeira 
caixa1.appendChild(novoElemento)
})

///// Crei uma função anomima para fazer remoção ///

//novoElemento.addEventListener("click",(evento)=>{
    
   // caixa1.removeChild(evento.target)
//})

//caixa1.appendChild(novoElemento)
//})