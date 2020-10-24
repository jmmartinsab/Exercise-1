import { plantTree } from './kata9-1';

describe('kata #9.1: factoría de objetos', () => {
  test('si los parametros no son string devuelve null', () => {
    expect(plantTree('pearTree', 4)).toBeNull();
  });
  test('Si los parametros son correctos devuelve el objeto', () => {
    expect(new plantTree('pearTree', 'pear')).toMatchObject({
      species: 'pearTree',
      fruit: 'pear',
    });
  });
});
