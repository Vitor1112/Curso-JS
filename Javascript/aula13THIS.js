////Usando o operador THIS dentro de funções em Javascript///

// ///EXEMPLO 01 ///

// function aluno(nome , nota){
//     this.nome = nome
//     this.nota = nota
//     console.log(nome)
//     console.log(nota)
// }
// aluno("Bruno",100)

// ///////////////////////////////////////////////////////

// ///EXEMPLO 02  com erro ///

// function aluno(nome , nota){
//     this.nome = nome
//     this.nota = nota
//     this.dados_anonimo=function(){
//         setTimeout(function(){
//             console.log(this.nome)
//             console.log(this.nota)
//         },2000)
//     }
   
// }
// const aluno1 = new aluno("Bruno",100)
// aluno1.dados_anonimo()

///////////////////////////////////////////////////////

///EXEMPLO 03 USANDO ARROW FUNCTION EVITAR DAR ERRO NO THIS ///

function aluno(nome , nota){
    this.nome = nome
    this.nota = nota
    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
   
}
const aluno1 = new aluno("Bruno",100)

aluno1.dados_arrow()