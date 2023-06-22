// https://leetcode.com/problems/flood-fill

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const visited = new Set();
    const targetColor = image[sr][sc];
    
    const dfs = (r, c) => {
        const node = `${r},${c}`;
        if(image[r] === undefined || image[r][c] === undefined || image[r][c] !== targetColor || visited.has(node))
            return;
        
        image[r][c] = newColor;
        visited.add(node);
        
        dfs(r+1,c);
        dfs(r-1,c);
        dfs(r,c+1);
        dfs(r,c-1);
    };
    
    dfs(sr, sc);
    return image;
};