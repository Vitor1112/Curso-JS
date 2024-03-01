/// Primeira aula de DOM ///

// "TOGGLE " => SERVE PARA REMOVE OU ADICIONAR UMA CLASSE , SE TIVE ELE REMOVE E NÃO TIVE ELE ADICIONAR //

/// EXEMPLO 01 ///

// EXEMPLO 01

const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const botao = document.querySelector("#botao_copiar");
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map((elemento) => {
    elemento.addEventListener("click", (evento) => {
        const curso = evento.target;
        curso.classList.toggle("selecionado")
        
    });
});
botao.addEventListener("click", () => {
    const cursoSelecionados = [...document.querySelectorAll(".selecionado")];
    const cursoNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]; // ":NOT" SERVE PARA LISTA CLASS QUE NÃO ESTA SELELCIONADO 

    cursoSelecionados.map((elemento)=>{
        caixa2.appendChild(elemento)
    })

    cursoNaoSelecionados.map((elemento)=>{
        caixa1.appendChild(elemento)
    })

});
