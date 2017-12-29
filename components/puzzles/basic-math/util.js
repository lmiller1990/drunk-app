import { random } from 'lodash'

const operators = ['+', '-', 'x']

function ConvertBase (num) {
  return {
    from: function (baseFrom) {
      return {
        to: function (baseTo) {
          return parseInt(num, baseFrom).toString(baseTo)
        }
      }
    }
  }
}

function dec2bin(num) {
  return ConvertBase(num).from(10).to(2)
} 

function getRandomBin() {
  return dec2bin(random(0, 8))
}

function getOperands(binNum) {
  let ops = []
  for (let i in binNum) {
    if (binNum[i] === '1') {
      ops.push(operators[i])
    }
  }

  return ops
}

function randomNumbers(n, max) {
  let nums = []
  for (let i = 0; i < n; i++) {
    nums.push(random(1, max))
  }

  return nums
}

function constructQuestion(numbers, ops) {
  let q = ''
  for (let n in numbers) {
    q = q.concat(numbers[n] + ' ') 

    if (n < ops.length)
      q = q.concat(ops[n] + ' ')
  }

  return q.trim()
}

function solve(question) {
  question = question.replace(/x/g, '*')
  return eval(question)
}

export { 
  solve, 
  getOperands, 
  dec2bin, 
  constructQuestion,
  randomNumbers,
  getRandomBin
}
