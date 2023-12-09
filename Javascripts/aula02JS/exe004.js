var agora = new Date() // Pega a hora atual da maquina 

var hora = agora.getHours()
//var hora = agora.getMinutes()
//var hora = agora.getSeconds()
//var hora = agora.getMilliseconds()

console.log(`Agora são extamente ${hora} horas `)

if(hora < 12){

    console.log('Bom Dia')

}else if(hora <= 18 ){


    console.log('Boa tarde')

}else{
    console.log('Boa noite')
}