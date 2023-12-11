
function clicar(){
    let inicio2 = document.getElementById('inicio1')
    let fim2 = document.getElementById('fim1')
    let passo2 = document.getElementById('passo1')
    let resultado2 = document.getElementById('resultado1')

    if(inicio2.value.length == 0 || fim2.value.length == 0 || passo2.value.length == 0){

        window.alert('[ERROR] Faltando dados!')
        resultado2.innerHTML = 'Impossível contar' // Ser falta dados vai parece embaixo mensagem impossivél conta

    }else{ //0

        resultado2.innerHTML = 'Contando: <br>' // Essa linha ser refere a div resultado1 para aparece contado na tela
        let inicio3 = Number(inicio2.value)
        let fim3 = Number(fim2.value)
        let passo3 = Number(passo2.value)

        if (passo3 <= 0){

            alert('Passo Inválido ! Considerando Passo 1') //Para mostra que Passo 0 é invalido, então vai trava o navegador 
            passo3 = 1
        }
        
        if (inicio3 < fim3){
            for(let contador = inicio3; contador <= fim3; contador += passo3){
 
                // Contagem crescente
                resultado2.innerHTML += `${contador} \u{1F449} `

            }

            //resultado2.innerHTML +=` \u{1F3C1} `

        }else{
               //  Contagem regressiva
             for(let contador = inicio3; contador >= fim3; contador -= passo3){

             resultado2.innerHTML += `${contador} \u{1F449}`

             }

            // resultado2.innerHTML +=` \u{1F3C1} `

        }

        resultado2.innerHTML +=` \u{1F3C1} ` /*Posso jogar ele aqui que vai aparece nos dois */

        }

       
}