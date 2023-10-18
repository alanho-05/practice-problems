/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    const copy = [...nums];
    for (let i = 0; i < nums.length; i++) {
        const newIndex = (i + k) % nums.length;
        nums[newIndex] = copy[i];
    }
}
