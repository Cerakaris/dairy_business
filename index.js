
// let noOflitres = 50;

// let sellingPrice = 45;

// var income;

// function income(selling,noOfDays){
//     var x = selling * noOfDays * noOflitres;
//     return x;
// };



// console.log(`Your weekly income will be ${   income(sellingPrice,7)   }`);
// console.log(`Your yearly income will be ${   income(sellingPrice,366)   }`);


// const months = {
//     january : 31,
//     February : 29,
//     March:31,
//     December : 31
// }

// for (const x in months){
//     console.log(`Your income for ${x} is ${income(sellingPrice, months[x])}`)
// }

// var shedA, shedB, shedC, shedD, shedE, shedF;
// var sellingPrice = 45

// var litresPerShed = [shedA, shedB, shedC, shedD, shedE, shedF];
// var farmSheds = ["Shed A", "Shed B", "Shed C", "Shed D", "Shed E", "Shed F"];

// var totalProduction = function (litresPerShed){
//     var total = 0;
//     for (var i = 0; i<litresPerShed.length; i++){
//         total += litresPerShed[i];
//         // return x;
//         console.log(`Your production in ${farmSheds[i]} is ${litresPerShed[i]} litres per day`);
//     }
//     console.log(`The total production is ${total} litres per day`);
// }

// totalProduction();

var shedName = function (name)
{
    var shedNameAdd = document.getElementById("add");
    var shedNameInput = document.getElementById("inputnumber2");
    shedNameAdd.onclick(() => console.log(shedNameInput.value));
    var shedNameArray= [];
    shedNameArray.push(shedNameAdd.value);
    shedNameArray.push(name);
    return shedNameArray;
}

// console.log(shedName('shedB'));
var shedNameInput = document.getElementById("inputnumber2");
function addRecord(e) {
    console.log('clicked')
    console.log(shedNameInput.value);
}

console.log('maneno')