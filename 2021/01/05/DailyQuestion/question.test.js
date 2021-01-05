var { largeGroupPositions } = require('./question.js');

describe('20210105 每日一题', () => {
  test('示例 1', function() {
    expect(largeGroupPositions('abbxxxxzzy')).toEqual([[3, 6]]);
  });
  test('示例 2', function() {
    expect(largeGroupPositions('abc')).toEqual([]);
  });
  test('示例 3', function() {
    expect(largeGroupPositions('abcdddeeeeaabbbcd')).toEqual([[3,5],[6,9],[12,14]]);
  });
  test('示例 4', function() {
    expect(largeGroupPositions('aba')).toEqual([]);
  })
});