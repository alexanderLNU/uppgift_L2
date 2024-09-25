import Weight from '../classes/Weight.js'

describe('Weight', () => {
  test('Creating a new instance of Weight', () => {
    const weight = new Weight(5000, 'g')
    expect(weight.weight).toBe(5000)
    expect(weight.weightUnit).toBe('g')
  })
})

test('Converting weight to new unit', () => {
  const weight = new Weight(5000, 'g')
  const newWeight = weight.convert('kg')
  expect(newWeight.weight).toBe(5)
  expect(newWeight.weightUnit).toBe('kg')
})

test('Adding two instances of weight together', () => {
  const weight1 = new Weight(5000, 'g')
  const weight2 = new Weight(9, 'kg')
  const totalWeight = weight1.add(weight2)
  expect(totalWeight.weight).toBe(14000)
  expect(totalWeight.weightUnit).toBe('g')
})

test('Subtracting two instances of weight', () => {
  const weight1 = new Weight(10000, 'g')
  const weight2 = new Weight(9, 'kg')
  const subtractedWeight = weight1.subtract(weight2)
  expect(subtractedWeight.weight).toBe(1000)
  expect(subtractedWeight.weightUnit).toBe('g')
})

test('See if toString works', () => {
  const weight = new Weight(5000, 'g')
  expect(weight.toString()).toBe('5000 g')
})

test('Throw error if it is a invalid weightvalue', () => {
  expect(() => new Weight('WRONG', 'g')).toThrow('The weight has to be a number!')
})

test('Throw error if it is a invalid weight unit', () => {
  expect(() => new Weight(5000, 'WRONG')).toThrow('You are trying to use a invalid unit!')
})

test('Throw error if conversion is trying to be made to an invalid unit', () => {
  const weight = new Weight(5000, 'g')
  expect(() => weight.convert('WRONG')).toThrow('You are trying to use a invalid unit!')
})

test('Throw error if you are trying to subtract a non-weight instance', () => {
  const weight = new Weight(5000, 'g')
  expect(() => weight.subtract('WRONG')).toThrow('The argument has to be an instance of Weight!')
})

test('Throw error if you are trying to add a non-weight instance', () => {
  const weight = new Weight(5000, 'g')
  expect(() => weight.add(100)).toThrow('The argument has to be an instance of Weight!')
})

test('See if class handles decimals correctly', () => {
  const weight = new Weight(5.5, 'kg')
  const convertedWeight = weight.convert('g')
  expect(convertedWeight.weight).toBeCloseTo(5500)
  expect(convertedWeight.weightUnit).toBe('g')
})

test('See if class handles subtracting a larger weight on a smaller one', () => {
  const weight1 = new Weight(10000, 'g')
  const weight2 = new Weight(20, 'kg')
  const resultWeight = weight1.subtract(weight2)
  expect(resultWeight.weight).toBe(-10000)
  expect(resultWeight.weightUnit).toBe('g')
})

test('See if class handles the value zero', () => {
  const weight = new Weight(0, 'g')
  expect(weight.weight).toBe(0)
  expect(weight.weightUnit).toBe('g')
})

test('Handling negative weight values', () => {
  const weight = new Weight(-5000, 'g')
  expect(weight.weight).toBe(-5000)
  expect(weight.weightUnit).toBe('g')
})
