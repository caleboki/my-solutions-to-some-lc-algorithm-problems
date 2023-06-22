// https://leetcode.com/problems/most-stones-removed-with-same-row-or-column

/**
 * @param {number[][]} stones
 * @return {number}
 */
//Answer = number of stones - number of connected components
const removeStones = stones => {
	const visited = new Set()
	let valid = 0

  // find and remove stones that have same row and col
	const traverse = (row, col) => {
		const key = `${row}-${col}`

		if (visited.has(key)) return

		visited.add(key) // mark visited
		for (const [x, y] of stones) {
			// if row or col is same, should be removed
			if (row === x || col === y) traverse(x, y);
		}
	};

	for (const [x, y] of stones) {
		const key = `${x}-${y}`

		if (visited.has(key)) continue

		traverse(x, y)
		valid++
	}

  // subtract number of valid nodes from total number of stones
	return stones.length - valid;
};

// const removeStones = (stones) => {
//     let visited = new Set(), count = 0
    
//     const buildGraph = (edges, map = new Map()) => {
//         for (let i = 0; i < edges.length; i++) {
//             map.set(i, [])
            
//             let [parent, child] = edges[i]
            
//             if (map.has(parent)) map.get(parent).push(child)
//         }
        
//         return map
//     }
    
//     let graph = buildGraph(stones)
//     console.log(graph)
    
//     return stones.length - count
// }