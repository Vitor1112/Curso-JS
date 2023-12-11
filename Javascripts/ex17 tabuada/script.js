function clicar(){
    let numero1 = document.getElementById('numero1')
    let tabuada1 = document.getElementById('select1')

    if(numero1.value.length == 0){
         
        alert('Por favor digite um numero !')

    }else{
        let numero = Number(numero1.value)
        let contador = 1
        tabuada1.innerHTML = ''; // Limpar resultados anteriores

        while (contador <= 10){

            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero * contador}`
            item.value = `tabuada ${contador}`
            tabuada1.appendChild(item)
            contador++


        
        }

    }


}