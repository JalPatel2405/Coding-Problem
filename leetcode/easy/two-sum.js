/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let result = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                result = [i, j];
                break;
            }
        }
    }

    return result;
};

// Test cases 
// 1.
var nums = [2,7,11,15];
var target = 9;
console.log(twoSum(nums, target));
// Output: [0,1]

//2. 
var nums = [3,2,4]; 
var target = 6;
console.log(twoSum(nums, target));
// Output: [1,2]

var nums = [3,3]; 
var target = 6;
console.log(twoSum(nums, target));
// Output: [0,1]