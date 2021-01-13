/**
 * 684. 冗余连接
 * LeetCode：https://leetcode-cn.com/problems/redundant-connection/
 */

/**
 * 在本问题中, 树指的是一个连通且无环的无向图。
 * 输入一个图，该图由一个有着N个节点 (节点值不重复1, 2, ..., N) 的树及一条附加的边构成。附加的边的两个顶点包含在1到N中间，这条附加的边不属于树中已存在的边。
 * 结果图是一个以边组成的二维数组。每一个边的元素是一对[u, v] ，满足 u < v，表示连接顶点u 和v的无向图的边。
 * 返回一条可以删去的边，使得结果图是一个有着N个节点的树。如果有多个答案，则返回二维数组中最后出现的边。答案边 [u, v] 应满足相同的格式 u < v。
 * 
 * 示例 1：
 * 输入：[[1,2], [1,3], [2,3]]
 * 输出：[2,3]
 * 解释：给定的无向图为:
          1
         / \
        2 - 3
 * 示例 2：
 * 输入：[[1,2], [2,3], [3,4], [1,4], [1,5]]
 * 输出：[1,4]
 * 解释：给定的无向图为:
 *      5 - 1 - 2
            |   |
            4 - 3
 */

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    // 边的数量就等于节点的数量
    const nodesCount = edges.length;
    // 数组存储并查集
    const parent = new Array(nodesCount + 1).fill(0).map((value, index) => index);

    for (let i = 0; i < nodesCount; i++) {
        // 当前遍历的边
        const edge = edges[i];
        // 当前边连接的两个节点
        const node1 = edge[0], node2 = edge[1];
        // 如果两个节点不属于相同的联通点，则说明这两个定点之间在遍历到该条边不联通，现在合并这个联通
        if (find(parent, node1) != find(parent, node2)) {
            union(parent, node1, node2);
        // 如果属于相同联通点，说明这点条就是多出来的这条边
        } else {
            return edge;
        }
    }
    return [0];
};

const union = (parent, index1, index2) => {
    parent[find(parent, index1)] = find(parent, index2);
}

const find = (parent, index) => {
    if (parent[index] !== index) {
        parent[index] = find(parent, parent[index]);
    }
    return parent[index];
}

module.exports = {
  findRedundantConnection,
}
