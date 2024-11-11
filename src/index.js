import { companiesData } from "./companies-data";
import {extraRecord} from "./extra-record";
import { mappedFunction,filterFunction,updateEachElement } from "./utils";

const before = document.getElementById("before");

console.log(companiesData.length);

const flast = companiesData.findLast((element) => element === "Orchard");
console.log("found Last",flast);

const lastone = function(company){
    company.forEach((field) => 
        {if (field.fieldData.StreetAddress.includes("Orchard"))
            console.log(field.fieldData.StreetAddress)
        }
    )
};
console.log(lastone(companiesData))

//const filterFunction = function(company){ 
//    console.log(company)
//    return company.fieldData.State === "TX"  
// });


// companiesData.forEach(updateEachElement)

//const manipulatedData = [... new Set ( companiesData.map(obj => obj.fieldData.State))].sort();

//const manipulatedData = companiesData.unshift(extraRecord);
//const manipulatedData = companiesData.push(extraRecord);
//const manipulatedData = companiesData.shift();
//const manipulatedData = companiesData.pop();
//const manipulatedData = companiesData[1].fieldData.City;

const manipulatedData = companiesData.filter(filterFunction).map(mappedFunction);

//TODO: add the manipulated data array to the 'after' div.
before.innerHTML = JSON.stringify(companiesData, null, 2);
const after = document.getElementById("after");
after.innerHTML = JSON.stringify(manipulatedData,null,2);
