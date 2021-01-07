var { findCircleNum } = require('./question.js');

describe('20210107 每日一题', () => {
  test('示例 1', function () {
    expect(findCircleNum([[1,1,0],[1,1,0],[0,0,1]])).toBe(2);
  });
  test('示例 2', function () {
    expect(findCircleNum([[1,0,0],[0,1,0],[0,0,1]])).toBe(3);
  });
});