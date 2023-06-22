// https://leetcode.com/problems/employee-importance

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let map = new Map()
    
    for (let e of employees) map.set(e.id, e)
   
    const dfs = (id) => {
        let employee = map.get(id)
        let importance = employee.importance
    
        for (let subId of employee.subordinates) importance += dfs(subId)
        return importance
    }
    
    return dfs(id)
};

