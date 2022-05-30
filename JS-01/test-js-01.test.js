const {
    sumar,
    restar,
    multiplicar,
    dividir,
    saludar
} = require('./js-01.js')

describe('funcion sumar debe retornar la suma de los dos parametros que te manden', function () {
    it('debe devolver la suma de 5 + 3', function () {
        expect(sumar(5, 3)).toBe(8);
    })
    it('debe devolver la suma de 19 + 11', function () {
        expect(sumar(19, 11)).toBe(30);
    })
})

describe('funcion restar debe retornar la resta del numero que te pasen por parametro menos 3 unidades', function () {
    it('debe devolver la resta de 10 - 3', function () {
        expect(restar(10)).toBe(7)
    })
    it('debe devolver la resta de 100 - 3', function () {
        expect(restar(100)).toBe(97)
    })
})

describe('funcion multiplicar debe retornar la multiplicacion de los parametros', function () {
    it('debe retornar la multiplicacion de 10 * 10', function () {
        expect(multiplicar(10, 10)).toBe(100)
    })
    it('debe retornar la multiplicacion de 7 * 3', function () {
        expect(multiplicar(7, 3)).toBe(21)
    })
})

describe('funcion dividir debe retornar la divicion de los parametros', function () {
    it('debe dividir 9 / 3', function () {
        expect(dividir(9, 3)).toBe(3)
    })
    it('debe dividir 350 / 5', function () {
        expect(dividir(350, 5)).toBe(70)
    })
})

describe('dbe retornar el saludo mas el nombre', function () {
    it('debe retornar "Hola Alfred"', function () {
        expect(saludar('Alfred')).toBe('Hola Alfred')
    })
    it('debe retornar "Hola Evelyn"', function () {
        expect(saludar('Evelyn')).toBe('Hola Evelyn')
    })
})