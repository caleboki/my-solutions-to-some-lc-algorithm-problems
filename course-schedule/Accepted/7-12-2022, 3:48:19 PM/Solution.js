// https://leetcode.com/problems/course-schedule

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adjList = new Map()
    
    const seeing = new Set()
    const seen = new Set()
    
    const addNode = (course) => {
        adjList.set(course, [])
    }
    
    const addEdge = (edge1, edge2) => {
        adjList.get(edge2).push(edge1)
    }
    
    const dfs = (course) => {
        if (seeing.has(course)) return false
        if (seen.has(course)) return true
        
        seeing.add(course)
        
        const edges = adjList.get(course)
        
        for (let edge of edges) {
            if (!dfs(edge)) return false
        }
        
        seeing.delete(course)
        seen.add(course)
        
        return true
    }
    
    for (let i = 0; i < numCourses; i++) {
        addNode(i)
    }
    
    for (let i = 0; i < prerequisites.length; i++) {
        addEdge(prerequisites[i][0], prerequisites[i][1])
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false
    }
    
    return true
    
};