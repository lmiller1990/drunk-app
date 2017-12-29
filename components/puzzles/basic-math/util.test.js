import * as util from './util'

describe('util', () => {
  it('converts dec to bin', () => {
    const dec = 15
    const bin = '1111'

    expect(util.dec2bin(dec)).toBe(bin)
  })

  it('gets some operands', () => {
    let bin = '101'
    expect(util.getOperands(bin)).toEqual(['+', 'x'])
  })

  it('constructs a string rep of a question', () => {
    let expectedQuestion = '1 + 2 x 5'
    const actual = util.constructQuestion([1, 2, 5], ['+', 'x'])
    expect(actual).toEqual(expectedQuestion)
  })

  it('solves a problem', () => {
    let question = '1 x 5 + 3 x 2'
    expect(util.solve(question)).toBe(11)
  })
})
