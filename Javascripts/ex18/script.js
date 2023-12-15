
let numer = document.getElementById('numero1')
let list = document.getElementById('lista1')
let resultado = document.getElementById('resultado1')
let valores = []

function isNumero(n){

    if(Number(n)>= 1 && Number(n) <= 100){

        return true

    }else{

        return false
    }
}


function inLista(n,l ){
    
    // Isso indica que valor não foi encontrado na lista o -1 ;

    if (l.indexOf(Number(n)) != -1 ){

        return true

    }else{
        return false
    }
    

}

function adicionar(){
     // Isnumero ou inlista é para analisar ser é numero para adicionar na lista ,lembrando posso usa nome que eu quiser .
    if(isNumero(numer.value) && !inLista(numer.value,valores)){
        
        valores.push(Number(numer.value)) // Para adiconar o valor 
        let item = document.createElement('option') // Para mostra a Resposta 
        item.text = `Valor ${numer.value} adicionado`// mostra o valor adicionado
        list.appendChild(item)// Para adiciona na lista este comando 
        resultado.innerHTML = '' // Para Limpa resultado quando adicinar mais numero ;

    }else{

       window.alert('Valor inválido ou encontrado na lista .')
    }

    numer.value ='' // Para limpar e pode escrever outro numero.
    numer.focus() //Para cursor volta na caixnha para eu escolhe outro numero;
}

function finalizar(){

    if(valores.length == 0){

        window.alert('Adicione valores antes  de finalizar ')

    }else{
        let total = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for(let pos in valores ){ // Para Informar o maior e menor

            soma += valores [pos]  //PARA fazer a soma entre eles

            if(valores[pos] > maior)
             maior = valores [pos]

             if(valores[pos] < menor)
             menor  = valores [pos]
            
        }
        media = soma /total // Soma divido por quantidade numero adicionado na Lista


        resultado.innerHTML = ''
        resultado.innerHTML +=`<p> Ao todo , temos ${total} números cadrastado.</p> `//Mostra total de numero  cadratato
        resultado.innerHTML +=`<p> O maior valor informado foi ${maior}. </p> `
        resultado.innerHTML +=`<p> O menor valor informado foi ${menor} .</p> `
        resultado.innerHTML +=`<p> Somando todos os valores,temos  ${soma} .</p> `
        resultado.innerHTML +=`<p> A média de valores digitados foi ${media} .</p> `
    
    }
}