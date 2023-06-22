// https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies

/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    let ingredientsMap = {}, suppliesSet = new Set(supplies), res = []
    
    for (let i = 0; i < ingredients.length; i++) {
        ingredientsMap[i] = []
        for (let j = 0; j < ingredients[i].length; j++) {
            ingredientsMap[i].push(ingredients[i][j])
        }
    }
    
    
    for (let i in recipes) {
        if (i in ingredientsMap) {
            
            for (let ingredient of ingredients) {
                if (!suppliesSet.has(ingredient)) break
            }
            res.push(recipes[i])
            
        }
    }
    console.log(ingredientsMap)
    return res
    
    
    
};