// https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies

/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    let ingredientsMap = {}, suppliesSet = new Set(supplies), res = [], adjList = {}
    
    for (let i in recipes) adjList[recipes[i]] = ingredients[i]
    
    let queue = recipes
    
    while (queue.length) {
        const current = queue.shift()
        const ingredients = adjList[current]
        let count = ingredients.length
        
        for (let ingredient of ingredients) {
            if (adjList[ingredient]) queue.push(ingredient)
            if (suppliesSet.has(ingredient)) count--
        }
        
        if (count === 0) res.push(current)
        
        
    }
    
    
    return res
    
    
    
};