var { findRedundantConnection } = require('./question.js');

describe('20210113 每日一题', () => {
  test('示例 1', function () {
    expect(findRedundantConnection([[1,2], [1,3], [2,3]])).toEqual([2, 3]);
  });
  test('示例 2', function () {
    expect(findRedundantConnection([[1,2], [2,3], [3,4], [1,4], [1,5]])).toEqual([1, 4]);
  });
});