// const factory = (name, age, height, weight) => {
//     return {
//         name: name,
//         age: age,
//         height: height,
//         weight: weight
//     }
// }

// const david = factory("David", "30", "6 feet", "160 lbs.");

// console.log(david);

// const howMany = (word) => {
//     return word.length;
// }

// console.log("How many letters are in cat:", howMany("cat"));
// console.log(howMany("monkeybutt"));

// const ageCheck = (age) => {
//     age >= 21 ? console.log("PARTY!!") : console.log("No drinks for you!");
// }

// ageCheck(20);
// ageCheck(21);
// ageCheck(22);
// ageCheck(4);

// const expense = {
//     dateCreated: "01/20/2020",
//     location: "Nashville",
//     cost: "$100",
//     isGood: true
// }

// console.log(expense.cost);

const myEmployee = {
    wage: "$10.00/hr",
    job: "janitor",
    dateHired: "10/17/2018",
    firstName: "Bob",
    lastName: "Johnson",
    passedDrugScreen: true
}

const statusMaker = (employee) => {
    (employee.firstName.startsWith("M")) ? employee.status = "vip" : employee.status = "peasant";
    return employee;
}

console.log(statusMaker(myEmployee));