let tree = {
  species: 'appleTree',
  fruit: 'apple',
};

function getFruit(tree) {
  if (tree.fruit) {
    return tree.fruit;
  } else {
    return 'No fruit';
  }
}

getFruit(tree);
export { tree, getFruit };
