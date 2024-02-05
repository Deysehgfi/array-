const peso = document.getElementById(pesoValor)
const altura = document.getElementById(alturaValor)
const botao = document.getElementById(btn)


function calculo(peso,altura){
    let imc = (altura*altura)/ peso
    return document.write(`Seu IMC é:${imc}`)
}




