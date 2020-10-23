import repeatString from './kata3';

describe('kata #3: repeatString', () => {
  test('de JavaScript, 0 es vacio', () => {
    expect(repeatString('JavaScript', 0)).toBe('');
  });
  test('de university, 1 es university', () => {
    expect(repeatString('university', 1)).toBe('university');
  });
  test('de hello, 3 es hellohellohello', () => {
    expect(repeatString('hello', 3)).toBe('hellohellohello');
  });
  test('de ?, 10 es ??????????', () => {
    expect(repeatString('?', 10)).toBe('??????????');
  });
});
