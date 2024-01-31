//Funções Anônimas em Javascript//

// EXEMPLO 01 //
/*const fu =function(valor1 , valor2 ){
    return valor1 +valor2
}
console.log(fu(10,2))*/

// EXEMPLO 02 //

/*const fu = function(...valores){
    resultado = 0
    for(i of valores ){
        resultado = resultado + i
    }
    return resultado
}
console.log(fu(10,2))*/

// EXEMPLO  de Construção 03  //
/// ELe serve para função mas simples passando 2 valores ou 3 //

/*const fu = new Function( "valor1,valor2","return valor1+valor2") ;//FUNÇÃO CONSTRUTOR ANÔNINIMA

console.log(fu(10,2))*/

///// Arrow Function em Javascript///

//// EXEMPLO 01 ///

// exemplo const soma= function(v1,v2 ){return v1+v2}//

/*const soma= (v1,v2)=>{
    return v1 + v2
}
console.log(soma(10,5))*/

/// Exemplo 02 //

/*const nome = n =>{ // Observação quando for um só valor no parametro não é preciso coloca  ()// 
    return n 
}
console.log(nome("Vitor"))*/

///// Exemplo 02 sem precisa usa Return e as chaves  quando somente quando tive somento um único valor  ////

/*const adiciona = n => n + 10 // quando não utilizo o return não é obrigado usar as chaves //
console.log(adiciona(10))*/


///// EXEMPLO 04 Quando crio uma varivel para receber resultando é obrigatorio e uso de Return ////

const soma= (v1,v2)=>{
    let resultado= v1 +v2
    return resultado
}
console.log(soma(10,5))



