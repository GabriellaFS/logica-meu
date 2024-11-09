function enviarMedia(nota1, nota2, nota3){
 let media = (nota1 + nota2 + nota3)/3
 return media
}

let mediaUm = enviarMedia(3, 4, 6);

if( mediaUm >= 7){
  console.log(` Parabéns você passou! A média é ${mediaUm}`)
}else if( mediaUm <=4){
  console.log(`Sinto muito você foi reprovado, a sua média é ${mediaUm}`)
}else{
    console.log(`Você está de recuperação, a sua média é ${mediaUm}`)
}