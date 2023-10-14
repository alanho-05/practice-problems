/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    const array = [];
    const dupArray = [...nums];
    for (let i = 0; i < dupArray.length; i++) {
        if (array.includes(dupArray[i])) {
            const removeIndex = nums.indexOf(dupArray[i]);
            nums.splice(removeIndex, 1);
        } else {
            array.push(dupArray[i]);
        }
    }
}
