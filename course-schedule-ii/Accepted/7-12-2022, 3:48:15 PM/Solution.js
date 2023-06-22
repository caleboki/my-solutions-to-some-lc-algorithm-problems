// https://leetcode.com/problems/course-schedule-ii

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

//Approach: Create an adjacency list of courses and their pre-requisites. Detect if cycle //exists for each nos
var findOrder = function(numCourses, prerequisites) {
    const adjList = new Map()
    
    //POSSIBLE STATES: 
    //seeing: course has not been added to output, but added to cycle
    //seen: course has been added to output seen.reverse is output
    const seeing = new Set(), seen = new Set()
    
    const addNode = (course) => {
        adjList.set(course, [])
    }
    
    const addEdge = (edge1, edge2) => {
        adjList.get(edge2).push(edge1)
    }
    
    //detect cycle in graph. If there is a cycle return false
    const dfs = (start) => {
        if (seen.has(start)) return true
        if (seeing.has(start)) return false
        
        seeing.add(start)
       
        const edges = adjList.get(start)
        
        for (let edge of edges) {
            if (!dfs(edge)) return false
        }
        
        seeing.delete(start)
        seen.add(start)
        
        return true
    }
    
    //Build adjacency list
    for (let i = 0; i < numCourses; i++) {
        addNode(i)
    }
    
    //Add prerequisites as edge of courses
    for (let i = 0; i < prerequisites.length; i++) {
        addEdge(prerequisites[i][0], prerequisites[i][1])
    }
    
    for (i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [] //cycle exists hence returning empty array
    }
    return [...seen].reverse() //valid ordering is the reverse of the seen set
}