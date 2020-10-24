function plantTree(species, fruit) {
  if (typeof species === 'string' && typeof fruit === 'string') {
    this.getFruit = function getFruit() {
      if (this.fruit) {
        return this.fruit;
      } else {
        return 'No fruit';
      }
    };
    this.getSpecies = function getSpecies() {
      if (this.species) {
        return this.species;
      } else {
        return 'No species';
      }
    };
  } else {
    return null;
  }
}

let obj = new plantTree('pearTree', 'pear');

export { obj };
