import { getEpsilonFromGamma, binaryGamma, countOnes, formatInput, PowerConsumption } from '.'
import { createInput, readFile } from '../helpers/fileReader'

describe('count by number per column', () => {
  it('counts how many bits of 1 we have per column', () => {
    expect(countOnes([0])).toEqual(0)
    expect(countOnes([0, 1, 0])).toEqual(1)
    expect(countOnes([0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0])).toEqual(7)
  })
})

describe('binary gamma', () => {
  it('returns binary gamma string', () => {
    expect(binaryGamma([[0]])).toEqual('0')
    expect(binaryGamma([[0], [1]])).toEqual('01')
    expect(binaryGamma(formatInput(createInput(readFile('./src/day3/input_sample'))))).toEqual('10110')
  })
})

describe('format input', () => {
  it('reads 2x2 input and returns a 2x2 matrix', () => {
    expect(
      formatInput([
        [1, 1],
        [0, 1],
      ])
    ).toEqual([
      [1, 0],
      [1, 1],
    ])
  })
  it('reads 2x3 input and returns a 2x3 matrix', () => {
    expect(
      formatInput([
        [1, 1],
        [0, 1],
        [0, 1],
      ])
    ).toEqual([
      [1, 0, 0],
      [1, 1, 1],
    ])
  })
  it('reads sample input and returns the inverted matrix', () => {
    expect(formatInput(createInput(readFile('./src/day3/input_sample')))).toEqual([
      [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0],
    ])
  })
})

describe('binary epsilon', () => {
  it('returns the binary epsilon as a string', () => {
    expect(getEpsilonFromGamma('0')).toEqual('1')
    expect(getEpsilonFromGamma('010010')).toEqual('101101')
  })
})

describe('PowerConsumption', () => {
  describe('returns the power consumption of the sub-marine', () => {
    it('returns 2', () => {
      expect(PowerConsumption([[1], [0]])).toEqual(2)
    })
    it('returns 198 for the sample input', () => {
      expect(
        PowerConsumption([
          [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
          [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
          [0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1],
          [0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0],
        ])
      ).toEqual(198)
    })
  })
})

/**
 * we can count the number 0 or 1 for each rows
 *
 *
 */
