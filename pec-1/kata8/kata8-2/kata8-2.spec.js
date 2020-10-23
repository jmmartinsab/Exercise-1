import { tree, getFruit } from './kata8-2';

describe('kata #8.2: objetos', () => {
  test('Debe devolver valor de fruit cuando existe en el objeto tree', () => {
    expect(getFruit(tree)).toBe(tree.fruit);
  });
  test('Debe devolver No fruit si el objeto tree no tiene esa propiedad', () => {
    expect(getFruit(!tree.fruit)).toBe('No fruit');
  });
});
