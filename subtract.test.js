const subtract = require('./subtract')

test('Subtracts two numbers' , () => {
    expect(subtract(5, 2)).toBe(3)
})