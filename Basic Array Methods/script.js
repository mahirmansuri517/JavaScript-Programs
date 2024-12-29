const evenNumbers = [0, 2, 4, 6, 8]
const animals = ['Dog', 'Cat', 'Rat', 'Lion']
const fruit = ['Mango', 'Papaya', 'Orange']

// evenNumbers.pop()//This will remove element from last in array
// evenNumbers.push(10)//This will insert element at last in array
// evenNumbers.shift()//This will remove first element from array
// evenNumbers.unshift(-2)//This will insert element at first in array

const addArray1 = evenNumbers.concat(animals)
const addArray2 = animals.concat(evenNumbers)
const addArray3 = animals.concat(evenNumbers, fruit)

const elementIndex = animals.indexOf('Cat')
const isIncluded = animals.includes('Dog')

// const sorting = animals.sort()


// console.log(animals.slice(1,3));

//  console.log(animals.splice(1,1))


