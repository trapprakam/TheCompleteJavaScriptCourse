/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three 
parameters: 'country', 'population' and 'capitalCity'. Based on this input, 
the function returns a string with this format: 'Finland has 6 million people and 
its capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`
}


let englandDescription = describeCountry("England", 56, "London");
let floridaDescription = describeCountry("Florida", 21, "Tallahassee");
let spainDescription = describeCountry("Spain", 47, "Madrid");

console.log(englandDescription);
console.log(floridaDescription);
console.log(spainDescription);

/*
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration called 
'percentageOfWorld1' which receives a 'population' value, and returns the percentage
 of the world population that the given population represents. For example, China has
  1441 million people, so it's about 18.2% of the world population
2. To calculate the percentage, divide the given 'population' value by 7900 and then 
multiply by 100
3. Call 'percentageOfWorld1' for 3 populations ofcountries of your choice, store the 
results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations 
(can be the same populations)
*/


// Function declaration
function percentageOfWorld1(population) {
    const worldPopulation = 790000000;
    // Used to scale the population parameter if
    // a value provided is under 1000
    if (population < 1000) {
        population = population * 1000000;
    }
    return ((population / worldPopulation) * 100).toFixed(2);
}

let englandPercentageToWorld = percentageOfWorld1(56);
let floridaPercentageToWorld = percentageOfWorld1(21);
let spainPercentageToWorld = percentageOfWorld1(47);

console.log(englandPercentageToWorld);
console.log(floridaPercentageToWorld);
console.log(spainPercentageToWorld);

// Function expression
const percentageOfWorld2 = function percentageOfWorld1(population) {
    const worldPopulation = 790000000;
    // Used to scale the population parameter if
    // a value provided is under 1000
    if (population < 1000) {
        population = population * 1000000;
    }
    return ((population / worldPopulation) * 100).toFixed(2);
}

englandPercentageToWorld = percentageOfWorld2(56);
floridaPercentageToWorld = percentageOfWorld2(21);
spainPercentageToWorld = percentageOfWorld2(47);

console.log(englandPercentageToWorld);
console.log(floridaPercentageToWorld);
console.log(spainPercentageToWorld);

/*
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
   'percentageOfWorld3'
*/

// Arrow function 
const percentageOfWorld3 = population => {
    const worldPopulation = 790000000;
    // Used to scale the population parameter if
    // a value provided is under 1000
    if (population < 1000) {
        population = population * 1000000;
    }
    return ((population / worldPopulation) * 100).toFixed(2);
}

englandPercentageToWorld = percentageOfWorld1(56);
floridaPercentageToWorld = percentageOfWorld1(21);
spainPercentageToWorld = percentageOfWorld1(47);

console.log(englandPercentageToWorld);
console.log(floridaPercentageToWorld);
console.log(spainPercentageToWorld);

/*
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you like the 
most. This function takes in two arguments: 'country' and 'population', and 
returns a string like this: 'China has 1441 million people, which is about 18.2% 
of the world.'
2. To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' 
you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/

function describePopulation(country, population) {
    percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world population.`
}

let englandPopulationDescription = describePopulation("England", 56);
let floridaPopulationDescription = describePopulation("Florida", 21);
let spainPopulationDescription = describePopulation("Spain", 47);

console.log(englandPopulationDescription);
console.log(floridaPopulationDescription);
console.log(spainPopulationDescription);

/*
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice. 
You may use the values you have been using previously. Store this array into a variable 
called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages'containing the percentages of the
world population for these 4 population values. 
Use the function 'percentageOfWorld1' that you created earlier to compute the 4 percentage 
values
*/

// 1.
let englandPopulation = 56;
let floridaPopulation = 21;
let spainPopulation = 47;
let australiaPopulation = 26;
const populations = [englandPopulation, floridaPopulation, spainPopulation, australiaPopulation];
console.log(`Populations of England, Florida, Spain, and Australia respectecfully.`);
console.log(populations);
// 2.
console.log(populations.length >= 4);
// 3.
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), 
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])];
console.log(`Populations percentages of England, Florida, Spain, and Australia respectecfully.`);
console.log(percentages);


/*
LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your choice.
 Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
2. At some point, a new country called' Utopia' is created in the neighbourhood of your selected country.
 So add it to the end of the 'neighbours' array
3. Unfortunately, after sometime, the new country is dissolved. So remove it from the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, logtothe console: 
'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the index of the country 
in the 'neighbours' array, and then use that index to change the array at that index position. 
For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

// 1.  England neighbours
neighbours = ["Wales", "Scotland", "Northern Ireland", "Ireland", "France"];
console.log("England neighbours.");
console.log(neighbours);
// 2. 
neighbours.push("Utopia");
console.log("New neighbour alert!! 📣");
console.log(neighbours);
// 3.
neighbours.pop();
console.log("New neighbour left. 😞");
console.log(neighbours);
// 4.
if (neighbours.includes("Germany")) {
    // pass
} else {
    console.log("Probably not a central European country :D");
}
// 5.
let scotlandIndex = neighbours.indexOf("Scotland");
neighbours[scotlandIndex] = "Braveheart Scotland";
console.log(neighbours);


/*
LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing properties 
'country', 'capital', 'language', 'population' and 'neighbours' 
(an array like we used in previous assignments)
*/

const myCountry = {
    country: 'USA (Florida)',
    capital: 'Tallahassee',
    language: 'English',
    population: 21000000,
    neighbours: ['Georgia', 'Alabama'],
    // Below was added from `LECTURE: Object Methods` objective
    describe: function() {
        console.log(`${this.country} has ${this.population - 20999979} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },
    isIsland: function() {
        return this.neighbours.length > 0 ? false : true
    }
};
console.log("My Country!");
console.log(myCountry);


/*
LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the 
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
 and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then 
decrease it by two million using brackets notation.
*/

// 1.
console.log(`${myCountry.country} has ${myCountry.population - 20999979} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);


// 2.
console.log("My country population increased by two million. Current population now.");
console.log(myCountry.population + 2000000);
console.log("My country population decreased by two million. Current population now.");
console.log(myCountry['population'] - 2000000);


/*
LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method 
will log a string to the console, similar to the string logged in the 
previous assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. 
This method will set a new property on the object, called 'isIsland'.
 'isIsland' will be true if there are no neighbouring countries,
  and false if there are. Use the ternary operator to set the property.
*/

// 1.
// Completed. See 'myCountry' object
// 2.
myCountry.describe()
// 3.
console.log(myCountry.isIsland())


/*
LECTURE: Iteration: The for Loop
1. There are elections in your country! In a small town, there are only 50 
voters. Use a for loop to simulate the 50 people voting, 
by logging a string like this to the 
console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}

/*
 LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment, 
and reflect on how much better this solution is
 */

// 1. and 2.
const percentages2 = [];
for(let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
// 3.
const equal = true;
for (let i =0; i < percentages2.length; i++) {
    if (percentages2[i] !== percentages[i]) {
        console.log(`Percentages array and Percentages 2 array are not the same!`);
        equal = false;
        break;
    }
}
if (equal) {
    console.log("Percentages array and Percentages2 array are the same!")
}


/*
LECTURE: Looping Backwards and Loops in Loops
1. Store this array of arrays into a variable called 'listOfNeighbours' 
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire arrays. 
Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's 
too difficult for you! But you can still try to figure this out anyway 😉
*/

// 1.
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// 2., 3.
for(let i = 0; i < listOfNeighbours.length; i++) {
    // I don't understand what he wants done.
}

/*
LECTURE: The while Loop
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using 
a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while loop?
*/

// 1.
const percentages3 = []
let i = 0;
while(i < populations.length) {
    percentages3[i] = percentageOfWorld1(populations[i]);
    i++;
}
console.log("Percentages3:");
console.log(percentages3);