import * as fs from 'fs'

export const readFile = (path: string): string => {
  try {
    const data = fs.readFileSync(path, 'utf8')
    return data
  } catch (_) {
    return ''
  }
}

export const createInput = (data: string): number[][] => data.split('\n').map((line) => line.split('').map(Number))
