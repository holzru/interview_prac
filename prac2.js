const RSVP = require('rsvp');

function permutations(arr) {
  if (!arr.length) {
    return [[]];
  }
  let first = arr[0],
      rest = arr.slice(1),
      subs = permutations(rest),
      newSubs = subs.map(term => term.concat([first]));
  return newSubs.concat(subs);
}

// console.log(permutations([1, 2, 3, 4]));

function truckTravel(trucks, gas) {
  let totalFuel = trucks * gas,
      distanceTraveled = 0;
  while (trucks > 1) {
    distanceTraveled += 100/trucks;
    trucks--;
    totalFuel -= 100;
  }
  return distanceTraveled + totalFuel;
}

// console.log(truckTravel(50, 100));

function nextLargest(node) {
  if (node.right) {
    node = node.right;
    while (node.left) {
      node = node.left;
    }
    return node;
  }
  while (true) {
    let parentNode = node.parent;
    if (!parentNode) {
      return null;
    } else if (parentNode.left === node) {
      return parentNode;
    } else {
      node = parentNode;
    }
  }
}

function isBalanced(node) {
  if (!node) {
    return null;
  }

  let depthLeft = depthFinder(node.left),
      depthRight = depthFinder(node.right),
      depthDifference = Math.abs(depthRight - depthLeft);

  return (isBalanced(node.left) && isBalanced(node.right)) && depthDifference < 2;
}

function depthFinder(node) {
  if (!node) {
    return 0;
  }
  return Math.max(depthFinder(node.right), depthFinder(node.left)) + 1;
}


function reverseStr(str) {
  str = str.split('');
  let halfway = str.length/2,
      front = 0,
      back = str.length - 1;
  while (front < halfway) {
    let frontChar = str[front];
    str[front] = str[back];
    str[back] = frontChar;
    front++;
    back--;
  }
  return str.join('');
}

// console.log(reverseStr('abcd'));
// console.log(reverseStr('abcde'));
// console.log(reverseStr('eabcde'));
// console.log(reverseStr(''));

function uniqStr(str) {
  let i = 0;
  while (i < str.length) {
    let j = i + 1;
    while (j < str.length) {
      if (str[i] === str[j]) {
        str = str.slice(0, j) + str.slice(j+1);
      } else {
        j++;
      }
    }
    i++
  }
  return str;
}

// console.log(uniqStr('abcd'));
// console.log(uniqStr('aabbccdd'));
// console.log(uniqStr('aaaaaa'));
// console.log(uniqStr('aaabbbb'))

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let hash = {};
  str1.split('').forEach((char) => {
    if (hash[char]) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
  });
  for (let i = 0; i < str2.length; i++) {
    if (hash[str2[i]] > 0) {
      hash[str2[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

// console.log(isAnagram("a", "aa"));
// console.log(isAnagram("ba", "ab"));
// console.log(isAnagram("cbda", "abcd"));
// console.log(isAnagram("hello there old chap", "cohl heed hetro pall"));

function spaceReplace(str) {
  return str.replace(/ /g, "%20");
}

// console.log(spaceReplace("hello there old chap"));
// console.log(spaceReplace("hellothereoldchap"));
// console.log(spaceReplace(""));

function transpose(arr) {
  let res = [];
  arr.forEach((row) => {
    res.push([]);
  });
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      res[col].unshift(arr[row][col]);
    }
  }
  return res;
}
// let one = transpose([[1, 2, 3],[4, 5, 6], [7, 8, 9]]);
// let two = transpose(one);
// let three = transpose(two);
// let four = transpose(three);
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);

function inPlaceTranspose(arr) {
  let arrLength = arr[0].length;
  for (let row = 0; row < arr.length; row++) {
    for (let col = arrLength-1; col >= 0; col--) {
      arr[col].unshift(arr[row].pop());
    }
  }
  return arr;
}

// let one = inPlaceTranspose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// console.log(one);
// let two = inPlaceTranspose(one);
// console.log(two);
// let three = inPlaceTranspose(two);
// console.log(three);
// let four = inPlaceTranspose(three);
// console.log(four);

function makeZero(arr) {
  let zeroRows = [],
      zeroCols = [];
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === 0) {
        zeroRows.push(row);
        zeroCols.push(col);
      }
    }
  }
  zeroRows.forEach((row) => {
    for (let col = 0; col < arr[row].length; col++) {
      arr[row][col] = 0;
    }
  });
  zeroCols.forEach((col) => {
    for (let row = 0; row < arr.length; row++) {
      arr[row][col] = 0;
    }
  });
  return arr;
}

// console.log(makeZero([[1, 2, 0, 4], [2, 3, 4, 6], [0, 4, 5, 6], [1, 1, 1, 1]]));


function linkedDups(head) {
  let curr = head;
  while (curr) {
    let nextNode = curr.next,
        prev = curr;
    while (nextNode) {
      if (nextNode.val === curr.val) {
        prev.next = nextNode.next;
      } else {
        prev = nextNode;
      }
      nextNode = nextNode.next;
    }
    curr = curr.next;
  }
  return head;
}

const LinkedList = function(val) {
  this.next = null;
  this.val = val;
}

function iterate(node) {
  let curr = node;
  while (curr) {
    console.log(curr.val);
    curr = curr.next;
  }
}

const testList = function () {
  let head = new LinkedList(0),
      curr = new LinkedList(0),
      i = 1,
      count = 0;
  head.next = curr;
  while (i < 10) {
    let next = new LinkedList(i);
    curr.next = next;
    if (count > 1) {
      i++;
      count = 0;
    } else {
      count++;
    }
    curr = next;
  }
  return head;
}

// console.log(iterate(linkedDups(testList())));

function nthLast(n, head) {
  let p1 = head,
      p2 = head;
  for (let i = 0; i < n; i++) {
    p2 = p2.next;
  }
  while (p2.next) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}

// console.log(nthLast(1, linkedDups(testList())));


function deleteMiddle (node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

function test() {
  console.log(iterate(testList()));
  let head = linkedDups(testList()),
      curr = head;
  while (curr.val !== 5) {
    curr = curr.next;
  }
  deleteMiddle(curr);
  console.log(iterate(head));
}

// test();

function linkedAddition(list1, list2) {
  let curr = new LinkedList(),
      head = curr;
      carryOver = 0;
  while (list1 || list2) {
    let sum = list1.val + list2.val + carryOver;
    curr.val = sum % 10;
    curr.next = new LinkedList();
    curr = curr.next;
    carryOver = Math.floor(sum/10);
    list1 = list1.next;
    list2 = list2.next;
  }
  return head;
}

// let first = new LinkedList(3);
//     first.next = new LinkedList(1);
// let second = first.next;
//     second.next = new LinkedList(5);
//
// let third = new LinkedList(5);
//     third.next = new LinkedList(9);
// let fourth = third.next;
//     fourth.next = new LinkedList(2);

// console.log(iterate(linkedAddition(first, third)));

function loopStart(head) {
  let fast = head.next.next,
      slow = head.next;
  while (slow.val !== fast.val) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow = head;
  while (slow.val !== fast.val) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}

let first = new LinkedList("A");
    first.next = new LinkedList("B");
let second = first.next;
    second.next = new LinkedList("C");
let third = second.next;
    third.next = new LinkedList("D");
let fourth = third.next;
    fourth.next = new LinkedList("E");
let fifth = fourth.next;
    fifth.next = third;

// console.log(loopStart(first));

function commonAncestor(root, child1, child2) {
  while (root) {
    if (covers(root.rightChild, child1) && covers(root.rightChild, child2)) {
      return (commonAncestor(root.rightChild, child1, child2));
    }
    if (covers(root.leftChild, child1) && covers(root.leftChild, child2)) {
      return (commonAncestor(root.leftChild, child1, child2));
    }
    return root;
  }
}

function covers(root, node) {
  if (!root || !node) {
    return false;
  }
  if (node === child) {
    return true;
  }
  return (covers(root.rightChild, node) || covers(root.leftChild, node));
}

function validParens(n) {
  if (n < 2) {
    return null;
  }
  let string = '()',
      res = [],
      seen = {};
  function possiblities(string) {
    if (string.length <= n) {
      seen[string] = true;
      res.push(string);
      let outside = '(' + string + ')',
          right = string + "()",
          left = "()" + string;
      if (!seen[outside]) {possiblities(outside);}
      if (!seen[right]) {possiblities(right);}
      if (!seen[left]) {possiblities(left);}
    }
  }
  possiblities(string);
  return res;
}


// console.log(validParens(1));
// console.log(validParens(2));
// console.log(validParens(4));
// console.log(validParens(6));
// console.log(validParens(12));

const coins = [25, 10, 5, 1];
function possChange(n, coins) {
  if (n <= 0) {return 1;}
  let count = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > n) {continue;}
    let numCoins = 1;
    while (coins[i] * numCoins <= n) {
      count += possChange(n-(coins[i]*numCoins++), coins.slice(i+1));
    }
  }
  return count;
}


// console.log(possChange(25, coins));
function merge(arr1, arr2) {
  let res = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] > arr2[0]) {
      res.push(arr2.shift());
    } else {
      res.push(arr1.shift());
    }
  }
  return res.concat(arr1.concat(arr2));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length/2);
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

// console.log(mergeSort([5, 1, 7, 3, 9, 0, 2, 1]));

function wordSearch(arr, word) {
  if (!arr.length) {
    return null;
  }
  let mid = Math.floor(arr.length/2);
  let i = 0;
  while (true) {
    if (arr[mid] === word) {
      return mid;
    } else if (mid === arr.length) {
      mid = 0;
    } else if (!mid.length) {
      mid++;
    } else if (arr[mid] > word) {
      return wordSearch(arr.slice(0, mid), word);
    } else {
      return mid + 1 + wordSearch(arr.slice(mid + 1), mid);
    }
  }
}

// console.log(wordSearch(["a", "b", "", "", "", "", "c", "", "d"], 'd'));


function setBit(x, position) {
  let mask = 1 << position;
  return (x | mask);
}
// console.log(setBit(8, 1));

function clearBit(x, pos) {
  mask = 1 << pos;
  return (x & ~mask);
}

//state will be zero or one
function setBit(x, pos, state) {
  mask = 1 << pos;
  return (x & ~mask) | (-state & mask);
}

function permutations(arr) {
  let res = [],
      building = [];
  function permute(arr) {
    for (let i = 0; i < arr.length; i++) {
      let front = arr.splice(i, 1)[0];
      building.push(front);
      if (arr.length === 0) {
        res.push(building.slice());
      }
      permute(arr);
      arr.splice(i, 0, front);
      building.pop()
    }
    return res;
  }
  return permute(arr);
}

// console.log(permutations([1, 2, 3, 4]));
// console.log(permutations([2, 3, 4]));
// console.log(permutations([2, 4]));
// console.log(permutations([]));
// console.log(permutations([2, 4, 6]));
// console.log(permutations([1, 1, 1, 1, 0, 1]));


function primeFacs(k) {
  let min = 1,
      q3 = [3],
      q5 = [5],
      q7 = [7];

  for (let i = k; i > 0; i--) {
    min = Math.min(q3[0], q5[0], q7[0]);
    if (min === q7[0]) {
      q7.shift();
    } else {
      if (q5[0] === min) {
        q5.shift();
      } else {
        q3.shift();
        q3.push(3 * min);
      }
      q5.push(min * 5);
    }
    q7.push(min * 7);
  }
  return min;
}

function satisfyTravis(k) {
  for (let i = 0; i < k; i++) {
    console.log(primeFacs(i));
  }
}

// satisfyTravis(100);
// satisfyTravis(150);

function textMatch(root1, root2) {
  let toCheck1 = [root1],
      toCheck2 = [root2],
      res1 = "",
      res2 = "";
  while (toCheck2.length || toCheck1.length) {
    let el1 = (toCheck1.length ? toCheck1.shift() : null),
        el2 = (toCheck2.length ? toCheck2.shift() : null);

    if (el1 && el1.value) {res1 += e11.value;}
    if (el2 && el2.value) {res2 += el2.value;}
    if (!stringMatch(res1, res2)) {return false;}
    if (el1 && el1.children) {toCheck1 = el1.children.concat(toCheck1);}
    if (el2 && el2.children) {toCheck2 = el2.children.concat(toCheck2);}
  }
  return res1 === res2;
}

function stringMatch(str1, str2) {
  let len = Math.min(str1.length, str2.length);
  return (str1.slice(0, len) === str2.slice(0, len));
}


class Promise {
  constructor(executor) {
    this.state = 'PENDING';
    executor(this.resolve.bind(this), this.reject.bind(this));
    this.successCBs = [];
    this.failureCBs = [];
  }
  resolve(resp) {
    if (this.state === "PENDING") {
      this.state = "RESOLVED";
      this.val = resp;
      this.successCBs.forEach((cb) => {
        cb(this.val);
      });
      this.successCBs = null;
    }
  }
  reject(error) {
    if (this.state === "PENDING") {
      this.state = "REJECTED";
      this.error = error;
      this.failureCBs.forEach((cb) => {
        cb(this.error);
      });
      this.failureCBs = null;
    }
  }
  then(onSuccess, onFailure) {
    let self = this;
    return new Promise(function(resolve, reject) {
      if (self.state === "PENDING") {
        self.successCBs.push(function(val) {
          let el = (onSuccess ? onSuccess(val) : val);

          if (el instanceof Promise) {
            el.then(function(newVal) {
              resolve(newVal);
            });
          } else {
            resolve(el);
          }
        });
        self.failureCBs.push(function(val) {

          let el = (onFailure ? onFailure(val) : val);
          if (el instanceof Promise) {
            el.then(null, function(newVal) {
              reject(newVal);
            });
          } else {
            return reject(el);
          }
        });
      } else if (this.state === "RESOLVED") {
        let temp = onSuccess(self.val);
        if (temp instanceof Promise) {
          let ans = temp.then(function(val) {
            resolve(val);
          });
        } else {
          resolve(temp)
        }
      } else {
        let temp = onFailure(self.error);
        if (temp instanceof Promise) {
          let ans = temp.then(function(val) {
            reject(val);
          });
        } else {
          reject(temp)
        }
      }
    });
  }
}


// class Promise {
//   constructor (exec) {
//     this.state = 'pending';
//     this.resolveCbs = [];
//     this.rejectCbs = [];
//     exec(this.resolve.bind(this), this.reject.bind(this));
//   }
//   then (resolveCb, rejectCb) {
//     const self = this;
//     return new Promise(function (resolve, reject) {
//       if (self.state === 'pending') {
//         self.resolveCbs.push(function (value) {
//           self.resolveWithCbAndValue(resolve, resolveCb, value);
//         });
//         self.rejectCbs.push(function (value) {
//           self.rejectWithCbAndValue(reject, rejectCb, value);
//         });
//       } else if (self.state === 'resolved') {
//         self.resolveWithCbAndValue(resolve, resolveCb, self.value);
//       } else {
//         self.rejectWithCbAndValue(reject, rejectCb, self.value);
//       }
//     });
//   }
//   catch (rejectCb) {
//     const self = this;
//     return new Promise(function (resolve, reject) {
//       if (self.state === 'pending') {
//         self.resolveCbs.push(resolve);
//         self.rejectCbs.push(function (value) {
//           self.rejectWithCbAndValue(reject, rejectCb, value);
//         });
//       } else if (self.state === 'resolved') {
//         resolve(self.value);
//       } else {
//         self.rejectWithCbAndValue(reject, rejectCb, self.value);
//       }
//     });
//   }
//   resolve (value) {
//     this.value = value;
//     this.state = 'resolved';
//
//     // invoke all callbacks
//     this.resolveCbs.forEach(cb => cb(this.value));
//     this.resolveCbs = [];
//     this.rejectCbs = [];
//   }
//   reject (value) {
//     this.value = value;
//     this.state = 'rejected';
//
//     // invoke all callbacks
//     this.rejectCbs.forEach(cb => cb(this.value));
//     this.resolveCbs = [];
//     this.rejectCbs = [];
//   }
//   resolveWithCbAndValue (resolve, cb, value) {
//     // invoke cb if there is one
//     const result = cb ? cb(value) : value;
//
//     // resolve to result or Promise's resolved value
//     if (result instanceof Promise) {
//       result.then(function (newValue) {
//         resolve(newValue);
//       });
//     } else {
//       resolve(result);
//     }
//   }
//   rejectWithCbAndValue (reject, cb, value) {
//     // invoke cb if there is one
//     const result = cb ? cb(value) : value;
//
//     // reject to result or Promise's rejected value
//     if (result instanceof Promise) {
//       result.then(null, function (newValue) {
//         reject(newValue);
//       });
//     } else {
//       reject(result);
//     }
//   }
// }

const throwDice = function(resolve, reject) {
  setTimeout(
    function(){
      let [d1, d2] = [~~(1 + Math.random() * 6), ~~(1 + Math.random() * 6)];
      if((d1 + d2) === 7 || (d1 + d2) === 11){resolve(d1 + d2);}
      else{reject(d1 + d2);}
    }, 100);
};

const success = (value) => {
  console.log('Second')
  console.log(value);
  console.log('YOU WIN!!');
};

const failure = (value) => {
  console.log('Second')
  console.log(value);
  console.log('YOU LOSE!!');
};

const rethrow = (value) => {
  console.log(`threw a ${value} throwing again`);
  return duck();
};

// console.log('First');
// function duck() {
//   new Promise(throwDice).then(success, rethrow).then(success, failure);
// };
// duck();


// function dieToss() {
//   return Math.floor(Math.random() * 6) + 1;
// }
//
// function tossASix() {
//   return new RSVP.Promise(function(fulfill, reject) {
//     var n = Math.floor(Math.random() * 6) + 1;
//     if (n === 6) {
//       fulfill(n);
//     } else {
//       reject(n);
//     }
//   });
// }
//
// function logAndTossAgain(toss) {
//   console.log("Tossed a " + toss + ", need to try again.");
//   return tossASix();
// }
//
// function logSuccess(toss) {
//   console.log("Yay, managed to toss a " + toss + ".");
// }
//
// function logFailure(toss) {
//   console.log("Tossed a " + toss + ". Too bad, couldn't roll a six");
// }
//
// tossASix()
//   .then(null, logAndTossAgain)   //Roll first time
//   .then(null, logAndTossAgain)   //Roll second time
//   .then(logSuccess, logFailure); //Roll third and last time

function whatever() {
  return new RSVP.Promise(function(fulfill, reject) {
    var n = Math.floor(Math.random() * 6) + 1;
      if (n === 6) {
        fulfill(n);
      } else {
        reject(n);
      }
  })
}
function logAndTossAgain(toss) {
  console.log("Tossed a " + toss + ", need to try again.");
  return whatever();
}

function logSuccess(toss) {
  console.log("Yay, managed to toss a " + toss + ".");
}

function logFailure(toss) {
  console.log("Tossed a " + toss + ". Too bad, couldn't roll a six");
}

whatever()
  .then(null, logAndTossAgain)   //Roll first time
  .then(null, logAndTossAgain)   //Roll second time
  .then(logSuccess, logFailure); //Roll third and last time
