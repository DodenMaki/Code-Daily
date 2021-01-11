var { smallestStringWithSwaps } = require('./question.js');

describe('20210111 每日一题', () => {
  test('示例 1', function () {
    expect(smallestStringWithSwaps('dcab', [[0,3],[1,2]])).toBe('bacd');
  });
  test('示例 2', function () {
    expect(smallestStringWithSwaps('dcab', [[0,3],[1,2],[0,2]])).toBe('abcd');
  });
  test('示例 3', function () {
    expect(smallestStringWithSwaps('cba', [[0,1],[1,2]])).toBe('abc');
  });
});