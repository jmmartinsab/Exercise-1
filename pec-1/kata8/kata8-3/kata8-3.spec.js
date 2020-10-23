import { tree } from './kata8-3';

describe('kata #8.3: objetos', () => {
  test('El objeto debe contener el método getFruit', () => {
    expect(tree).toHaveProperty('getFruit');
  });
  test('Invocar getFruit sobre el objeto tree debe ser apple', () => {
    expect(tree.getFruit()).toBe('apple');
  });
});
