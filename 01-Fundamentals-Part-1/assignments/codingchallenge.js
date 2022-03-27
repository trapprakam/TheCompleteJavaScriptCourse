
// Code challenge 1  & Code challenge 2

// BMI (Body Mass Index) = mass / height ** 2. 
// mass in kg and height in meter

// TEST DATA 1
let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

let markCurrentBMI = markWeight / (markHeight * markHeight);
let johnCurrentBMI = johnWeight / (johnHeight * johnHeight);
console.log(`Mark BMI: ${markCurrentBMI}`, `John BMI: ${johnCurrentBMI}`);
if (markCurrentBMI > johnCurrentBMI) {
    console.log(`Mark BMI (${markCurrentBMI.toFixed(2)}) is higher than John BMI (${johnCurrentBMI.toFixed(2)})`);
} else {
    console.log(`John BMI (${markCurrentBMI.toFixed(2)}) is higher than Mark BMI (${johnCurrentBMI.toFixed(2)})`);
}

// TEST DATA 2
markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

markCurrentBMI = markWeight / (markHeight * markHeight);
johnCurrentBMI = johnWeight / (johnHeight * johnHeight);
console.log(`Mark BMI: ${markCurrentBMI}`, `John BMI: ${johnCurrentBMI}`);
if (markCurrentBMI > johnCurrentBMI) {
    console.log(`Mark BMI (${markCurrentBMI.toFixed(2)}) is higher than John BMI (${johnCurrentBMI.toFixed(2)})`);
} else {
    console.log(`John BMI (${markCurrentBMI.toFixed(2)}) is higher than Mark BMI (${johnCurrentBMI.toFixed(2)})`);
}


// Coding Challenge 3
//1.
// Test Data
let avgScoreDolphinsTeam = (96 + 108 + 89) / 3;
let avgScoreKoalasTeam = (88 + 91 + 110) / 3;

//2. 
if (avgScoreDolphinsTeam > avgScoreKoalasTeam) {
    console.log("Dolphins win the competition!");
} else if (avgScoreKoalasTeam > avgScoreDolphinsTeam) {
    console.log("Koalas win the competition!");
} else if (avgScoreDolphinsTeam === avgScoreKoalasTeam) {
    console.log("Draw");
} else {
    console.log("Sadly... no one won the tropy");
}

//3. BONUS 1
// BONUS 1 TEST DATA
avgScoreDolphinsTeam = (97 + 112 + 101) / 3;
avgScoreKoalasTeam = (109 + 95 + 123) / 3;

if (avgScoreDolphinsTeam > avgScoreKoalasTeam && avgScoreDolphinsTeam >= 100) {
    console.log("Dolphins win the competition!");
} else if (avgScoreKoalasTeam > avgScoreDolphinsTeam && avgScoreKoalasTeam >= 100) {
    console.log("Koalas win the competition!");
} else if (avgScoreDolphinsTeam === avgScoreKoalasTeam) {
    console.log("Draw");
} else {
    console.log("Sadly... no one won the tropy");
}

//4. BONUS 2
// BONUS 2 TEST DATA
avgScoreDolphinsTeam = (97 + 112 + 101) / 3;
avgScoreKoalasTeam = (109 + 95 + 106) / 3;

if (avgScoreDolphinsTeam > avgScoreKoalasTeam && avgScoreDolphinsTeam >= 100) {
    console.log("Dolphins win the competition!");
} else if (avgScoreKoalasTeam > avgScoreDolphinsTeam && avgScoreKoalasTeam >= 100) {
    console.log("Koalas win the competition!");
} else if (avgScoreDolphinsTeam === avgScoreKoalasTeam && avgScoreDolphinsTeam > 100 && 
    avgScoreKoalasTeam > 100){
    console.log("Draw");
} else {
    console.log("Sadly... no one won the tropy");
}


// Coding Challenge 4
// Test Data 1
let bill = 275;
let tip = bill >= 50 && bill <= 300 ? (0.15 * bill) : (0.20 * bill);
console.log(`The bill was $${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

// Test Data 2
bill = 40;
tip = bill >= 50 && bill <= 300 ? (0.15 * bill) : (0.20 * bill);
console.log(`The bill was $${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

// Test Data 3
bill = 430;
tip = bill >= 50 && bill <= 300 ? (0.15 * bill) : (0.20 * bill);
console.log(`The bill was $${bill}, the tip was ${tip}, and the total value ${bill + tip}`)