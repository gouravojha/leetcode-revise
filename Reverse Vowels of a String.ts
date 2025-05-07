/** 
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"
*/


function reverseVowels(s: string): string {
    const vowelSet = new Set(['a','e','i','o','u','A','E','I','O','U'])
    let left = 0
    let right = s.length-1
    let sArr = s.split('')
    while(left < right){
        if(vowelSet.has(s[left]) && vowelSet.has(s[right])){
            let temp = sArr[left]
            sArr[left] = sArr[right]
            sArr[right] = temp
            right --
            left ++
        }else if(vowelSet.has(s[left]) && !vowelSet.has(s[right])){
            right --
        }else if(!vowelSet.has(s[left]) && vowelSet.has(s[right])){
            left ++
        }else{
            right --
            left ++
        }
    }
    console.log(sArr.join(''))
    return s
};