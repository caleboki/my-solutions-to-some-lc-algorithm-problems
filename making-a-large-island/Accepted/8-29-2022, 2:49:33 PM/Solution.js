// https://leetcode.com/problems/making-a-large-island

/**
 * @param {number[][]} grid
 * @return {number}
 */
// var largestIsland = function(grid) {
//     let rows = grid.length, cols = grid[0].length, visited = new Set(), ans = 0, hasZero = false
    
//     const dfs = (matrix, x, y, r, c, visited) => {
//         let pos = x + ',' + y 
        
//         if (x > 0 || x <= r || y > 0 || y <= c || grid[x][y] === 1 || !visited.has(pos)) {
//             visited.add(pos)
            
//             dfs(grid, x+1, y, r, c, visited)
//             dfs(grid, x-1, y, r, c, visited)
//             dfs(grid, x, y+1, r, c, visited)
//             dfs(grid, x, y-1, r, c, visited)
//         }
        
//         return visited.size 
//     }
    
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (grid[i][j] === 0) {
//                 hasZero = true
//                 grid[i][j] = 1
//                 ans = Math.max(ans, dfs(grid, i, j, rows, cols, visited))
//                 grid[i][j] = 0
//             }
//         }
//     }
//     return hasZero ? ans : rows*rows
    
// };

// const largestIsland = (grid) => {
//     let maxArea = 0
    
//     let rows = grid.length, cols = grid[0].length, directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    
//     let islandId = -1, islandAreas = {}
    
// //     let dfs = (matrix, x, y) => {
// //         if (x < 0 || x >= rows || y < 0 || y >= cols || matrix[x][y] !== 1) return 0
        
// //         matrix[x][y] = islandId
// //         let area = 1
        
// //         area += dfs(matrix, x+1, y)
// //         area += dfs(matrix, x-1, y)
// //         area += dfs(matrix, x, y+1)
// //         area += dfs(matrix, x, y-1)
        
// //         return area
        
// //     }
    
//     let dfs = (matrix, x, y) => {
//         if (0 <= x && x < rows && 0 <= y && y < cols && matrix[x][y] === 1) {
//             matrix[x][y] = islandId
//             let area = 1
            
//             for (let [a, b] of directions) {
//                 area += dfs(matrix, x+a, y+b)
//             }
//             return area
            
            
//         } else {
//             return 0
//         }
        
       
        
//     }
    
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (grid[i][j] === 1) {
//                 let islandArea = dfs(grid, i, j)
//                 islandAreas[islandId] = islandArea
//                 islandId -= 1
//             }
            
//         }
//     }
    
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (grid[i][j] === 0) {
//                 let area = 1
                
//                 let surrounding = new Set()
                
//                 for (let [x, y] of directions) {
//                     let newX = i + x
//                     let newY = j + y
                    
//                     // if (newX < 0 || newX >= rows || newY < 0 || newY >= cols || grid[newX][newY] === 0) {
//                     //     continue
//                     // }
                    
//                     if (0 <= newX && newX < rows && 0 <= newY && newY < cols && grid[newX][newY] !== 0) {
//                         surrounding.add(grid[newX][newY])
//                     }
                    
//                     for (let i of surrounding) area += islandAreas[i]
                    
//                     maxArea = Math.max(maxArea, area)
                    
                    
//                 }
                
//             }
//         }
//     }
    
//     return maxArea === 0 ? rows * rows : maxArea
    
// }

const largestIsland = function (grid) {

	const islandSizes = {}
	let maxIslandSize = 0
	//make an island ID to differentiate each island
	let islandID = -1
	const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

	//get the size of each existing island
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			const tile = grid[row][col]
			//if the current tile is untraversed land
			if (tile === 1) {
				const islandSize = getIslandSize(row, col)
				//set max island size to the new maximum island size
				maxIslandSize = Math.max(islandSize, maxIslandSize)
				//increment the islandID 
				islandID--
			}
		}
	}

	//iterate through the grid and change each water tile and see if the island length created is more than the max island size
	for (let row = 0; row < grid.length; row++) {
		for (let col = 0; col < grid[0].length; col++) {
			const tile = grid[row][col]
			//if the tile is water
			if (tile === 0) {
				//calculate the new size of the island
				const newIslandSize = getNewIslandSize(row, col)
				//set max island size to the new maximum island size
				maxIslandSize = Math.max(newIslandSize, maxIslandSize)
			}
		}
	}

	//return max island size
	return maxIslandSize

	function getIslandSize(row, col) {
		//if the tile is not untraversed land, return
		if (grid[row]?.[col] !== 1) {
			return 0
		}
		//set the tile to the new islandID
		grid[row][col] = islandID

		//if island doesn't exist in the hashmap yet
		if (islandSizes[islandID] === undefined) {
			//add it with a value of 1
			islandSizes[islandID] = 1
		}
		else {
			//increment the island size in the hashmap
			islandSizes[islandID]++
		}
		//continue in the 4 cardinal directions
		directions.forEach(([rowMod, colMod]) => getIslandSize(row + rowMod, col + colMod))
		//return the island size
		return islandSizes[islandID]
	}

	function getNewIslandSize(row, col) {
		const visited = new Set()
		//start island size at one since  a water tile changed to land
		let totalArea = 1
		//look in each cardinal direction for islands
		directions.forEach(([rowMod, colMod]) => {
			const islandID = grid[row + rowMod]?.[col + colMod]
			//if the islandID exists and is not water and the island has not been counted yet
			if (islandID !== undefined && islandID !== 0 && !visited.has(islandID)) {
				//add the island size to the total
				totalArea += islandSizes[islandID]
				//add the island to the visited island set
				visited.add(islandID)
			}
		})
		//return the new island size
		return totalArea
	}
};