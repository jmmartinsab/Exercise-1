import removeFirstAndLast from './kata4';

describe('kata #4: removeFirstAndLast', () => {
  test('de JavaScript es avaScrip', () => {
    expect(removeFirstAndLast('JavaScript')).toBe('avaScrip');
  });
  test('de Alexandria es lexandri', () => {
    expect(removeFirstAndLast('Alexandria')).toBe('lexandri');
  });
  test('de hydrogen es ydroge', () => {
    expect(removeFirstAndLast('hydrogen')).toBe('ydroge');
  });
  test('de ok es ok', () => {
    expect(removeFirstAndLast('ok')).toBe('ok');
  });
});
