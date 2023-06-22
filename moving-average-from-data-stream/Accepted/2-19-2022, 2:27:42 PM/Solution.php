// https://leetcode.com/problems/moving-average-from-data-stream

class MovingAverage {
    /**
     * @param Integer $size
     */
    public $size, $data;
    
    function __construct($size) {
        $this->size = $size;
        $this->data = [];
    }
  
    /**
     * @param Integer $val
     * @return Float
     */
    function next($val) {
        array_push($this->data, $val);
        
        if (count($this->data) > $this->size) array_shift($this->data);
        
        $sum = array_sum($this->data);
        $result = $sum/count($this->data);
        
        return $result;
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * $obj = MovingAverage($size);
 * $ret_1 = $obj->next($val);
 */