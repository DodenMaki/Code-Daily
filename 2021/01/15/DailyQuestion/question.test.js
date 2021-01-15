var { removeStones } = require('./question.js');

describe('20210115 每日一题', () => {
  test('示例 1', function () {
    expect(removeStones([[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]])).toBe(5);
  });
  test('示例 2', function () {
    expect(removeStones([[0,0],[0,2],[1,1],[2,0],[2,2]])).toBe(3);
  });
  test('示例 3', function () {
    expect(removeStones([[0,0]])).toBe(0);
  });
});