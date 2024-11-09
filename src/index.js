import { companiesData } from "./companies-data";

const before = document.getElementById("before");
console.log(companiesData.length);
const manipulatedData = companiesData.shift();
//const manipulatedData = companiesData.pop();
//const manipulatedData = companiesData[1].fieldData.City;
//TODO: add the manipulated data array to the 'after' div.
before.innerHTML = JSON.stringify(companiesData, null, 2);
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData,null,2);
