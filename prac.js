const digitalRoot = function(num) {
  let total = 0;
  while (num > 10) {
    total += num % 10;
    num = Math.floor(num/10);
  }
  total += num
  if (total > 9) {
    return digitalRoot(total);
  }
  return total;
};

// console.log(digitalRoot(1111));
// console.log(digitalRoot(555));

function caesarChipher (string, shift) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
  let res = "";
  string.split("").forEach((letter) => {
    if (letter !== " ") {
      let newIndex = (alphabet.indexOf(letter) + shift) % 26;
      letter = alphabet[newIndex];
    }
    res += letter;
  });
  return res;
}
// console.log(caesarChipher("abcdef", 5));
// console.log(caesarChipher("xyz", 3));

function longestCommon(str1, str2) {
  let shortest = (str1.length > str2.length ? str2 : str1);
  let longest = (str1.length > str2.length ? str1 : str2);
  let ans = "";
  for (let i = 0; i < shortest.length; i++) {
    for (let j = shortest.length - 1; j > i; j--) {
      let slice = shortest.slice(i, j);
      if (longest.includes(slice) && ans.length < slice.length) {
        ans = slice;
      }
    }
  }
  return ans;
}

// console.log(longestCommon("abcdefghijkmn", "qrstfdefghijkj"));
// console.log(longestCommon("abcdegghijkmn", "qrstfdefghijkj"));

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let num = arr.pop();
  return (num + sumRec(arr));
}
//
// console.log(sumRec([1, 2, 3, 4]));

function fibs(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  }
  let seq = [0, 1];
  while (seq.length < n) {
    let term1 = seq[seq.length - 1];
    let term2 = seq[seq.length -2];
    seq.push(term1 + term2);
  }
  return seq;
}

// console.log(fibs(5));
// console.log(fibs(6));
// console.log(fibs(10));

function isPalindrome(str) {
  let stop = str.length/2;
  for (let i = 0; i < stop; i++) {
    let j = str.length - 1 - i;
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

// console.log(isPalindrome('aba'));
// console.log(isPalindrome('abba'));
// console.log(isPalindrome('abvba'));
// console.log(isPalindrome('abvbac'));
// console.log(isPalindrome('abvca'));
// console.log(isPalindrome('acvbca'));

function validIp(str) {
  let terms = str.split(".");
  for (let i = 0; i < terms.length; i++) {
    let term = parseInt(terms[i]);
    if (term > 255 || term < 0) {
      return false;
    }
  }
  return true;
}

// console.log(validIp("255.0.255.0"));
// console.log(validIp("255.0.256.0"));
// console.log(validIp("255.0.255.-1"));
fs = require('fs');

function sumFromFile(filepath) {
  let file = fs.readFileSync(filepath);
  let nums = (file.toString().split("\n").map(x => parseInt(x)));
  let total = 0;
  nums.forEach((term) => {
    if (term) {
      total += term;
    }
  });
  return total;
}

// console.log(sumFromFile('nums.txt'));

function rng (num) {
  return Math.floor(Math.random() * num);
}

function shuffle(arr) {
  let shuffled = [];
  while (arr.length) {
    let index = rng(arr.length);
    let num = arr[index];
    arr = arr.slice(0, index).concat(arr.slice(index+1));
    shuffled.push(num);
  }
  return shuffled;
}

// console.log(shuffle([1, 2, 3, 4, 5, 6]));

function foldingCipher(str) {
  let res = "";
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
  let key = {};
  for (let i = 0; i < alphabet.length/2; i++) {
    let j = alphabet.length - 1 - i;
    let frontLetter = alphabet[i];
    let backLetter = alphabet[j];
    key[frontLetter] = backLetter;
    key[backLetter] = frontLetter;
  }
  str.split("").forEach((term) => {
    if (term !== " ") {
      term = key[term];
    }
    res += term;
  });
  return res;
}

// console.log(foldingCipher("fedcba"));

function uniqSubStrings(str) {
  let res = {};
  for (let i = 0; i < str.length; i++) {
    for (let j = str.length-1; j >= i; j--) {
      let slice = str.slice(i,j);
      res[slice] = true;
    }
  }
  return Object.keys(res);
}

// console.log(uniqSubStrings("abcdefabcdef"));

function uniqSubStrings2(str) {
  let res = {};
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let slice = str.slice(i,j);
      res[slice] = true;
    }
  }
  return Object.keys(res);
}

function same(arr1, arr2) {
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// console.log(same(uniqSubStrings2("abcdefabcdef"), uniqSubStrings("abcdefabcdef")));

function longestContinguousSum(arr) {
  let currSum = arr[0];
  let max = currSum;
  for (let i = 1; i < arr.length; i++) {
    let term = arr[i];
    if (currSum < 0 && term > currSum) {
      currSum = term;
    } else {
      currSum += term;
    }
    max = (max > currSum ? max : currSum);
  }
  return max;
}

// console.log(longestContinguousSum([5, 3, -7, 6]));
// console.log(longestContinguousSum([5, 3, -7, 6, 4]));


function isSilly(year) {
  let nums = year.split('').map(x => parseInt(x));
  let middle = parseInt([nums[1], nums[2]].join(''));
  let front = parseInt([nums[0], nums[1]].join(''));
  let back = parseInt([nums[2], nums[3]].join(''));
  return (middle === front + back);
}

function sillyYears(year) {
  let years = [];
  while (years.length < 10) {
    year = (parseInt(year) + 1) + '';
    if (isSilly(year)) {
      years.push(year);
    }
  }
  return years;
}
//
// console.log(sillyYears(1977));

function pairSum(arr, target) {
  let ans = [];
  let seen = {};
  arr.forEach((term) => {
    let possible = target - term;
    if (seen[possible]) {
      let pair = (term > possible ? [possible, term] : [term, possible]);
      if (!seen[pair]) {
        ans.push(pair);
      }
      seen[pair] = true;
    }
    seen[term] = true;
  });
  return ans;
}

// console.log(pairSum([1, 2, -1], 0));
// console.log(pairSum([1, 2, -1, -1], 0));
// console.log(pairSum([1, 2, -1, -1, -2], 0));
// console.log(pairSum([1, 2, -1, -1, -2], 1));
// console.log(pairSum([1, 2, -1, -1, -2], -1));


function matrixRegionSum(matrix, topLeftCoords, bottomRightCoords) {
  let total = 0;
  for (let x = topLeftCoords[1]; x <= bottomRightCoords[1]; x++) {
    for (let y = bottomRightCoords[0]; y <= topLeftCoords[0]; y++) {
      total += matrix[y][x];
    }
  }
  return total;
}

// console.log(matrixRegionSum([[2, 1, 4, 5], [3, 3, 5, 5], [4, 4, 4, 4]], [1, 0], [0, 1]));

function merge(arr1, arr2) {
  let res = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      res.push(arr2.shift());
    } else {
      res.push(arr1.shift());
    }
  }
  return (res.concat(arr1.concat(arr2)));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let midIndex = Math.floor(arr.length/2);
  let left = arr.slice(0, midIndex);
  let right = arr.slice(midIndex);
  return merge(mergeSort(left), mergeSort(right));
}

// console.log(mergeSort([3, 5, 1, 4, 2, 6, 5, 8, 7, 9]));

function binarySearch(arr, target) {
  if (!arr.length) {
    return NaN;
  }
  let midIdx = Math.floor(arr.length/2);
  let midItem = arr[midIdx];
  if (midItem === target) {
    return midIdx;
  } else if (midItem > target) {
    return (binarySearch(arr.slice(0, midIdx), target));
  } else {
    return (binarySearch(arr.slice(midIdx + 1), target) + 1 + midIdx);
  }
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 5));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 1));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 9));

function productify(arr) {
  let res = [];
  let leftProd = 1;
  for (let i = 0; i < arr.length; i++) {
    res.push(leftProd);
    leftProd = leftProd * arr[i];
  }
  let rightProd = 1;
  for (let j = arr.length - 1; j >= 0; j--) {
    res[j] = res[j] * rightProd;
    rightProd = rightProd * arr[j];
  }
  return res;
}

// console.log(productify([1, 2, 3, 4]));

function subSets(arr) {
  if (!arr.length) {
    return [[]];
  }
  let front = arr[0];
  let subsets = subSets(arr.slice(1));
  let rest = subsets.map(x => x.concat(front));
  return subsets.concat(rest);
}

// console.log(subSets([1, 2, 3, 4]))

function fastIntersection(arr1, arr2) {
  let seen = {};
  let check = (arr1.length > arr2.length ? arr1 : arr2);
  let other = (check === arr1 ? arr2 : arr1);
  let intersection = [];
  check.forEach((term) => {
    seen[term] = true;
  });
  arr2.forEach((term) => {
    if (seen[term]) {
      intersection.push(term);
    }
  });
  return intersection;
}

// console.log(fastIntersection([4, 2, 9, 1, 5], [6, 9, 1, 7]));

function sort2(maxVal, arr) {
  let arrNums = {};
  arr.forEach((term) =>{
    arrNums[term] = true;
  });
  let res = [];
  for (let i = 0; i <= maxVal; i++) {
    if (arrNums[i]) {
      res.push(i)
    }
  }
  return res;
}
//
// console.log(sort2(9, [4, 1, 5, 7, 3]));

function moveZeros(arr) {
  let zeroCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0) {
      zeroCount++;
      arr = arr.slice(0, i).concat(arr.slice(i+1));
    }
  }
  while (zeroCount > 0) {
    arr.push(0);
    zeroCount--;
  }
  return arr;
}

// console.log(moveZeros([1, 2, 0, 3, 4, 0, 5, 6, 0]));

function lookAndSay(arr) {
  let res = [],
      prev = arr[0],
      count = 1;
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    if (prev === curr) {
      count++;
    } else {
      res.push([count, prev]);
      count = 1;
    }
    prev = curr;
  }
  res.push([count, prev]);
  return res;
}

// console.log(lookAndSay([1, 2, 1, 1]));

//MaxStack

const maxStack = function () {
  this.values = [];
  this.maxValues = [];
}

maxStack.prototype.push = function (val) {
  this.arr.push(val)
  if (!this.max || val > this.max()) {
    maxValues.push(val);
  } else {
    maxValues.push(this.max());
  }
}

maxStack.prototype.pop = function () {
  this.maxValues.pop();
  return this.arr.pop();
}

maxStack.prototype.max = function () {
  return this.maxValues[this.maxValues.length - 1];
}

//StackQueue

const StackQueue = function() {
  this.in = [],
  this.out = []
}

StackQueue.prototype.enqueue = function (val) {
  this.in.push(val);
}

StackQueue.prototype.dequeue = function () {
  if (this.out.length) {
    return this.out.pop();
  } else {
    while (this.in.length) {
      this.out.push(this.in.pop());
    }
    return this.out.pop();
  }
};


//MinMaxStack

const MinMaxStack = function () {
  this.values = [];
  this.maxValues = [];
  this.minValues = [];
}

MinMaxStack.prototype.push = function (val) {
  this.arr.push(val)
  if (!this.max() || val > this.max()) {
    this.maxValues.push(val);
  } else {
    this.maxValues.push(this.max());
  }
  if (!this.min() || val < this.min()) {
    this.minValues.push(val);
  } else {
    this.minValues.push(this.min());
  }
}

MinMaxStack.prototype.pop = function () {
  this.maxValues.pop();
  this.minValues.pop();
  return this.arr.pop();
}

MinMaxStack.prototype.max = function () {
  return this.maxValues[this.maxValues.length - 1];
}

MinMaxStack.prototype.min = function () {
  return this.minValues[this.minValues.length - 1];
}

//MinMaxStackQueue

const MinMaxStackQueue = function() {
  this.in = new MinMaxStack(),
  this.out = new MinMaxStack()
}

MinMaxStackQueue.prototype.enqueue = function (val) {
  this.in.push(val);
}

MinMaxStackQueue.prototype.dequeue = function () {
  if (this.out.length) {
    return this.out.pop();
  } else {
    while (this.in.length) {
      this.out.push(this.in.pop());
    }
    return this.out.pop();
  }
};

MinMaxStackQueue.prototype.min = function () {
  return (this.in.min() < this.out.min() ? this.in.min() : this.out.min());
}

MinMaxStackQueue.prototype.max = function () {
  return (this.in.max() < this.out.max() ? this.in.max() : this.out.max());
}

//fileList

function fileList(hash) {
  let ans = [];
  Object.keys(hash).forEach((key) => {
    if (hash[key] === true) {
      ans.push(key)
    } else {
      let nestedFiles = fileList(hash[key]);
      nestedFiles.forEach((file) => {
        ans.push(`${key}/${file}`);
      });
    }
  });
  return ans;
}

// console.log(fileList(files));

function isShuffle(str1, str2, str3) {
  if (str1.length + str2.length !== str3.length) {
    return false;
  }
  let idx1 = 0,
      idx2 = 0,
      idx3 = 0;
  while (idx3 < str3.length) {
    if (str3[idx3] === str1[idx1]) {
      idx3++;
      idx1++;
    } else if (str3[idx3] === str2[idx2]) {
      idx3++;
      idx2++;
    } else {
      return false;
    }
  }
  return true;
}

// console.log(isShuffle('def', 'dec', 'dedecf'));
// console.log(isShuffle('qrt', 'urt', 'qurtrt'));
// console.log(isShuffle('qrt', 'urt', 'qurttr'));

function isShuffle2(str1, str2, str3) {
  if (!str3.length) {
    return (str2.length === 0 && str1.length === 0);
  }
  if (str3[0] === str1[0]) {
    return (isShuffle2(str1.slice(1), str2, str3.slice(1)));
  }

  if (str3[0] === str2[0]) {
    return (isShuffle2(str1, str2.slice(1), str3.slice(1)));
  }
  return false;
}

// console.log(isShuffle2('def', 'dec', 'dedecf'));
// console.log(isShuffle2('qrt', 'urt', 'qurtrt'));
// console.log(isShuffle2('qrt', 'urt', 'qurttr'));

function isShuffle3(str1, str2, str3) {
  let stringIndecies = [0, 0];

  while (stringIndecies.length) {
    let str1Idx = stringIndecies.shift(),
        str2Idx = stringIndecies.shift(),
        str3Idx = str1Idx + str2Idx;
    if (str3Idx === str3.length) {
      return true;
    }

    if (str1[str1Idx] === str3[str3Idx]) {
      stringIndecies = [str1Idx + 1, str2Idx];
    }

    if (str2[str2Idx] === str3[str3Idx]) {
      stringIndecies = [str1Idx, str2Idx + 1];
    }
  }
  return false;
}
//
// console.log(isShuffle3('def', 'dec', 'dedecf'));
// console.log(isShuffle3('qrt', 'urt', 'qurtrt'));
// console.log(isShuffle3('qrt', 'urt', 'qurttr'));

function isShuffle4(str1, str2, str3) {
  let candidates = [[0, 0]],
      seen = {};

  while (candidates.length) {
    let candidate = candidates.shift(),
        str1Idx = candidate.shift();
        str2Idx = candidate.shift(),
        str3Idx = str1Idx + str2Idx;
    if (str3Idx === str3.length) {
      return true;
    }

    if (str1[str1Idx] === str3[str3Idx]) {
      candidate = [str1Idx + 1, str2Idx];
      if (!seen[candidate]) {
        seen[candidate] = true;
        candidates.push(candidate);
      }
    }

    if (str2[str2Idx] === str3[str3Idx]) {
      candidate = [str1Idx, str2Idx + 1];
      if (!seen[candidate]) {
        seen[candidate] = true;
        candidates.push(candidate);
      }
    }
  }
  return false;
}

// console.log(isShuffle4('def', 'dec', 'dedecf'));
// console.log(isShuffle4('qrt', 'urt', 'qurtrt'));
// console.log(isShuffle4('qrt', 'urt', 'qurttr'));


function binary(num) {
  let ans = [];
  while (num > 0) {
    ans = [num%2].concat(ans);
    num = Math.floor(num/2);
  }
  return parseInt(ans.join(''));
}

// console.log(binary(8));

function iterativeFac(num) {
  let total = 1;
  for (let i = 2; i <= num; i++) {
    total *= i;
  }
  return total;
}
//
// console.log(iterativeFac(4));

function recFac(num) {
  if (num === 0) {
    return 1;
  }
  return (num * recFac(num-1));
}

// console.log(recFac(4));

function tailRecFac(num, total=1) {
  if (num === 0) {
    return total;
  }
  return (tailRecFac(num-1, (num*total)));
}

// console.log(tailRecFac(4));

function subSets2(array) {
  if (!array.length) {
    return [[]];
  }
  let back = array.pop(),
      subs = subSets2(array),
      rest = subs.map(x => x.concat(back));
  return subs.concat(rest);
}

function maxPusedoSubString(str) {
  let subs = subSets2(str.split('')).sort();
  return (subs[subs.length-1].join(''));
}

console.log(maxPusedoSubString("adcd"));

function maxPusedoSubString2(str) {
  let ans = [str[str.length -1]];
  for (let i = str.length-2; i >= 0; i--) {
    if (str[i] >= ans[ans.length-1]) {
      ans.push(str[i]);
    }
  }
  return ans.reverse().join("");
}

console.log(maxPusedoSubString2("adcd"));
