let invoice ={
    name: "Fernanda",
    age: 18,
    products:{
      0: ["caderno", 76.99],
      1: ["caneta", 5.99],
      2: ["lápis", 1.99]
    },
    taxes: 95.90
}

 console.log(`A compradora é ${invoice.name}`);
 console.log(`A idade é ${invoice.age}`);

for ( let index in invoice.products){
 let [ productName, productPrice] = invoice.products[index]
 console.log(`Produto ${productName}: R$ ${productPrice}`);
}