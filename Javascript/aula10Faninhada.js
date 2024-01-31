
//// Funções aninhadas ///

// Exemplo 01 ESTUDAR MAIS ESSE ASSUNTO //

/*const soma=(...valores)=>{
    const somar= valor=>{
        let resultado= 0
        for(i of valor)
        resultado = resultado + i
        return resultado
    }
   return somar(valores)
}

console.log(soma(10,5, 15))*/


///// EXEMPLO O2 DE FUNÇÃO ANINNHADA ///

const somar= valor=>{
    let resultado=0
    for(i of valor)
    resultado = resultado + i
    return resultado
 
}
const soma =(...valores)=>{
    return somar(valores)
}

console.log(soma(10,5, 15))