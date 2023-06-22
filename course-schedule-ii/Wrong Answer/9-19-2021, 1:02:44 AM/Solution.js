// https://leetcode.com/problems/course-schedule-ii

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// var findOrder = function(numCourses, prerequisites) {
//     let isPossible = true
//     let s = []
    
//     if (prerequisites.length === 0) {
//         for (let i = 0; i < numCourses; i++) {
//             s.push(i)
//         }
//         return s
//     }
    
//     let adjList = new Map()
    
//     const addNode = (course) => {
//         adjList.set(course, [])
//     }
    
//     const addEdge = (edge1, edge2) => {
//         adjList.get(edge2).push(edge1)
//     }
    
//     const dfs = (start, map, visited = new Map()) => {
//         visited.set(start)
//         const edges = map.get(start)
        
//         for (edge of edges) {
//             if (!visited.has(edge)) dfs(edge, map, visited)
            
//         }
       
//         s.push(start)
      
        
//     }
    
//     for (let i = 0; i < numCourses; i++) {
//         addNode(i)
//     }
    
//     for (let i = 0; i < prerequisites.length; i++) {
//         addEdge(prerequisites[i][0], prerequisites[i][1])
//     }
    
//     console.log(adjList)
    
//     dfs(prerequisites[0][1], adjList)

//     return (s.reverse())
   
// };

// var findOrder = function(numCourses, prerequisites) {
//     let s = []
//     let adjList = new Map()
    
//     const addNode = (course) => {
//         adjList.set(course, [])
//     }
    
//     const addEdge = (edge1, edge2) => {
//         adjList.get(edge2).push(edge1)
//     }
    
//     const dfs = (start, map, visited = new Set(), cycle = new Set()) => {
//         if (cycle.has(start)) return false
//         if (visited.has(start)) return true
        
//         cycle.add(start)
//         visited.add(start)
        
//         const edges = map.get(start)
        
//         for (edge of edges) {
//             if (!dfs(edge, map, visited, cycle)) return false
//             continue
//         }
        
//         cycle.delete(start)
//         s.push(start)
        
//         return true
   
//     }
    
//     for (let i = 0; i < numCourses; i++) {
//         addNode(i)
//     }
    
//     for (let i = 0; i < prerequisites.length; i++) {
//         addEdge(prerequisites[i][0], prerequisites[i][1])
//     }
    
//     for (let i = 0; i < numCourses; i++) {
//        if (!dfs(i, adjList)) return []
//     }
    
//     return s.reverse()
// }

var findOrder = function(numCourses, prerequisites) {
    const adjList = new Map()
    const s = []
    
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
    
    //console.log(adjList)
    dfs(0)
    return [...seen].reverse()
}