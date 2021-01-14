var { prefixesDivBy5 } = require('./question.js');

describe('20210114 每日一题', () => {
  test('示例 1', function () {
    expect(prefixesDivBy5([0,1,1])).toEqual([true,false,false]);
  });
  test('示例 2', function () {
    expect(prefixesDivBy5([1,1,1])).toEqual([false,false,false]);
  });
  test('示例 3', function () {
    expect(prefixesDivBy5([0,1,1,1,1,1])).toEqual([true,false,false,false,true,false]);
  });
  test('示例 4', function () {
    expect(prefixesDivBy5([1,1,1,0,1])).toEqual([false,false,false,false,false]);
  });
});