"use strict";
exports.__esModule = true;
exports.makeDate = void 0;
/* Defines the overloading signatures that the function can accept */
//export function makeDate(timestamp: number): Date
//export function makeDate(month:number, day:number, year:number): Date
/* Overloaded function implementation */
var makeDate = function (mOrTimestamp, day, year) {
    if (day && year)
        return new Date(year, mOrTimestamp - 1, day);
    else
        return new Date(mOrTimestamp);
};
exports.makeDate = makeDate;
