let peso = 50
let altura = 1.63

let imc = peso /( altura * altura ) 

if ( imc < 19 ){
    console.log(`você está abixo do peso, seu imc é ${imc}`)
} else if ( imc < 24 ){
    console.log(`você está no peso ideal, seu imc é  ${imc}`)
}else{  
    console.log(` Você está acima do peso, seu imc é ${imc}`)
}