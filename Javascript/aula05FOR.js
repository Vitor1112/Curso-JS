// AULA DE FOR 

// FOR É SEMPRE USADO QUANDO EU SEI NUMERO DE REPETIÇÃO EU QUERO FAZER .

       // EXEMPLO 01 //


/*for(let i =0; i <10;i++){

    console.log("Vitor - Valor do I :"+i)
}

console.log("Fim do programa")*/
 
             //EXEMPLO 02 DE  FOR //

/*for(let i =0; i <100;i++){
     if(i%2==0){
        console.log(i +" é par ")
     }else {
        console.log(i + " é Impar")
     }
}

console.log("Fim do programa")*/


     //// AULA DE DE FOR ///
     
     /*let numero =[10,20,30,40,50]

     for(let i= 0;i<numero.length;i++ ){
        console.log(numero[i])

     }
*/
        

             //// PARA PERCORRER COLEÇÕES SEMPRE USA FOR IN OU FOR OF  DE ARRAYS  ///

      //// EXEMPLO DE FOR IN  PARA PEGAR AS POSIÇÕES DO ELEMENTOS ///

     /* let numero =[10,20,30,40,50]

      for( i in numero ){
        console.log(numero[i])
      }*/

         //// EXEMPLO DE FOR OF   PARA PEGAR OS ELEMENTOS QUE SÃO SOMENTES OS NUMEROS ///
         
     const objeto =document.getElementsByTagName('div')    

     let numero =[10,20,30,40,50]

      for( i of objeto){
        console.log(i .innerHTML="Curso")
      }
      for( i in objeto){
        console.log(objeto[i] .innerHTML)
      }