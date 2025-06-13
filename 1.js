"use strict";
function longestCommonPrefix(strs) {
    if (strs.length === 0)
        return "";
    let temp = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(temp) !== 0) {
            temp = temp.slice(0, -1);
            if (temp === "")
                return "";
        }
    }
    return temp;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["code", "coding", "coder"]));
