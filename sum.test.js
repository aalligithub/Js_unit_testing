const functions = require('./sum')

test('Adds two numbers' , () => {
    expect(functions.sum(1, 2)).toBe(3)
})

test('Checks if balls are big', () => {
    expect(functions.ballsFunc('Balls')).toEqual('very big Balls')
})