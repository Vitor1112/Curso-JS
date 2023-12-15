
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

    }else{

       window.alert('Valor inválido ou encontrado na lista .')
    }
}