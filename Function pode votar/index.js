function podeVotar (idade){
idade = 16
if ( idade >= 18 && idade <= 70){
    console.log(`Sua idade é ${idade} anos Você tem que votar`);
}else if ( idade >= 16 || idade > 70){
    console.log( ` Sua idade é ${idade} anos Caso você queira você pode votar.`)
}else{
    console.log(`Sua idade é ${idade} anos você ainda não pode votar...`)
}
}
podeVotar()