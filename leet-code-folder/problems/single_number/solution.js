/**
 * @param {number[]} nums
 * @return {number}
 */

function singleNumber(nums) {
    const array = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (array.includes(nums[i])) {
            const index = array.indexOf(nums[i]);
            array.splice(index, 1);
        } else {
            array.push(nums[i]);
        }
    }
    
    const singleNumber = array[0];
    return singleNumber;
};