
let numero = [1,6,7,9,5]
numero.push(8)
numero.sort()
console.log(numero)
console.log(`o vetor tem ${numero.length} posições`)
console.log(`O primeiro valor do vetor é ${numero[0]}`)// Para sabe o valor da primeira posição


let pos = numero.indexOf(4)
if (pos == -1){
    console.log('Valor não encontrado ')
}else{

    console.log(`O valor 5 esta na posicção ${pos}`)
}
