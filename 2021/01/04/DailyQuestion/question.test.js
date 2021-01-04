var { fib } = require('./question.js');

describe('20210104 每日一题', () => {
  test('示例 1', function() {
    expect(fib(2)).toBe(1);
  });
  test('示例 2', function() {
    expect(fib(3)).toBe(2);
  });
  test('示例 3', function() {
    expect(fib(4)).toBe(3);
  })
});