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
