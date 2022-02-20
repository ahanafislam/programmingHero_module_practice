// This Function Will Find Second Largest number from array
function secondLargestNum(nums) {
    let max = nums[0];

    for(let i = 0; i < nums.length; i++) {
        if(max < nums[i]) {
            max = nums[i];
        }
    }

    nums.forEach(val => {
        if(max === val) {
            nums.splice(nums.indexOf(max), 1);
        }
    });

    let second_max = nums[0];
    for(let i = 0; i < nums.length; i++) {
        if(second_max < nums[i]) {
            second_max = nums[i];
        }
    }

    return second_max;
}

let arr = [2,3,6,6,5];
console.log(secondLargestNum(arr));
