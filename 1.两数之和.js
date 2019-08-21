/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 * 
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 方法一
    var length = nums.length;
    for(var i=0; i<length; i++) {
        for(var j=i+1; j<length; j++ ){
            // console.log(nums[i] , nums[j]);
            if(target === nums[i] + nums[j]){
                return [i,j]
            }
        }
    }

    // 方法二
    var length = nums.length;
    var arr = [];
    for(var i=0; i<length; i++){
        if(target-nums[i] === nums[i+1]){
           arr.push(i,i+1);
         }
    }
    return arr;

    // 方法三
    var hash = {};
    var length = nums.length;
    for(var i = 0; i < length; i++){
        var el = nums[i];
        if(el in hash){
          return [~~hash[el], i];
        }
        hash[target - el] = i;
        
    } 
    return [];

};

