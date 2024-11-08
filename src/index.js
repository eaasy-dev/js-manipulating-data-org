import { companiesData } from "./companies-data";
import {extraRecord } from "./extra-record";

console.log ("companiesData", companiesData);
console.log("Extra" , extraRecord);

const before = document.getElementById("before");
before.innerHTML = JSON.stringify(companiesData, null, 2);

const manipulatedData = [];
//TODO: add the manipulated data array to the 'after' div.
//const after = document.getElementById.ElemementByID("after");
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData,null,2);
console.log("hellow world from object branch?");
