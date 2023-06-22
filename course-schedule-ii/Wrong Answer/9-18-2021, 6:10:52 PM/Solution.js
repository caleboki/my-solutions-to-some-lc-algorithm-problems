// https://leetcode.com/problems/course-schedule-ii

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let isPossible = true
    let s = []
    
    if (prerequisites.length === 0) {
        for (let i = 0; i < numCourses; i++) {
            s.push(i)
        }
        return s
    }
    
    let adjList = new Map()
    
    const addNode = (course) => {
        adjList.set(course, [])
    }
    
    const addEdge = (edge1, edge2) => {
        adjList.get(edge2).push(edge1)
    }
    
    const dfs = (start, map, visited = new Map()) => {
        visited.set(start)
        const edges = map.get(start)
        
        for (edge of edges) {
            if (!visited.has(edge)) {
                dfs(edge, map, visited)
                if (s=[]) return
            } else if (s.includes(edge)) {
                s = []
                return
            }
        }
       
        s.push(start)
      
        
    }
    
    for (let i = 0; i < numCourses; i++) {
        addNode(i)
    }
    
    for (let i = 0; i < prerequisites.length; i++) {
        addEdge(prerequisites[i][0], prerequisites[i][1])
    }
    
    console.log(adjList)
    
    dfs(prerequisites[0][1], adjList)

    return (s.reverse())
   
};