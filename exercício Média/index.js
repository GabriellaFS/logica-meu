let nota1 = 8
let nota2 = 3
let nota3 = 4
let media = (nota1 + nota2 + nota3)/3

if ( media >= 7){

   console.log(`Parabéns você passou! Sua média é: ${media}`);

} else if( media <= 5){
    console.log(`Você está reprovado, sua média é: ${media}`);
}else{
    console.log(` Você está em recuperação, sua media é: ${media}`);
}
