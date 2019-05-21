/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var length = nums.length;
    for(var i=0; i<length; i++) {
        for(var j=i+1; j<length; j++ ){
            // console.log(nums[i] , nums[j]);
            if(target === nums[i] + nums[j]){
                return [i,j]
            }
        }
    }
};

