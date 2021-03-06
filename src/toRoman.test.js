import convert from './toRoman';

describe('When passed a decimal', () => {
  it('of value 1 should return a Roman numeral', () => {
    expect(convert(1)).toBe('I');
  });

  it('of value 2 should return a Roman numeral', () => {
    expect(convert(2)).toBe('II');
  });

  it('of value 3 should return a Roman numeral', () => {
    expect(convert(3)).toBe('III');
  });

  it('of value 4 should return a Roman numeral', () => {
    expect(convert(4)).toBe('IV');
  });

  it('of value 5 should return a Roman numeral', () => {
    expect(convert(5)).toBe('V');
  });

  it('of value 6 should return a Roman numeral', () => {
    expect(convert(6)).toBe('VI');
  });

  it('of value 7 should return a Roman numeral', () => {
    expect(convert(7)).toBe('VII');
  });

  it('of value 8 should return a Roman numeral', () => {
    expect(convert(8)).toBe('VIII');
  });

  it('of value 9 should return a Roman numeral', () => {
    expect(convert(9)).toBe('IX');
  });

  it('of value 10 should return a Roman numeral', () => {
    expect(convert(10)).toBe('X');
  });

  it('of value 11 should return a Roman numeral', () => {
    expect(convert(11)).toBe('XI');
  });

  it('of value 12 should return a Roman numeral', () => {
    expect(convert(12)).toBe('XII');
  });

  it('of value 13 should return a Roman numeral', () => {
    expect(convert(13)).toBe('XIII');
  });

  it('of value 14 should return a Roman numeral', () => {
    expect(convert(14)).toBe('XIV');
  });

  it('of value 15 should return a Roman numeral', () => {
    expect(convert(15)).toBe('XV');
  });

  it('of value 16 should return a Roman numeral', () => {
    expect(convert(16)).toBe('XVI');
  });

  it('of value 17 should return a Roman numeral', () => {
    expect(convert(17)).toBe('XVII');
  });

  it('of value 18 should return a Roman numeral', () => {
    expect(convert(18)).toBe('XVIII');
  });

  it('of value 19 should return a Roman numeral', () => {
    expect(convert(19)).toBe('XIX');
  });

  it('of value 20 should return a Roman numeral', () => {
    expect(convert(20)).toBe('XX');
  });

  it('of value 39 should return a Roman numeral', () => {
    expect(convert(39)).toBe('XXXIX');
  });

  it('of value 36 should return a Roman numeral', () => {
    expect(convert(36)).toBe('XXXVI');
  });

  it('of value 61 should return a Roman numeral', () => {
    expect(convert(61)).toBe('LXI');
  });

  it('of value 71 should return a Roman numeral', () => {
    expect(convert(71)).toBe('LXXI');
  });

  it('of value 989 should return a Roman numeral', () => {
    expect(convert(989)).toBe('CMLXXXIX');
  });
});
