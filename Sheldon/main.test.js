const calcular = require('./main');

test('Si el número es 3 retorna true', () => {
  expect(calcular(3)).toBe(1);
});
