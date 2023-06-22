// https://leetcode.com/problems/word-search-ii

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// var findWords = function(board, words) {
//     let rows = board.length, cols = board[0].length, visited = new Set(), trie = new Trie()
//     let output = []
    
//     const dfs = (grid, x, y, r, c, node, currentWord) => {
//         let pos = x + ',' + y
//         if (x < 0 || x >= r || y < 0 || y >= c || !trie.startsWith(grid[x][y]) || visited.has(pos)) {
//             return
//         }
//         visited.add(pos)
        
//         node = node.trie[board[x][y]]
//         //console.log(node.word)
//         currentWord += board[x][y]
        
//         if (node.word) output.push(currentWord)
        
//         dfs(grid, x+1, y, r, c, node, currentWord)
//         dfs(grid, x-1, y, r, c, node, currentWord)
//         dfs(grid, x, y+1, r, c, node, currentWord)
//         dfs(grid, x, y-1, r, c, node, currentWord)
        
//         visited.delete(pos)
//     }
    
//     for (let word of words) {
//         trie.insert(word)
//     }
    
    
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (trie.startsWith(board[i][j])) dfs(board, i, j, rows, cols, trie, '')
//         }
//     }
    
//     return output
// };


// class Trie {
//     constructor() {
//         this.trie = {}
//     }
//     insert(word) {
//         let cur = this.trie
//         for(let alpha of word){
//             if(!(alpha in cur)) cur[alpha] = {}
//             cur = cur[alpha]
//         }
//         cur.word = word
//     }
//     search(word) {
//         let cur = this.trie
//         for(let alpha of word){
//             if(!(alpha in cur)) return false
//             if(cur[alpha].word === word) return true
//             cur = cur[alpha]
//         }        
//         return false  
//     }
//     startsWith(prefix) {
//         let cur = this.trie
//         for(let alpha of prefix){
//             if(!(alpha in cur)) return false
//             cur = cur[alpha]
//         }
//         return true
//     }
// }

const findWords = (board, words) => {
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	const output = [];
	const root = {};

	const insert = word => {
		let node = root;

		for (const char of word) {
			if (!node[char]) node[char] = {};

			node = node[char];
		}

		node.isEnd = true;
	};

	const traverse = (node, x, y, word) => {
		if (node.isEnd) {
			output.push(word);
			node.isEnd = false; // prevent duplicates
		}

		// out of bounds || char DNE in Trie
		if (x < 0 || x >= board.length) return;
		if (y < 0 || y >= board[0].length) return;
		if (!node[board[x][y]]) return;

		const cv = board[x][y];
		board[x][y] = ''; // mark visited

    // traverse down Trie
		directions.forEach(([dx, dy]) => {
			traverse(node[cv], x + dx, y + dy, word + cv);
		});

		// reset board
		board[x][y] = cv;
	};

	// insert words into Trie
	for (const word of words) insert(word);

	// search words
	for (let r = 0; r < board.length; r++) {
		for (let c = 0; c < board[0].length; c++) {
			const cv = board[r][c];

			if (root[cv]) traverse(root, r, c, '');
		}
	}

	return output;
};