//export type dataType = (mOrTimestamp: number, day?: number, year?: number) => Date

/* Defines the overloading signatures that the function can accept */
//export function makeDate(timestamp: number): Date
//export function makeDate(month:number, day:number, year:number): Date

export type dateType = {
    (num1: number): Date
    (num1: number, num2: number, num3: number): Date
}

/* Overloaded function implementation */
export const makeDate:dateType = (mOrTimestamp: number, day?: number, year?: number):Date => {
    if(day && year) return new Date(year, mOrTimestamp-1, day)
    else return new Date(mOrTimestamp)
}

