const {soma, somacomposta, multiplicacao, calc} = require('./math');


describe('a função de soma', () => {
    test('Soma de 1 e 2 deve ser 3', () => {
        expect(soma(1, 2)).toBe(3);
    });

    test('Soma de 1, 2 e 3 deve ser 6', () => {
        expect(somacomposta (1, 2, 3)).toBe(6)
    });

});

describe('a função de multiplicação', () => {

    test('A multiplicação de 5 e 2 deve ser 10', () => {
        expect(multiplicacao(5, 2)).toBe(10)
    });
});

describe('A função de cálculo', () => {

    test('O cálculo de 1, 2 e 2 deve ser 6', () => {
        expect(calc(1, 2, 2)).toBe(6)
    })

} )