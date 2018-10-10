import cx from '../cx'

describe('Test cx spec', () => {
  it('input as array', () => {
    // expect(cx(['a', 'b'])).toBe('a b')
    expect(cx(['a', 'b'])).toBe('a b')
  })

  it('input as arguments', () => {
    expect(cx('x', 'y', 'z')).toBe('x y z')
  })

  it('input as Object', () => {
    expect(
      cx({
        foo: false,
        bar: true,
      }),
    ).toBe('bar')
  })
})
