const calcular = require('./main');

test('Si el número es 3 retorna true', () => {
  expect(calcular(3)).toBe(0);
});


test('La función da si es número o no', () => {
  expect(calcular(7)).toBe(1);
});