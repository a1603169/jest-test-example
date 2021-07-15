describe('expect test', () => {
  it('37 to be equal 37', () => {
    expect(37).toBe(37);
  });

  it('{age: 39} to be equal {age: 39}', () => {
    expect({age: 39}).toEqual({age: 39});
  });

  it('.toHaveLength', () => {
    expect("Fuck react").toHaveLength(10);
  });

  it('.toBeDefined', () => {
    expect({name: "Mark"}.name).toBeDefined();
  });

  it('.toBeFalsy', () => {
    expect(false).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(NaN).toBeFalsy();
  });

  it('.toBeGreaterThan', () => {
    expect(10).toBeGreaterThan(9);
  })
  
  it('.toBeGreaterThanOrEqual', () => {
    expect(10).toBeGreaterThanOrEqual(10);
  })

  it('.toBeInstanceOf', () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo);
  })
});
