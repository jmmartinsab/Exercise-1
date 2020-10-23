import removeSpaces from './kata5';

describe('kata #5: removeSpaces', () => {
  test('de good morning es goodmorning', () => {
    expect(removeSpaces('good morning')).toBe('goodmorning');
  });
  test('de carrot cake es carrotcake', () => {
    expect(removeSpaces(' carrot cake ')).toBe('carrotcake');
  });
  test('de the abbot gave rice to the fox es theabbotgavericetothefox', () => {
    expect(removeSpaces('the abbot gave rice to the fox')).toBe('theabbotgavericetothefox');
  });
});
