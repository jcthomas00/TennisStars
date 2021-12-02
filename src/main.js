"use strict";
exports.__esModule = true;
var functions_js_1 = require("./functions.js");
function printDate(func) {
    console.log("The date is ".concat(func(9, 12, 2021), ")}"));
}
function printCurrentDate(func) { console.log("The current date is ".concat(func(Date.now()))); }
printDate(functions_js_1.makeDate);
printCurrentDate(functions_js_1.makeDate);
