// https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies

/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    let ingredientsMap = {}, suppliesSet = new Set(supplies), visited = new Set(),  seeing = new Set(), res = [], adjList = {}
    
    for (let i in recipes) adjList[recipes[i]] = ingredients[i]
    console.log(adjList)
    let queue = recipes
    
    while (queue.length) {
        const current = queue.shift()
        const ingredients = adjList[current]
        let count = ingredients.length
        
        seeing.add(current)
        
        for (let ingredient of ingredients) {
            if (visited.has(ingredient)) {
                count--
                continue
            }
            if (seeing.has(ingredient)) break
            if (adjList[ingredient]) queue.push(ingredient)
            if (suppliesSet.has(ingredient)) count--
        }
        
        if (count === 0 && ingredients.length > 0) res.push(current)
        suppliesSet.add(current)
        
        seeing.delete(current)
        visited.add(current)
        
    }
    
    
    return res
    
    
    
};