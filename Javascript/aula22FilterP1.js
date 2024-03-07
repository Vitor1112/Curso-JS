/// AULA 42 Entendendo o método FILTER em Javascript #P1 server para filtra elemento //

//Exemplo 01 de como usa filter para pegar maior valor que 18 //

    //const filtroMaior=(valor , indice,arr)=>{
   /* const filtroMaior18=(valor)=>{
        if(valor>=18)
        return valor 
}
const idades=[15,20,30,17,18,44,12,50]
const maior=idades.filter(filtroMaior18)
console.log(idades)
console.log(maior)*/

// Exemplo 02 como trabalhar Função dentro do FILTER   //

 const idades=[15,20,30,17,18,44,12,50]
    const maior=idades.filter((valor,indice,arr)=>{
        if(valor>=18)
        return valor
    })

    console.log(idades)
    console.log(maior)

    // Exemplo 03 como trabalhar Função dentro do FILTER  para pegar menor valor //

    const menor=idades.filter((valor,indice,arr)=>{
        if(valor<=18)
        return valor
    })

    console.log(menor)
    
    
