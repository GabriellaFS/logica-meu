// variável, função e vetores 

let name = ["João", "Willian", "Beny"]
let age = [26, 28, 25]
let products = [" blusa", "calça", "tênis"]
let produtsValues = [ 26.99, 129.99, 299.99]

generateInvoice(name, age, products, produtsValues  )

function generateInvoice(name, age, products, produtsValues){
    console.log(`O comprador é ${name[0]}`);
    console.log("A idade é " + age[0]);
    console.log("O produto é " + products[0]);
    console.log("O valor é " + produtsValues[0]);
    console.log(`O comprador é ${name[1]}`);
    console.log("A idade é " + age[1]);
    console.log("O produto é " + products[1]);
    console.log("O valor é " + produtsValues[1]);
    console.log(`O comprador é ${name[2]}` );
    console.log("A idade é " + age[2]);
    console.log("O produto é " + products[2]);
    console.log("O valor é " + produtsValues[2]);
}