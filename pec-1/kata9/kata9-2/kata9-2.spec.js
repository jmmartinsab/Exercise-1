import { obj } from './kata9-2';

describe('kata #9.2: factoría de objetos', () => {
  test('El objeto contiene species, fruit y getFruit', () => {
    expect(obj).toHaveProperty('species');
    expect(obj).toHaveProperty('fruit');
    expect(obj).toHaveProperty('getFruit');
  });
  test('al invocar getFruit devuelve pear', () => {
    expect(obj.getFruit()).toBe('pear');
  });
});
