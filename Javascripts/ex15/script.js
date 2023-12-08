function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formularioAno = document.getElementById("txtano");
    var resultado = document.getElementById("resultado");
    
    
   // se o cara não digitou ano ou então valor digitado é maior que ano atual
    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
        window.alert('[ERROR] Verifique seus dados e tente novamente!');
    } else {
     
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(formularioAno.value);
        var genero = '';
        var img = document.createElement('img')// coloca imagem
        img.setAttribute('id','foto') // para coloca imagem


        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src','foto-criança-m.jpg')

            }else if (idade < 21){
                // jovem
                img.setAttribute('src','foto-jovem-m.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','foto-adulto-m.jpg')
            }else {
                //idoso
                img.setAttribute('src','foto-idosa-m.jpg')
            }
              


        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if(idade >= 0 && idade < 10 ){
                  // criança
                  img.setAttribute('src','foto-criança-f.jpg')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src','foto-jovem-f.jpg')
            }else if (idade < 50){
                 //adulto
                 img.setAttribute('src','foto-adulta-f.jpg')
            }else{
                //idoso
                img.setAttribute('src','foto-idosa-f.jpg')
            }

        }
         
        resultado.style.textAlign = ' center' // centraliza o resultado
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        resultado.appendChild(img)//appenchild é para adicona elementos 
    }
}
