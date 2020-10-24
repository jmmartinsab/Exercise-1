function plantTree(species, fruit) {
  if (typeof species === 'string' && typeof fruit === 'string') {
    this.species = species;
    this.fruit = fruit;
  } else {
    return null;
  }
}

let tree = new plantTree('pearTree', 'pear');
console.log(tree);

export { plantTree };
