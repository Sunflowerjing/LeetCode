/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

 * 有效字符串需满足：

 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。

 * 示例 1:

 * 输入: "()"
 * 输出: true
 * 示例 2:

 * 输入: "()[]{}"
 * 输出: true
 * 示例 3:

 * 输入: "(]"
 * 输出: false
 * 示例 4:

 * 输入: "([)]"
 * 输出: false
 * 示例 5:

 * 输入: "{[]}"
 * 输出: true
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let len = s.length;
    let first = s[0];
    if(len === 0) return true;
    // 奇数或右括号开头肯定不符合
    if(len % 2 != 0 || [')', ']', '}'].indexOf(first) != -1 ) return false;
    // 栈，存入第一个字符。
    let stack = [first];
    const MAP = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    for(let i=1; i<len; i++) {
        let length = stack.length;
        let top = length > 0 ? stack[length - 1] : null;
        let now = s[i];
        console.log('MAP[now]', MAP[now]);
        if(MAP[now] === top){
            stack.pop();
        } else {
            stack.push(now); 
        }
    }
    return stack.length === 0;
};


var isValid = function(s) {
    var stack = [];
    var map = {
        '(':')',
        '[':']',
        '{':'}',
    }
    for(var g of s){
        if(g in map){
           stack.push(g); 
        } else {
            if( !stack.length || g != map[stack.pop()]) {
                return false
            }
        }
    }
   return !stack.length
};