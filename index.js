//#1 Palindorme
//-------------
// Using inbuilt js methods.
// Reverse a number and get the same input as the checked number.
const isPalindrome = (num) => {
    return num < 0 ? false : num === +num.toString().split("").reverse().join("");
    // Ex: 121 === 121 => "121" => ["1", "2", "1"] => ["1", "2", "1"] => ["121"], + in the beginning to convert string to number if possible
}; 

//#2 Fibonacci
//------------
// Sum of last 2 numbers in list is called as fibonacci numbers.

const fib = function(num) {
    let arr = [0, 1];

    for (let i = 2; i <= num; i++){
        arr.push(arr[i - 1] + arr[i - 2]);
    };

    return arr;
};

// LeetCode highest optimized solution, used 30ms
var fib1 = function(n) {
    let dp = [];
    helper(n,dp);
    return dp[n] || n;
};

function helper(n,dp){
    if(n<=1){
        return n;
    }
    if(typeof dp[n] != 'undefined'){
        return dp[n];
    }

    return dp[n] = helper(n-1, dp) + helper(n-2, dp);
}

// Recursion can be used too...
 const fib2 = function(n){
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
 };

//#3 Valid Anagram
// --------------------
// When rearranging the value to be checked it intial value must be rearranged using the same letter only.

//31ms solution
function isAnagram(s, t){
    x = s.split("").sort().join("");
    y = t.split("").sort().join("");

    return x === y;
};

//11ms solution
function isAnagram1(s, t){
    if(s.length !== t.length) return false;

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < s.length; i++) {    
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    };

    for (const key in obj1) {
        if(obj1[key] !== obj2[key]) return false;
    };

    return true;
};

//#4 Two sums
//------------
//Given an array and a target, numbers in array must be sum up to be equal to the target

//Brute force solution
const twoSum = function(nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target) return [i, j];
        };
    };
};

//#5 Best time to buy and sell stock
//----------------------------------

// 5ms
const maxProfit = function(prices){
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let price of prices){
        if(price < minPrice){
            minPrice = price;
        };

        const profit = price - minPrice;

        if(profit > maxProfit){
            maxProfit = profit;
        };
    };

    return maxProfit;
}

//0ms solution
var maxProfit1 = function(prices) {
    let buyPrice = prices[0]
    let profit = 0
    for(let i=0;i<prices.length;i++){
      if(buyPrice>prices[i]){
          buyPrice = prices[i]
      }
      profit = Math.max(profit,prices[i]-buyPrice)
    }
    return profit
  };