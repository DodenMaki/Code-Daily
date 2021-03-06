/**
 * 399. 除法求值
 * LeetCode：https://leetcode-cn.com/problems/evaluate-division/
 */

/**
 * 给你一个变量对数组 equations 和一个实数值数组 values 作为已知条件，其中 equations[i] = [Ai, Bi] 和 values[i] 共同表示等式 Ai / Bi = values[i] 。每个 Ai 或 Bi 是一个表示单个变量的字符串。
 * 另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj = ? 的结果作为答案。
 * 返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。
 * 注意：输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。
 * 
 * 示例 1：
 * 输入：equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
 * 输出：[6.00000,0.50000,-1.00000,1.00000,-1.00000]
 * 解释：条件：a / b = 2.0, b / c = 3.0
        问题：a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
        结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]
 * 示例 2：
 * 输入：equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
 * 输出：[3.75000,0.40000,5.00000,0.20000]
 * 示例 3：
 * 输入：equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
 * 输出：[0.50000,2.00000,-1.00000,-1.00000]
 */

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = (equations, values, queries)=>{
  var adj = {}, res0 = 1, ans = [], res;
  for (var i = 0; i < equations.length; i++) {
    if (!adj[equations[i][0]]) {
      adj[equations[i][0]] = [[equations[i][1], values[i]]];
    } else {
      adj[equations[i][0]].push([equations[i][1], values[i]]);
    }

    if (!adj[equations[i][1]]) {
      adj[equations[i][1]] = [[equations[i][0], Number((1 / values[i]))]];
    } else {
      adj[equations[i][1]].push([equations[i][0], Number((1 / values[i]))]);
    }
  }

  var dfsGetVal = function (st, ed, adj, map) {
    if (st === ed) {
      res = res0;
      return;
    }

    map.set(st, true);
    for (var i = 0; i < adj[st].length; i++) {
      if (!map.has(adj[st][i][0])) {
        res0 *= adj[st][i][1];
        dfsGetVal(adj[st][i][0], ed, adj, map);
        res0 /= adj[st][i][1];
      }
    }
  }

  for (var i = 0; i < queries.length; i++) {
    res0 = 1.0;
    if (!adj[queries[i][0]] || !adj[queries[i][1]]) {
      res = -1.0;
    } else {
      dfsGetVal(queries[i][0], queries[i][1], adj, new Map());
    }

    if (res === undefined) {
      ans[i] = -1.0;
    } else {
      ans[i] = res;
    }
  }

  return ans;
};

module.exports = {
  calcEquation,
}
