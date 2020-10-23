import { tree } from './kata8-1';

describe('kata #8.1: objetos', () => {
  //En este test aglutiné los 3 test de la kata 8.1, con to have property.
  test('tree debe contener species y fruit', () => {
    expect(tree).toHaveProperty('species', 'appleTree');
    expect(tree).toHaveProperty('fruit', 'apple');
  });
});
