// https://leetcode.com/problems/rotting-oranges

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
  let adjList = new Map()
  let status = [0, 1, 2]


  for (let i = 0; i < status.length; i++) {
      addNode(adjList, status[i])
  }

  for (let i = 0; i < status.length; i++) {
      if (grid[i][i+1] !== undefined) addEdge(adjList, grid[i][i], grid[i][i+1])
      if (grid[i][i-1] !== undefined) addEdge(adjList, grid[i][i], grid[i][i-1])
      if (grid[i+1] !== undefined) addEdge(adjList, grid[i][i], grid[i+1][i])
      if (grid[i-1] !== undefined) addEdge(adjList, grid[i][i], grid[i-1][i])
  }


 return bfs(adjList, grid[0][0])
};

function addNode(list, node){
  list.set(node, [])
}

function addEdge(list, from, to) {
  list.get(from).push(to)
  list.get(to).push(from)

}

function bfs(list, start) {
  const visited = new Set()
  const queue = [start]
  let minutes = 0
  let freshOranges = 0

  while(queue.length > 0) {
      const orange = queue.shift()
      const children = list.get(orange)
      

      for (let i = 0; i < children.length; i++) {
          
          if (children[i] === 1) freshOranges++
          
          if (orange === 2 && children[i] !== 0) {
              children[i] = 2
              minutes++
              freshOranges--
          }

          if(!visited.has(children[i])) {
              visited.add(children[i])
              queue.push(children[i])
          }

      }
  }

  return freshOranges < 0 ? minutes : -1
}
