const peso = document.querySelector('pesoValor')
const altura = document.querySelector('alturaValo')
const botao = document.querySelector('#btn')



btn.addEventListener('click', (peso,altura)=>{
   
            peso = Number(pesoValor.value)
            altura = Number(alturaValor.value)
            imc = (altura*altura)/ peso
            return document.getElementById("resposta").innerHTML =`Seu IMC é:${Math.floor(imc)}`
       })


// function calculo(peso,altura){
//     let peso = Number(pesoValor.value)
//     let altura = Number(alturaValor.value)
//     let imc = (altura*altura)/ peso
//     return document.write(`Seu IMC é:${imc}`)
// }




