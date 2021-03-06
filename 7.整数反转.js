/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 * 
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

 * 示例 1:
 * 输入: 123
 * 输出: 321
 * 
 * 示例 2:
 * 输入: -123
 * 输出: -321
 * 
 * 示例 3:
 * 输入: 120
 * 输出: 21
 * 注意:
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var el = String(x);
    var a = '';
    if(el[0] == '-'){
        a = '-'
        el = el.slice(1); // 截取字符串，索引为1和1之后的字符
    }
    var skip = true;
    for(var i = el.length; i--; ){
        var c = el[i];
        if(skip) {
            if(c === '0'){
                skip =true
            }else{
                skip = false
            }
        }
        if(!skip) {
            a += c;
        }
    }
    a =  Number(a);
    //The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
   //32位有符号整数的范围大概是-2^31 ~ 2^31-1
   if(a < -1 * 2**31){
        return 0
    }
    if(a > 2**31-1){
        return 0
    }
    return a
};

