// https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times

/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    
    // Variables for tracking buf4's state
    this.buf4 = new Array(4);
    this.buf4_ptr = 0;
    this.buf4_size = 0;
    
    return function(buf, n) {
		// Variable for tracking the output array's state
        let buf_ptr = 0;
        
        // Keep looping until we've read the number of characters we want
        while(n > 0){
            // Find out how many characters are available to read in buf4
            const num_available = this.buf4_size - this.buf4_ptr;
            // Find out how many characters should we read from buf4
            // - If the number of characters we want "n" is less that what is available in buf4, we read "n" characters
            // - If the number of characters we want "n" is greater than what is available in buf4, we read to the end of buf4
            const num_to_get = Math.min(num_available, n);
            
            // Read "num_to_get" characters from buf4
            for(let i = 0; i < num_to_get; ++i){
                buf[buf_ptr] = this.buf4[this.buf4_ptr];
                ++buf_ptr;
                ++this.buf4_ptr;
                --n;
            }
            
            // Try to refill buf4 if it's empty
            if(this.buf4_ptr === this.buf4_size){
                this.buf4_size = read4(this.buf4);
                this.buf4_ptr = 0;
                // If we failed to fill buf4 with any characters then theres nothing more we can read ... stop looping and return
                if(this.buf4_size === 0){
                    break;
                }
            }
        }
        return buf_ptr;
    };
};