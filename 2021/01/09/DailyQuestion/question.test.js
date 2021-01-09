var { maxProfit } = require('./question.js');

describe('20210109 每日一题', () => {
  test('示例 1', function () {
    expect(maxProfit([3,3,5,0,0,3,1,4])).toBe(6);
  });
  test('示例 2', function () {
    expect(maxProfit([1,2,3,4,5])).toBe(4);
  });
  test('示例 3', function () {
    expect(maxProfit([7,6,4,3,1] )).toBe(0);
  });
  test('示例 4', function () {
    expect(maxProfit([1] )).toBe(0);
  });
});