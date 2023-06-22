// https://leetcode.com/problems/minimum-cost-to-connect-sticks

/**
 * @param {number[]} sticks
 * @return {number}
 */

function quickSort(data) {
	if (data.length <= 1){
  	return data;
  }
  
  let pivot = data.pop();
  let left = [];
  let right = [];
  let newData = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] < pivot) {
      left.push(data[i])
    } else {
      right.push(data[i])
    }
  }
  
  return newData.concat(quickSort(left), pivot, quickSort(right))
}

var connectSticks = function(sticks) {
    var sortedSticks = quickSort(sticks);
    var sum = 0;
    for (var i = 0; i < sortedSticks.length; i++) {
        sum += sortedSticks[i];
    }
    
    sortedSticks.pop();
    
    for (var i = 0; i < sortedSticks.length; i++) {
        sum += sortedSticks[i];
    }
    
    return sum;
    
};