var { sortItems } = require('./question.js');

describe('20210111 每日一题', () => {
  test('示例 1', function () {
    expect(sortItems(8, 2, [-1,-1,1,0,0,1,0,-1], [[],[6],[5],[6],[3,6],[],[],[]])).toEqual([6,3,4,1,5,2,0,7]);
  });
  test('示例 2', function () {
    expect(sortItems(8, 2, [-1,-1,1,0,0,1,0,-1], [[],[6],[5],[6],[3],[],[4],[]])).toEqual([]);
  });
});