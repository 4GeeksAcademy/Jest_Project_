// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
// 1 dolar = 0.93€ (1 / 1.07) ---- 0.93 * 156.5 = 145.545
                                // (Lo cual es quivalente a 1 dolar en Yen)
    let valueInYen = valueInDollar * 145.545;

    return valueInYen;
}

const fromYenToPound = function(valueInYen){
// 1 Yen = 0.0064€ (1 / 156.5) ---- 0.0064 * 0.87 = 0.005568
                                    // (Lo cual es equivalente 1 yen a Pound)
    let valueInPound = valueInYen * 0.005568;

    return valueInPound;
}




const sum = (a, b) => {
    return a + b
}

console.log (sum(7, 3))

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};