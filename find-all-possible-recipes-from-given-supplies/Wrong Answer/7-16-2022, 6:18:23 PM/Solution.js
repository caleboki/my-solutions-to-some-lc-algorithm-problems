// https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies

/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    let ingredientsMap = {}, res = []
    
    for (let i = 0; i < ingredients.length; i++) {
        ingredientsMap[i] = []
        for (let j = 0; j < ingredients[i].length; j++) {
            ingredientsMap[i].push(ingredients[i][j])
        }
    }
    
    for (let i in recipes) {
        if (i in ingredientsMap) res.push(recipes[i])
    }
    
    return res
    
    console.log(ingredientsMap)
    
};