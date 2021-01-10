var { summaryRanges } = require('./question.js');

describe('20210110 每日一题', () => {
  test('示例 1', function () {
    expect(summaryRanges([0,1,2,4,5,7])).toEqual(["0->2","4->5","7"]);
  });
  test('示例 2', function () {
    expect(summaryRanges([0,2,3,4,6,8,9])).toEqual(["0","2->4","6","8->9"]);
  });
  test('示例 3', function () {
    expect(summaryRanges([])).toEqual([]);
  });
  test('示例 4', function () {
    expect(summaryRanges([-1])).toEqual(["-1"]);
  });
  test('示例 5', function () {
    expect(summaryRanges([0])).toEqual(["0"]);
  });
});