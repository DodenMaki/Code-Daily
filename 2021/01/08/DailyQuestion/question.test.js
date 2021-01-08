var { rotate } = require('./question.js');

describe('20210108 每日一题', () => {
  test('示例 1', function () {
    expect(rotate([1,2,3,4,5,6,7], 3)).toEqual([5,6,7,1,2,3,4]);
  });
  test('示例 2', function () {
    expect(rotate([-1,-100,3,99], 2)).toEqual([3,99,-1,-100]);
  });
});