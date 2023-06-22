// https://leetcode.com/problems/destination-city

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
   
    const adjList = new Map()
    let cities = []
    
    for (let i = 0; i < paths.length; i++) {   
        cities.push(...paths[i])
    }
    
    cities = new Set(cities)
    
    const addNode = (node) => {
        adjList.set(node, [])
    }
    
    const addEdge = (origin, destination) => {
        adjList.get(origin).push(destination)
    }
    
    cities.forEach(city => addNode(city))
    paths.forEach(path => addEdge(path[0], path[1]))
    
    for (let [key, value] of adjList) {
        if (value.length === 0) return key
    }  
};