const message = 'Hello world!'

const faltuMessage = '      Hi, I am Mahir      '
const finalMessage = faltuMessage.trim()
const finalMessageLowerCase = faltuMessage.trim().toLowerCase()
const replaceMessage = finalMessage.replace('Hi','Hello')

const lastFourDigit = '6473'
const maskedAccountNumber = lastFourDigit.padStart(16,'*')
// const maskedAccountNumber = lastFourDigit.padEnd(16,'*')
// const a = message.toUpperCase()

const ascii = message.charCodeAt(6)
