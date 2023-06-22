// https://leetcode.com/problems/alien-dictionary

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let seeing = new Set(), seen = new Set()
    
    const buildGraph = () => {
        let adjList = new Map()
    
        for (let word of words) {
            for (let c of word) {
                if (!adjList.has(c)) adjList.set(c, new Set())
            }
        }
        
        for (let i = 0; i < words.length-1; i++) {
            let first = words[i], second = words[i+1]
            let minLength = Math.min(first.length, second.length)
            
            if (first.length > second.length && second.startsWith(first)) return ''
            
            for (let j = 0; j < minLength; j++) {
                if (first[j] !== second[j]) {
                    adjList.get(first[j]).add(second[j])
                    break
                }
            }
        }
        return adjList
    }
    
    let graph = buildGraph()
    console.log(graph)
    const dfs = (start) => {
        if (seen.has(start)) return true
        if (seeing.has(start)) return false
        
        seeing.add(start)
        
        let edges = graph.get(start)
        
        for (let edge of edges) {
            if (!dfs(edge)) return false
        }
            
        seeing.delete(start)
        seen.add(start)
        
        return true
    }
    
    
    for (let i of graph.keys()) if (!dfs(i)) return ''
    
    seen = Array.from(seen)
    let sb = ''
    
    for (let i = seen.length - 1; i >= 0; i--) sb += seen[i]
    return sb
};