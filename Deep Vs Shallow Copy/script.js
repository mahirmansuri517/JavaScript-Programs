const fruits = ['Mango', 'Apple', 'Orange']

// const myFruits = fruits

// myFruits.push('Dates')
// myFruits.push('Grapes')

const myFruits = []

Object.assign(myFruits, fruits)

const user1 ={
    firstName: 'Anurag',
    lastName: 'Singh',

}
// const user2 ={}

myFruits.push('Grabs')

const user2 = { ...user1} //spread operator(Shallow Copy)