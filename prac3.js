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
