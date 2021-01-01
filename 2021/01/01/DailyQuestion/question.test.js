var { canPlaceFlowers } = require('./question.js');

describe('20210101 每日一题', () => {
  test('示例 1', function() {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBeTruthy();
  });
  test('示例 2', function () {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBeFalsy();
  });
});