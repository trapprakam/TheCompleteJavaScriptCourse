//  Coding Challenge 1


/* 
TEST DATA 1
 Dolphns score 44, 23, 71
 Koalas score 65, 54, 49

TEST DATA 2
 Dolphns score 85, 54, 41
 Koalas score 23, 34, 27

*/ 
// Arrow function
// 1. Create an arrow function to compute average of 3 scores.
let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// 2. Calculate average for both teams.
let dolphnsAverageScore1 = calcAverage(44, 23, 71);
let koalasAverageScore1 = calcAverage(65, 54, 49);

let dolphnsAverageScore2 = calcAverage(85, 54, 41);
let koalasAverageScore2 = calcAverage(23, 34, 27);
//3. Create a function to check who is the winner.
function checkWinner(dolphnsAvgScore, koalasAvgScore) {
    // A team ONLY wins if it has at least DOUBLE the
    // average score of the other team.
    if (dolphnsAvgScore >= (koalasAvgScore * 2)) {
        console.log(`Dolphns win 🏆 (${dolphnsAvgScore} vs. ${koalasAvgScore})`);
    } else if (koalasAvgScore >= (dolphnsAvgScore * 2)) {
        console.log(`Koalas win 🏆 (${koalasAvgScore} vs. ${dolphnsAvgScore})`);
    } else {
        console.log("Unfortunately... no one won. 😩")
    }
}
//4. Determine the winner for both test data
checkWinner(dolphnsAverageScore1, koalasAverageScore1);
checkWinner(dolphnsAverageScore2, koalasAverageScore2);
//5. Ignore draws this time.



//  Coding Challenge 2

/*
TEST DATA: 125, 555, and 44
*/

// 1. Write 'calcTip' function
function calcTip(currentBill) {
    return currentBill >= 50 && currentBill <= 300 ? currentBill * 0.15 : currentBill * 0.20
}

// 2. Create an array 'bills' containing the test data
let bills = new Array(125, 555, 44);
console.log("Current bills. 💷");
console.log(bills);
// 3. Create an array 'tips' conatining the tip value for each bill,
// computed from the 'calcTip' function.
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log("The tip amount in respect to the current bills, in respective order.");
console.log(tips);
// 4. Create an array 'total' contaiing the total values, so the bill + tip
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log("Total.");
console.log(total);


//  Coding Challenge 3

// 1. Create a Mark and John object
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calBMI: function() {
        if (this.BMI == null) {
            this.BMI = (this.mass / (this.height * this.height)).toFixed(2);
        }
        return this.BMI;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calBMI: function() {
        if (this.BMI == null) {
            this.BMI = (this.mass / (this.height * this.height)).toFixed(2);
        }
        return this.BMI;
    }
};

// 2.
// Completed

// 3.
if (mark.calBMI() > john.calBMI()) {
    console.log(`${mark.fullName} BMI (${mark.BMI}) is higher than ${john.fullName} (${john.BMI})`);
} else {
    console.log(`${john.fullName} BMI (${john.BMI}) is higher than ${mark.fullName} (${mark.BMI})`);
}


//  Coding Challenge 4

// 1. Create an array 'bills' containing all 10 test bill value.
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// 2. Create empty arrays for the tips and tht totals
tips = []
const totals = []
// 3. Use the 'calcTip' function to calculate tips and total values 
// (bill + tip) for every bill value in the bills array.
// Use a for loop to perform the 10 calculations.
for(let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
}
console.log(`Tips:`);
console.log(tips)
console.log(`Totals:`);
console.log(totals)
// BONUS 
// Write a function 'calcAverage' which takes an array called 'arr'
// as an argument. This function calculates the average of all numbers
// in the given array.
function calcAverage2(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(`Totals Average: ${calcAverage2(totals)}`);