
// let shedName, shedProduce, sheds, shedsList, dailyShedProduce, totalProduceDisplay, totalDailyProduce, sellingPrice,weeklyIncomeDisplay, weeklyIncome, monthlyProduceDisplay, monthlyIncomeDisplay, yearlyIncomeDisplay ;
let shedName, shedProduce, sheds, shedsList, dailyShedProduce, totalProduceDisplay, totalDailyProduce, sellingPrice,weeklyIncomeDisplay;

// let months = [
// 	{name:'January',days: 31},
// 	{name:'February', days: 29},
// 	{name:'March', days: 31},
// 	{name:'April',days: 30},
// 	{name:'May', days: 31},
// 	{name:'June',days: 30},
// 	{name:'July', days: 31},
// 	{name:'August', days: 31},
// 	{name:'September',days: 30},
// 	{name:'October', days: 31},
// 	{name:'November', days: 30},
// 	{name:'December', days: 31},
// ];

shedName = document.getElementById("shedNameInput");
shedProduce = document.getElementById("shedProduceInput");
shedsList = document.getElementById("shedsList");
dailyShedProduce = document.getElementById("dailyShedProduce");
totalProduceDisplay = document.getElementById("totalProduceDisplay");
weeklyIncomeDisplay = document.getElementById("weeklyIncome");
sellingPrice = document.getElementById("sellingPrice");
monthlyIncomeDisplay = document.getElementById("monthlyIncomeDisplay");

// yearlyIncomeDisplay = document.getElementById("yearlyIncomeDisplay");



sheds = [];

function stringifySheds(){
	let looped = '';
    dailyProduce = '';
	for (let i = 0; i < sheds.length; i++) {
		 looped += `<div> <p>Shed name : ${sheds[i].name} ,  Milk in Litres : ${sheds[i].produce}</p></div>`
	};
	return looped;
};

function addRecord() {
		sheds.push({name: shedName.value, produce: shedProduce.value});
		shedsList.innerHTML = stringifySheds();
        shedName.value = "";
        shedProduce.value = "";	
};

function stringifyShedProduce(){
	let looped = '';
    dailyProduce = '';
	for (let i = 0; i < sheds.length; i++) {
        looped += `<div> <p> Your production in ${sheds[i].name} is ${sheds[i].produce} Litres per day. </p></div>`
	};
	return looped;
};

function dailyProducePerShed() {
    // sheds.push({name: shedName.value, produce: shedProduce.value});
    dailyShedProduce.innerHTML = stringifyShedProduce();
    
};


function getTotalDailyProduce() {
    let total = 0;
	for (let i = 0; i < sheds.length; i++) {
		total += Number(sheds[i].produce)
	};
    return total;
}

function totalProduce(){
	totalDailyProduce = getTotalDailyProduce();
	totalProduceDisplay.innerHTML = `The total production is ${totalDailyProduce} litres per day`;
};

function totalWeeklyIncome(){
	
	weeklyIncome = getTotalDailyProduce() * Number(sellingPrice.value) * 7;
	weeklyIncomeDisplay.innerHTML = `Your weekly income will be Ksh. ${weeklyIncome}`;
};


function monthlyIncome() {
	let monthlyProduce = months.slice();
	let monthlyIncomeHtml = '';
    
	for (let i = 0; i < monthlyProduce.length; i++) {
		monthlyProduce[i].produce = monthlyProduce[i].days * Number(totalDailyProduce) ;
        monthlyProduce[i].income = monthlyProduce[i].days * Number(totalDailyProduce)*Number(sellingPrice.value); ;
	};
	for (let i = 0; i < monthlyProduce.length; i++) {
        monthlyIncomeHtml += `<div> Your income for ${monthlyProduce[i].name} is Ksh. ${monthlyProduce[i].income}</div>`
	};
	monthlyIncomeDisplay.innerHTML = monthlyIncomeHtml;
};


// function yearlyIncome() {
// 	let totalYearly = 0 ;
// 	for (let i = 0; i < months.length; i++) {
// 		totalYearly += months[i].days * Number(totalDailyProduce)*Number(sellingPrice.value);
// 	};
// 	yearlyIncomeDisplay.innerHTML = `Your yearly produce = ${totalYearly}`;
// };
