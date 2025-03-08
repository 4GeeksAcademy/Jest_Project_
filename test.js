const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

expect(total).toBe(23);
});



test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One dollar should be 145.545 Yen", function() {
    
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(3.5);

    const expected = 3.5 * 145.545;

    expect(fromDollarToYen(3.5)).toBeCloseTo(509.4075, 4);
    //toBeCloseTo me permite una variacion en los ultimos decimales, en este caso 4
})


test("One yen should be 0.0063 Pound", function() {
    
    const { fromYenToPound } = require('./app.js');

    const Pound = fromYenToPound(3.5);

    const expected = 3.5 * 0.005568;

    expect(fromYenToPound(3.5)).toBe(0.019488);
})