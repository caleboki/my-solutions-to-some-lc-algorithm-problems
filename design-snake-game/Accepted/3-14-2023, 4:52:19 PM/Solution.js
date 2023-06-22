// https://leetcode.com/problems/design-snake-game

/**
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
// var SnakeGame = function(width, height, food) {
    
// };

// /** 
//  * @param {string} direction
//  * @return {number}
//  */
// SnakeGame.prototype.move = function(direction) {
    
// };

/** 
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */

 class SnakeGame {
  constructor(width, height, food) {
    this.width = width;
    this.height = height;
    this.food = food;
    this.snake = [[0, 0]]; // initialize snake at top left corner
    this.score = 0;
    this.head = 0;
  }

  move(direction) {
    // calculate next head position
    let x = this.snake[this.head][0];
    let y = this.snake[this.head][1];
    if (direction === "U") x--;
    else if (direction === "D") x++;
    else if (direction === "L") y--;
    else if (direction === "R") y++;

    // check if next head position is out of bounds
    if (x < 0 || x >= this.height || y < 0 || y >= this.width) {
      return -1; // game over
    }

    // check if next head position collides with body
    for (let i = 0; i < this.snake.length - 1; i++) {
      if (this.snake[i][0] === x && this.snake[i][1] === y) {
        return -1; // game over
      }
    }

    // check if next head position is a food item
    if (this.food.length && this.food[0][0] === x && this.food[0][1] === y) {
      this.snake.unshift([x, y]); // add food to head of snake
      this.food.shift(); // remove food from list
      this.score++; // increase score
    } else {
      this.snake.pop(); // remove tail of snake
      this.snake.unshift([x, y]); // add head to front of snake
    }

    return this.score;
  }
}
