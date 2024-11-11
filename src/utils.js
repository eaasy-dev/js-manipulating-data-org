const filterFunction = (company) =>{
    console.log(company);
    return company.fieldData.State === "TX"
}

let counter =1;
const mappedFunction = function(dudes) {
    return { company: dudes.fieldData.CompanyName, city: dudes.fieldData.City, ID: dudes.recordId }
}
//seq: counter++
const updateEachElement = (company) =>  {
    company.fieldData.CityState = `${company.fieldData.City},${company.fieldData.State}`
}

export{filterFunction,mappedFunction,updateEachElement}