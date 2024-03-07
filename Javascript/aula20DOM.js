
//// AULA 40  Criando novos elementos e adicionando no DOM em Javascript - ///

const caixa1=document.querySelector("#caixa1")
const botão_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")


/// AULA PARA CRIAR APENAS UM ELEMENTO PELA JAVACRIPT ///

//const novoElemento=document.createElement("div")// para criar uma div dentro da div pai 
//novoElemento.setAttribute("id","c7")
//novoElemento.setAttribute("class","curso c1")
//novoElemento.innerHTML="React Native"
//caixa1.appendChild(novoElemento) // para adiciona dentro da Div pai o novo elemento criado

/// Criando varias elemento no javasrcipts utizando arrays e dando " id " único a cada uma deles ///

const cursos=["HTML","CSS","JAVASCRIPT","PHP","React","MySQL","React Native"]

cursos.map((elemento,chave)=>{
    
const novoElemento=document.createElement("div")

novoElemento.setAttribute("id","c"+(chave+1) ) // Aqui pode ser feito assim também novoElemento.setAttribute("id","c"+ chave ) 


novoElemento.setAttribute("class","curso c1")

novoElemento.innerHTML=elemento

caixa1.appendChild(novoElemento)
})