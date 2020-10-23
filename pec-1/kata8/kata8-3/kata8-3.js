let tree = {
  species: 'appleTree',
  fruit: 'apple',
  getFruit() {
    if (this.fruit) {
      return this.fruit;
    } else {
      return 'No fruit';
    }
  },
};

tree.getFruit();
export { tree };
