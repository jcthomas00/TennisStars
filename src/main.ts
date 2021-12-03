import { makeDate, dateType } from './functions.js'

function printDate(func: dateType) {
    console.log(`The date is ${ func(9, 12, 2021)}) }`)
}

function printCurrentDate(func: dateType) { 
    console.log(`The current date is ${ func(Date.now()) }`) 
}

printDate(makeDate)
printCurrentDate(makeDate)


