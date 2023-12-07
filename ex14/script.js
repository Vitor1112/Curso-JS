function carregar() {
  var msg = document.getElementById('msg');
  var imagem = document.getElementById('imagem');
  var data = new Date(); // sempre chama essa Variavél para data ou hora etc....
  var hora = data.getHours();// criar variavél e passando valor dela ;

  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    // Manhã
    imagem.src = 'manha.jpg';
    document.body.style.background = "#e2cd9f"
    
  } else if (hora >= 12 && hora < 18) {
    // Tarde
  
    imagem.src = 'tarde.jpg';
    document.body.style.background = '#b9846f'
    
  } else {
    // Noite
    imagem.src = 'noite.jpg';
    document.body.style.background = '#515154'
  
  }
}