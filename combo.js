// const evenOdd = (num) => {
//     return num % 2 === 0 ? "Even" : "Odd";
// }

// const opposite = (num) => {
//     return -num;
// }

// const palindrome = (str) => {
//     let arr = [];
//     let lowerCase = str.toLowerCase();
//     let strSplit = lowerCase.split('');
//     let filteredArray = strSplit.filter(function(index) {
//       if (index.match(/^[A-Za-z]+$/)) {
//         return index;
//       }
//       else if (index.match(/^[0-9][A-Za-z0-9 -]*$/)) {
//         return index;
//       }
//     });
//     for (let i = filteredArray.length - 1; i >= 0; i--) {
//       arr.push(filteredArray[i]);
//     }

//     if (filteredArray.toString() === arr.toString()) {
//       return true;
//     } else {
//       return false;
//     }
//    };


// const palindrome = (str) => {
//     return str.toLowerCase().split("").reverse().join("") === str ? true : false;
// }

const lawrence = (str) => {
    return str.toLowerCase() === "alligator" ? "small" : "wide";
}

// console.log(evenOdd(5));
// console.log(opposite(-10));
// console.log(palindrome("able !was i ere i. saw elba"));
console.log(lawrence("Alligator"));