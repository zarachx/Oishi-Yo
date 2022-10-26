const sum = (a, b) => a + b;
const multiplication = (a, b) => a * b;

describe('A Sample Test for Sum', () => {
  it('should return a + b value', () => {
    expect(sum(2, 3))
      .toEqual(5);
  });
});

describe('A Sample Test for Multiplication', () => {
  it('should return a * b value', () => {
    expect(multiplication(2, 3))
      .toEqual(6);
  });
});

describe('A Sample Test for Multiplication 2', () => {
  it('should return a * b value', () => {
    expect(multiplication(5, 5))
      .toEqual(25);
  });
});

describe('A Sample Test for Multiplication 3', () => {
  it('should return a * b value', () => {
    expect(multiplication(10, 6)).toBe(60);
  });
});

describe('A Sample Test for Multiplication 4', () => {
  it('should return a * b value', () => {
    expect(multiplication(10, 10)).toBe(100);
  });
});

describe('A Sample Test for Multiplication 5', () => {
  it('should return a * b value', () => {
    expect(multiplication(20, 20)).toBe(400);
  });
});
