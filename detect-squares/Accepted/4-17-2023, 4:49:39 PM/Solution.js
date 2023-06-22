// https://leetcode.com/problems/detect-squares

// var DetectSquares = function() {
    
// };

/** 
 * @param {number[]} point
 * @return {void}
 */
// DetectSquares.prototype.add = function(point) {
    
// };

/** 
 * @param {number[]} point
 * @return {number}
 */
// DetectSquares.prototype.count = function(point) {
    
// };

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */

 class DetectSquares {
    constructor() {
        this.points = new Map();
    }
    
    add(point) {
        const [x, y] = point;
        if (!this.points.has(x)) {
            this.points.set(x, new Map());
        }
        const yMap = this.points.get(x);
        yMap.set(y, (yMap.get(y) || 0) + 1);
    }
    
    count(point) {
        const [x, y] = point;
        let count = 0;
        if (this.points.has(x)) {
            const yMap = this.points.get(x);
            for (let [y2, freq2] of yMap) {
                if (y2 === y) continue;
                const dist = Math.abs(y2 - y);
                if (this.points.has(x + dist) && this.points.get(x + dist).has(y) && this.points.get(x + dist).get(y2)) {
                    count += freq2 * this.points.get(x + dist).get(y) * this.points.get(x + dist).get(y2);
                }
                if (this.points.has(x - dist) && this.points.get(x - dist).has(y) && this.points.get(x - dist).get(y2)) {
                    count += freq2 * this.points.get(x - dist).get(y) * this.points.get(x - dist).get(y2);
                }
            }
        }
        return count;
    }
}

