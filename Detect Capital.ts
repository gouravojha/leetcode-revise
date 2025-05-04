/**
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

 

Example 1:

Input: word = "USA"
Output: true
Example 2:

Input: word = "FlaG"
Output: false
*/


function detectCapitalUse(word: string): boolean {
    let upperCase = word.toUpperCase()
    let lowerCase = word.toLowerCase()
    let capitalize = lowerCase.slice(0,1).toUpperCase() + lowerCase.slice(1)

    return word == upperCase || word == lowerCase || word == capitalize
};