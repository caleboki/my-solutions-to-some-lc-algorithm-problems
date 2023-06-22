// https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies

/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
// var findAllRecipes = function(recipes, ingredients, supplies) {
//     let ingredientsMap = {}, suppliesSet = new Set(supplies), visited = new Set(),  seeing = new Set(), res = [], adjList = {}
    
//     for (let i in recipes) adjList[recipes[i]] = ingredients[i]
//     console.log(adjList)
//     let queue = recipes
    
//     while (queue.length) {
//         const current = queue.shift()
//         const ingredients = adjList[current]
//         let count = ingredients.length
        
//         //seeing.add(current)
        
//         for (let ingredient of ingredients) {
            
//             if (visited.has(ingredient)) {
//                 count--
//                 continue
//             }
//             if (seeing.has(ingredient)) break
//             if (adjList[ingredient]) queue.push(ingredient)
//             if (suppliesSet.has(ingredient)) count--
//         }
        
//         if (count === 0 && ingredients.length > 0) res.push(current)
//         suppliesSet.add(current)
        
//         seeing.delete(current)
//         visited.add(current)
        
//     }
//     return res
// };


const findAllRecipes = (recipes, ingredients, supplies) => {
    let suppliesSet = new Set(supplies), recipeMap = {}, result = []
    
    for (let i in recipes) recipeMap[recipes[i]] = ingredients[i]
    
    const canMake = (target, suppliesSet, recipeMap, visited = new Set()) => {
        if (suppliesSet.has(target)) return true
        if (visited.has(target)) return false
        if (!(target in recipeMap)) return false
        
        visited.add(target)
        
        for (let ingredient of recipeMap[target]) {
            if (!canMake(ingredient, suppliesSet, recipeMap, visited)) return false
        }
        
        suppliesSet.add(target)
        return true
    }
    
    for(let recipe in recipeMap) {
        if (canMake(recipe, suppliesSet, recipeMap)) result.push(recipe) 
    }
    
    return result
}