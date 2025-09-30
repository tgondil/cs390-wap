# PSO: LeetCode in JavaScript

## Overview

Welcome to your LeetCode Problem Solving Overview! In this PSO, you'll solve 4 carefully selected LeetCode problems that will help you master fundamental JavaScript concepts while building problem-solving skills.

**Goal:** Get comfortable with JavaScript by solving real coding interview problems. You'll practice arrays, objects, loops, conditionals, and common data structures.

**Time:** ~40 minutes

**Note:** You'll be solving these problems directly on LeetCode.com

---

## Problems

### 1. Two Sum (LeetCode #1)

**Difficulty:** Easy  
**Link:** [https://leetcode.com/problems/two-sum/description/](https://leetcode.com/problems/two-sum/description/)

#### Problem Statement

Given an array of integers `nums` and an integer `target`, return the **indices** of the two numbers that add up to the target.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

#### Example

```javascript
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9

Input: nums = [3, 2, 4], target = 6
Output: [1, 2]

Input: nums = [3, 3], target = 6
Output: [0, 1]
```

#### What You'll Practice

- **Arrays:** Accessing elements by index
- **Loops:** Iterating through arrays
- **Objects:** Using objects as hash maps for O(1) lookups
- **Conditionals:** Checking if conditions are met
- **Return statements:** Returning the correct answer

#### Starter Code

```javascript
function twoSum(nums, target) {
  // Your code here
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));        // [1, 2]
console.log(twoSum([3, 3], 6));           // [0, 1]
```

#### Hints

<details>
<summary>Hint 1: Brute Force Approach</summary>
Try using two nested loops to check every pair of numbers. This works but is slow (O(n²)).
</details>

<details>
<summary>Hint 2: Optimal Approach</summary>
Use an object to store numbers you've seen and their indices. For each number, check if (target - current number) exists in the object.
</details>

---

### 2. Valid Parentheses (LeetCode #20)

**Difficulty:** Easy  
**Link:** [https://leetcode.com/problems/valid-parentheses/description/](https://leetcode.com/problems/valid-parentheses/description/)

#### Problem Statement

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

#### Example

```javascript
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false

Input: s = "([)]"
Output: false

Input: s = "{[]}"
Output: true
```

#### What You'll Practice

- **Strings:** Iterating through strings character by character
- **Stacks:** Using arrays with `push()` and `pop()` as a stack
- **Objects:** Creating lookup tables for bracket matching
- **Logic:** Understanding how matching brackets work

#### Starter Code

```javascript
function isValid(s) {
  // Your code here
}

// Test cases
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));      // true
```

#### Hints

<details>
<summary>Hint 1: Stack Concept</summary>
When you see an opening bracket, push it onto a stack. When you see a closing bracket, check if it matches the most recent opening bracket (top of stack).
</details>

<details>
<summary>Hint 2: Matching Pairs</summary>
Create an object to map closing brackets to opening brackets:
```javascript
const pairs = { ')': '(', '}': '{', ']': '[' };
```
</details>

<details>
<summary>Hint 3: Edge Cases</summary>
What if the string is empty? What if there are unmatched brackets left on the stack at the end?
</details>

---

### 3. Group Anagrams (LeetCode #49)

**Difficulty:** Medium  
**Link:** [https://leetcode.com/problems/group-anagrams/description/](https://leetcode.com/problems/group-anagrams/description/)

#### Problem Statement

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An **anagram** is a word formed by rearranging the letters of another word, using all the original letters exactly once.

#### Example

```javascript
Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

Input: strs = [""]
Output: [[""]]

Input: strs = ["a"]
Output: [["a"]]
```

#### What You'll Practice

- **Objects:** Using objects where keys are strings and values are arrays
- **Arrays:** Pushing elements into arrays stored in objects
- **String methods:** `.split()`, `.sort()`, `.join()`
- **Loops:** Iterating through arrays
- **Object.values():** Converting object values to an array

#### Starter Code

```javascript
function groupAnagrams(strs) {
  // Your code here
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams([""]));
// [[""]]

console.log(groupAnagrams(["a"]));
// [["a"]]
```

#### Key Insight

Two words are anagrams if they have the same letters when sorted:
- "eat" → "aet"
- "tea" → "aet"
- "tan" → "ant"

Use the sorted string as a key in an object!

#### Hints

<details>
<summary>Hint 1: Sorting Strings</summary>
To sort a string in JavaScript:
```javascript
const sorted = str.split('').sort().join('');
```
</details>

<details>
<summary>Hint 2: Object Structure</summary>
Create an object like:
```javascript
{
  "aet": ["eat", "tea", "ate"],
  "ant": ["tan", "nat"],
  "abt": ["bat"]
}
```
</details>

<details>
<summary>Hint 3: Return Format</summary>
Use `Object.values(map)` to convert the object into an array of arrays.
</details>

---

### 4. Top K Frequent Elements (LeetCode #347)

**Difficulty:** Medium  
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/description/](https://leetcode.com/problems/top-k-frequent-elements/description/)

#### Problem Statement

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.

#### Example

```javascript
Input: nums = [1, 1, 1, 2, 2, 3], k = 2
Output: [1, 2]

Input: nums = [1], k = 1
Output: [1]

Input: nums = [4, 1, -1, 2, -1, 2, 3], k = 2
Output: [-1, 2]
```

#### What You'll Practice

- **Objects:** Creating frequency maps (counting occurrences)
- **Object.entries():** Converting objects to arrays of [key, value] pairs
- **Array.sort():** Sorting arrays with custom comparators
- **Array.slice():** Extracting portions of arrays
- **Array.map():** Transforming array elements

#### Starter Code

```javascript
function topKFrequent(nums, k) {
  // Your code here
}

// Test cases
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));  // [1, 2]
console.log(topKFrequent([1], 1));                  // [1]
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));  // [-1, 2]
```

#### Approach

1. **Count frequencies:** Create an object that maps each number to its frequency
2. **Convert to array:** Use `Object.entries()` to get [number, frequency] pairs
3. **Sort:** Sort by frequency (descending)
4. **Extract top K:** Take the first k elements and extract just the numbers

#### Hints

<details>
<summary>Hint 1: Frequency Map</summary>
Create an object to count occurrences:
```javascript
const freq = {};
for (const num of nums) {
  freq[num] = (freq[num] || 0) + 1;
}
```
</details>

<details>
<summary>Hint 2: Sorting by Frequency</summary>
Sort entries by frequency (descending):
```javascript
const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
```
</details>

<details>
<summary>Hint 3: Extracting Results</summary>
Take first k elements and map to get just the numbers:
```javascript
return sorted.slice(0, k).map(entry => Number(entry[0]));
```
</details>

---

## JavaScript Concepts Reference

### Arrays

```javascript
// Creating arrays
const arr = [1, 2, 3];

// Accessing elements
const first = arr[0];

// Array methods
arr.push(4);           // Add to end
arr.pop();             // Remove from end
arr.slice(0, 2);       // Get subarray [1, 2]
arr.map(x => x * 2);   // Transform each element
```

### Objects (Hash Maps)

```javascript
// Creating objects
const obj = {};
const obj2 = { key: 'value' };

// Adding/accessing properties
obj['key'] = 'value';
obj.key = 'value';
const value = obj['key'];

// Checking if key exists
if ('key' in obj) { }
if (obj['key'] !== undefined) { }

// Object methods
Object.keys(obj);      // ['key1', 'key2', ...]
Object.values(obj);    // [value1, value2, ...]
Object.entries(obj);   // [['key1', value1], ['key2', value2], ...]
```

### Loops

```javascript
// For loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// For...of loop (iterate over values)
for (const item of arr) {
  console.log(item);
}

// For...in loop (iterate over keys)
for (const key in obj) {
  console.log(key, obj[key]);
}
```

### String Methods

```javascript
const str = "hello";

str.split('');         // ['h', 'e', 'l', 'l', 'o']
str.length;            // 5
str[0];                // 'h'
str.charAt(0);         // 'h'

// Array to string
['h', 'i'].join('');   // 'hi'
```

---

## How to Submit

Solve all 4 problems directly on LeetCode.com using JavaScript. Once you've solved them:

1. Take a screenshot of your accepted solutions on LeetCode
2. Submit the screenshots showing all 4 problems marked as "Accepted"

**Goal Time Complexity:**
- Two Sum: O(n)
- Valid Parentheses: O(n)
- Group Anagrams: O(n * k log k) where k is max string length
- Top K Frequent: O(n log n)

Good luck! 🚀 