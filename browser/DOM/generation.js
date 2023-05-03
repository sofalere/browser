  // <script src="ex.js" async></script>

// generation is all siblings (same indentation)
/*
find the children of a parent n times indented

given 2 parents     [a, b]
  for each 
    return children  [a1, a2, a3] [b1, b2]

function findChildren(parentsArr)
  parentsArr.map(parent => {
    return parent.children;
  }).flat()
} => [a1, a2, a3 b1, b2]


parentsArr = [documnet.body]
loop gen times
  childrenArr = findChildren(parentsArr);
  parentsArr = childrenArr;

return parentsArr
*/


function styleGen(gen) {
  function findChildren(parentsArr) {
    return parentsArr.map(parent => {
      return [...parent.children];
    }).flat();
  }

  let parentsArr = [...document.body.children];

  while (gen > 1) {
  // for (let i = 1; i < gen; i++) {
    let childrenArr = findChildren(parentsArr);
    parentsArr = childrenArr;
  // }
  gen--;
  }
  parentsArr.forEach(node => node.classList.add('generation-color'))
}


function colorGeneration(targetGeneration) {
  let generation = 0;
  let parents = [document.body];
  let elements;

  while (generation < targetGeneration) {
    generation += 1;
    elements = getAllChildrenOf(parents);
    parents = elements;
  }

  if (elements) {
    color(elements);
  }
}

function color(elements) {
  elements.forEach(({classList}) => {
    classList.add("generation-color");
  });
}

function getAllChildrenOf(parents) {
  return parents.map(({children}) => Array.prototype.slice
                                                    .call(children))
                                                    .reduce((collection, children) => collection.concat(children), []);
}

// console.log(colorGeneration(2))
console.log(styleGen(4));
