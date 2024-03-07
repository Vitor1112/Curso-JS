// Praticando uma atividade como metodo Filter //

const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")
const cursos=["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")

cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+chave)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")
    
    const rb=document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
    
})
btnCursoSelecionado.addEventListener("click",(evento)=>{
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    let radioSelecionados=todosRadios.filter((elemento,indice,arr)=>{
        return elemento.checked
    })
    radioSelecionados=radioSelecionados[0]
   // const cursoSelecionado=radioSelecionados.parentNode.parentNode.firstChild.textContent /// Para me dar conteudo de texto sem "aspas dublas  " queria objet text 
   const cursoSelecionado=radioSelecionados.parentNode. previousSibling.textContent // Para pegar irmão interior que seria o texto 
   alert("Curso selecionado:" + cursoSelecionado)
   /* console.log(todosRadios)
    console.log(radioSelecionados)
    console.log(cursoSelecionado)*/
})

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling=> para pegar o proximo 
// previousSibling => para pegar o anterior 
