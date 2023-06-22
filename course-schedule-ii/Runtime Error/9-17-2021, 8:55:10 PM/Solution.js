// https://leetcode.com/problems/course-schedule-ii

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let s = []
    let adjList = new Map()
    
    const addNode = (course) => {
        adjList.set(course, [])
    }
    
    const addEdge = (edge1, edge2) => {
        adjList.get(edge2).push(edge1)
    }
    
    const dfs = (start, map, visited = new Set()) => {
        visited.add(start)
        const edges = map.get(start)
        
        for (edge of edges) {
            if (!visited.has(edge)) dfs(edge, map, visited)
        }
        s.push(start)
    }
    
    for (let i = 0; i < numCourses; i++) {
        addNode(i)
    }
    
    for (let i = 0; i < prerequisites.length; i++) {
        addEdge(prerequisites[i][0], prerequisites[i][1])
    }
    
    dfs(prerequisites[0][1], adjList)
    
    //console.log(adjList)
    return (s.reverse())
   
};