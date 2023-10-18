let numbers = [1, 2, 3];
let doublenumbers = numbers.map((e) => e * 2);
console.log(doublenumbers);

//F ->

let fehTemp = [32, 68, 86, 104, 212];

function fahToCel(fah) {
    return (fah - 32) * (5 / 9);
}

let celTemp = fehTemp.map(fahToCel);
console.log(celTemp);

//2. filter
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNum = num.filter((e) => e % 2 === 0);
console.log(evenNum);

let employee = [
    { name: "John", age: 30, gender: "male" },
    { name: "Bob", age: 35, gender: "male" },
    { name: "Lisa", age: 40, gender: "female" },
    { name: "Priya", age: 25, gender: "female" },
    { name: "Peter", age: 55, gender: "male" },
];

let femaleEmployeeOver30 = employee.filter((emp) => {
    return emp.gender === "female" && emp.age > 20;
})
console.log(femaleEmployeeOver30);

//Reduce:
const arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);

//max num in array
let top = [10, 5, 25, 8, 30, 15];
let maxNum = top.reduce((max, num) => {
    if (num > max) {
        return num;
    } else {
        return max;
    }
}, top[0]);

console.log(maxNum);

//cart: name, price 
let cartItems = [
    { name: "Jeans", price: 500 },
    { name: "Shirt", price: 300 },
    { name: "Shoes", price: 1000 },
    { name: "Hat", price: 100 },
    { name: "Tshirt", price: 400 },
]

let totalCost = cartItems.reduce((total, item) => total + item.price, 0);
console.log(totalCost);