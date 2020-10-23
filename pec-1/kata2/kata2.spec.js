import sumPositiveElements from './kata2';

describe('kata #2: sumPositiveElements', () => {
  test('de [] es 0', () => {
    expect(sumPositiveElements([])).toBe(0);
  });
  test('de [1,2,3,4,5]', () => {
    expect(sumPositiveElements([1, 2, 3, 4, 5])).toBe(15);
  });
  test('de [1,-2,3,4,5]', () => {
    expect(sumPositiveElements([1, -2, 3, 4, 5])).toBe(13);
  });
  test('de [-1,2,3,4,-5]', () => {
    expect(sumPositiveElements([-1, 2, 3, 4, -5])).toBe(9);
  });
  test('de [-1,-2,-3,-4,-5]', () => {
    expect(sumPositiveElements([-1, -2, -3, -4, -5])).toBe(0);
  });
});
