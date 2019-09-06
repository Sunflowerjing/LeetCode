/**
 * 
 * 设计一个找到数据流中第K大元素的类（class）。注意是排序后的第K大元素，不是第K个不同的元素。
 * int k = 3;
 * int[] arr = [4,5,8,2];
 * KthLargest kthLargest = new KthLargest(3, arr);
 * kthLargest.add(3);   // returns 4
 * kthLargest.add(5);   // returns 5
 * kthLargest.add(10);  // returns 5
 * kthLargest.add(9);   // returns 8
 * kthLargest.add(4);   // returns 8
 * 
 */


 //  方法一
 /**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.nums = nums.sort((a,b) => (b-a)).slice(0,k);
    this.min = this.nums[k-1];
    this.k = k;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    var add = false;
    for(var i=0;i<this.k;i++){
        var el = this.nums[i];
        if(val >= el){
            add = true;
            this.nums.splice(i, 0, val);
            break;
        }
    }
    if(!add){
       this.nums.push(val);
    }
    if(this.nums.length > this.k){
       this.nums.length = this.k;
       this.min = this.nums[this.k - 1];
       return this.min; 
    }else {
       return this.nums[this.nums.length - 1];
    }
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */



  //  方法二
  /**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums.sort((a,b) => a-b);
    
};
/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let left = 0;
    let right = this.nums.length;
    while(left < right){
       var mid = Math.floor((right+left)/2);
       if(this.nums[mid] < val){
          left = mid + 1;
        } else {
            right = mid;
        }
    }
    this.nums.splice(left, 0 ,val);
    return this.nums[this.nums.length - this.k];
};
/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */