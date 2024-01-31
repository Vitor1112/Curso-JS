/////Funções Geradoras em Javascript ///

   //EXEMPLO 01 ///
   /*function* cores(){
    yield 'vermelho'
    yield 'verde'
    yield 'azul'
   }

 let  interação=cores()
 
   console.log(interação.next().value)
   console.log(interação.next().value)
   console.log(interação.next().value)*/

      //EXEMPLO 02 ///

/*
      function* perguntas(){
        const nome = yield 'Qual seu nome ?'
        const esporte= yield 'Qual é seu esprote favorito?'
        return "Seu nome é "+ nome + ', seu esporte favorito é '+ esporte
      }
      const interação = perguntas()
      console.log(interação.next().value)
      console.log(interação.next( 'Vitor').value)
      console.log(interação.next('Natação').value)
     
*/

 //EXEMPLO 03 ///
/*function* contador(){
    let i = 0
    while (true) {
        yield i++  
    }
}
const interação = contador()

 for(let i =0 ; i<10; i++){
    console.log(interação.next().value)
 }*/

  //EXEMPLO 04 ///
function* contador(){
    let i = 0
    while (true) {
        yield i++  
        if(i>5)
        break
    }
}
const interação = contador()

 for(let c of interação){
    console.log(c)
 }