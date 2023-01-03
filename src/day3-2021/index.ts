// import { createInput, readFile } from '../helpers/fileReader'

export const formatInput = (arr: number[][]): number[][] => {
  const matrix: number[][] = []
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i]
    for (let j = 0; j < row.length; j++) {
      if (!matrix[j]) {
        matrix[j] = []
      }
      matrix[j][i] = row[j]
    }
  }
  return matrix
}

export const countOnes = (iMatrix: number[]): number => iMatrix.filter((i) => i === 1).length

export const binaryGamma = (matrix: number[][]): string =>
  matrix.reduce((acc, curr) => {
    const count = countOnes(curr)
    acc += count > curr.length / 2 ? 1 : 0
    return acc
  }, '')

export const getEpsilonFromGamma = (gamma: string): string => {
  let epsilon = ''
  for (let i = 0; i < gamma.length; i++) {
    epsilon += gamma[i] === '1' ? '0' : '1'
  }

  return epsilon
}

export const PowerConsumption = (iMatrix: number[][]): number => {
  const bGamma = binaryGamma(iMatrix)
  const epsilon = parseInt(getEpsilonFromGamma(bGamma), 2)
  const gamma = parseInt(bGamma, 2)

  return epsilon * gamma
}

// console.log(PowerConsumption(formatInput(createInput(readFile('./src/day3/input')))))
