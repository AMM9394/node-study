/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = [];
  nums.map((i1, k1) => {
    nums.map((i2,k2)=>{
      if (k2>k1) {
        if (i1+i2===target)
          result = [k1,k2];
      }
    })
  });
  return result;
};

const nums =[2, 11, 15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,7];
const target = 9;
console.time('time');
const result = twoSum(nums,target);
console.log(result);
console.timeEnd('time');
