////Aprendendo sobre o método MAP em Javascript///
// Map serve para percorrer toda coleção ///

//EXEMPLO 01//

/*const cursos = ['HTML','CSS','JAVASCRIPT','PHP','React']
cursos.map((elemento,interação)=>{
    console.log("Curso :" + elemento + "- Posição do curso "+ interação)
})*/

//EXEMPLO 02 criando uma varivel para receber o retorno//

/*const cursos = ['HTML','CSS','JAVASCRIPT','PHP','React']
let contador= cursos.map((elemento,interação)=>{
    return elemento
})
console.log(contador)*/

////////////////////////////////////////////////////////////

//EXEMPLO 03//

// const cursos = ['HTML','CSS','JAVASCRIPT','PHP','React']
// let contador= cursos.map((elemento,interação)=>{
//     return "<div> "+elemento+" </div>"
// })
// console.log(contador)

//EXEMPLO 04//

// let elemento=document.getElementsByTagName('div')
// elemento=[...elemento]
// console.log(elemento)
// elemento.map((element,interação)=>{
//     element.innerHTML="Cursos"
    
// })

/////////////////////////////////////////////////////////////////

//EXEMPLO 05// VOU Metolo direito do classe ARRAY 

// const elemento=document.getElementsByTagName('div')
// const valores=Array.prototype.map.call(elemento,({innerHTML})=> innerHTML)
// console.log(valores)


////////////////////////////////////////////////////////////////

// //EXEMPLO 06 Para converte em numero em inteiro //
// const converterInt=(elemento)=>parseInt(elemento)
// const dobrar=(elemento)=>elemento*2
// let num = ['1','2','3','4','5'].map(converterInt)
// console.log(num)
////////////////////////////////////////////////////////

//EXEMPLO 07 Para converte em numero em inteiro //
const converterInt=(elemento)=>parseInt(elemento)
const dobrar=(elemento)=>elemento*2
let num = ['1','2','3','4','5'].map(dobrar)
console.log(num)


