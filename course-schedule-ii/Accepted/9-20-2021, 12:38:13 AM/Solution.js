// https://leetcode.com/problems/course-schedule-ii

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

var findOrder = function(numCourses, prerequisites) {
    
    const adjList = new Map()
    
    const seeing = new Set(), seen = new Set()
    
    const addNode = (course) => {
        adjList.set(course, [])
    }
    
    const addEdge = (edge1, edge2) => {
        adjList.get(edge2).push(edge1)
    }
    
    const dfs = (start) => {
        if (seen.has(start)) return true
        if (seeing.has(start)) return false
        
        seeing.add(start)
        //console.log(seeing)
        const edges = adjList.get(start)
        
        for (edge of edges) {
            if (!dfs(edge)) return false
        }
        
        seeing.delete(start)
        seen.add(start)
        
        return true
    }
    
    for (let i = 0; i < numCourses; i++) {
        addNode(i)
    }
    
    for (let i = 0; i < prerequisites.length; i++) {
        addEdge(prerequisites[i][0], prerequisites[i][1])
    }
    
    console.log(adjList)
    
    for (i = 0; i < numCourses; i++) {
        if (!dfs(i)) return []
    }
    return [...seen].reverse()
}