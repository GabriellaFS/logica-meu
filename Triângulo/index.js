
let lado1 = 15
let lado2 = 10
let lado3 = 16

if(lado1 === lado2 && lado2 === lado3){
    console.log(" Este triângulo é um equilátero");
}else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
    console.log(" Esta triângulo é um isóceles ");
}else{
    console.log(" Este triângulo é um escaleno");
}