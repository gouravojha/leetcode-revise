/**
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

*/


function longestPalindrome(s: string): number {
    let hash =  {}
    let oddCount = 0
    for(let ele of s){
        if(hash[ele] !== undefined){
            hash[ele] += 1 
        }else{
            hash[ele] = 1
        }
    }

    let occurance:any = Object.values(hash)
    for(let ele of occurance){
        if(ele % 2 == 1){
            oddCount ++
        }
    }
    return oddCount > 1 ? s.length - (oddCount - 1) : s.length
};


// A palindrom can have exactly 0 or 1 odd occurance of a character.rest all occurance need to be even