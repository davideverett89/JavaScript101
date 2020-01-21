console.log("Combo");

const evenOdd = (num) => {
    return num % 2 === 0 ? "Even" : "Odd";
}

const opposite = (num) => {
    return -num;
}

const palindrome = (str) => {
    return str.toLowerCase().split("").reverse().join("") === str ? true : false;
}

const lawrence = (str) => {
    return str === "alligator" ? "small" : "wide";
}

console.log(evenOdd(5));
console.log(opposite(-10));
console.log(palindrome("racecard"));
console.log(lawrence("alligator"));