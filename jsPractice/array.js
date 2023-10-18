//Declaration of Array
let myArray =[];

let lang = ["Java","Python","JS"];

lang.push("Ruby","HTML");
console.log(lang);

let numbers =[1,2,3,4,5];
numbers.pop();
console.log(numbers);

let fruits = ["apple","banana","orange"];
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

//4 unshift
let colors =['red','green','black','white'];
colors.unshift('blue','pink');
console.log(colors);
console.log(colors.length);

//5. splice 
let animals = ['dog','cat','bird','fish'];
animals.splice(1,2,"Bear");
console.log(animals);

//6. slice 
let pop = [1,2,3,4,5];
let newpop=pop.slice(1,4);
console.log(newpop);

//7. concat
let fr =["apple","banana","orange"];
let num =[1,2,3,4];
let mixedArray = fr.concat(num);
console.log(mixedArray);

//8. index of 
let color = ["black","red","green","blue","red"];
let indexRed = color.indexOf("naveen");
console.log(indexRed);

  //2nd index of red
  let redSecondIndex = color.indexOf("red",color.indexOf("red")+1);
  console.log(redSecondIndex);

  //9. Includes
  let test =["admin","customer","seller","vendor"];
  let flag=test.includes("seller","vendor");
   console.log(flag);

   //10 foreach
   let n = [1,2,3,4,5,6,7,8,9,10];
   n.forEach((e)=>{
    console.log(e*2);
   })