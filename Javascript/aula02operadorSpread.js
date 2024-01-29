// O operador spread é uma ferramenta poderosa que pode ser usada para simplificar e tornar mais eficiente a sua escrita de código JavaScript. Com ele, você pode expandir os valores de um array ou objeto em outro array ou objeto de forma rápida e fácil.

// EXEMPLO 01 

/*let n1 =[10,20,30]
let n2 = [11,22,33,44,55]
let n3 = [...n1,...n2]


// Exemplo 02
console.log("N3 :" + n3)*/

/*const jogador1 ={nome :"Bruno",energia:100,vidas:3, magia :90}
const jogador2 ={nome :"Vitor ",energia:100,vidas:5 , velocidade :120}
const jogador3 = {...jogador1,...jogador2} // Usa os 3 pontinhos conctar o mesmo dados 

console.log(jogador3)*/

//EXEMPLO 03 

/*
const soma=(v1,v2 , v3 )=>{
     return v1+v2+v3 
}
let valores=[1,3,5,6]

console.log(soma(...valores))*/

//EXEMPLO 04 
// foreach  é para procura elementos 
const objeto1 = document.getElementsByTagName('div')
const objeto2 = [...document.getElementsByTagName('div')]

objeto2.forEach(element =>{
    element.innerHTML = "curso"
});

console.log(objeto1)

console.log(objeto2)