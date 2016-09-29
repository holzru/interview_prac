function reverseVowels(str) {
  let reversedVowels = [[], [], [], [], [], []],
      vowIndices = [],
      vowMap = {'a': 6,
                'e': 5,
                'i': 4,
                'o': 3,
                'u': 2,
                'y': 1},
    strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
      let char = strArr[i];
      if (vowMap[char]) {
        vowIndices.push(i)
        reversedVowels[(vowMap[char] -1) % 6].push(char);
      }
    }
    let vowels = reversedVowels.map(x => x.join('')).join('').split('');
    vowIndices.forEach((index) =>{
      strArr[index] = vowels.shift()
    });
  return strArr.join('');
}

console.log(reverseVowels('hello'));
console.log(reverseVowels('emy'));

function maxTreePath(rrot) {
  let pathStack = [],
      valueStack = [],
      path = [],
      cpv = root.value,
      maxPath = [],
      max = root.value;
  function explorer(node) {
    if (!node) {return;}
    if (node !== root) {
      if (node.value > CPV && CPV < 0) {
        pathStack.push(path);
        valueStack.push(cpv);
        path = [node];
        cpv = node.value;
      } else {
        path.push(node);
        cpv += node.value;
      }
      if (cpv > max) {
        max = cpv;
        maxPath = path;
      }
      for (let i = 0; i < node.children.length; i++) {
        explorer(node.children[i])
      }
      path.pop();
      cpv -= node.value;
      if (!path.length) {
        path = pathStack.pop();
        cpv = valueStack.pop();
      }
    }
  }
  explorer(node);
  return maxPath;
}
