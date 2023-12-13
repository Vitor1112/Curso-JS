let valores = [3, 4, 2, 5, 6, 8]
valores.sort()

/*console.log(valores[0])

for(let pos = 0; pos < valores.length; pos++){

    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for (let pos in valores){

    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}