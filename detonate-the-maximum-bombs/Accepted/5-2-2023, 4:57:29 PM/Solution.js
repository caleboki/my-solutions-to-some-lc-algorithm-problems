// https://leetcode.com/problems/detonate-the-maximum-bombs

/**
 * @param {number[][]} bombs
 * @return {number}
 */
const maximumDetonation = (bombs) => {
  const dist = (x1, y1, x2, y2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)

  const dfs = (i, visited = new Set()) => {
    visited.add(i)
    let count = 1

    for (let j = 0; j < bombs.length; j++) {
      if (visited.has(j)) continue
      const [x1, y1, r1] = bombs[i]
      const [x2, y2] = bombs[j]
      const distance = dist(x1, y1, x2, y2)

      if (distance <= r1) count += dfs(j, visited)
    }
    return count
  };

  let maxDetonated = 0
  for (let i = 0; i < bombs.length; i++) {
    maxDetonated = Math.max(maxDetonated, dfs(i))
  }
  return maxDetonated
};


