// for loop:
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("-------------")

// for ... of loop:
const array = [1,2,3,4,5];
for(const e of array){
    console.log(e);
}

console.log("-------------")
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

console.log("while loop -------------")
let p=1;
while(p<=10){
    console.log(p);//1
    //p++;
    // ++p;
    p=p+1;
}

console.log("------------")

let l=2;
while(l<=10){
    console.log(l);
    l=l+2;
}

//do-while loop

console.log("-------------")

let h=1;
do{
    console.log(h);
    h++;
}while(h<=10);

// break 
// 1 to 100: print hi when you see the multiplication of 5 break:

let number = 0;

while (number<=100) {
    console.log(number);
    if (number % 5 ==0) {
        console.log("hi");
        break;
    }
    number++;
}

//
console.log("------------------------------")
const browser = ["chrome","firefox","edge","IE"];

for(const e of browser){
    if (e=="edge") {
        console.log("launch edge . . . . . ");
    }
}

console.log("------------------------------")
//for  .... of loop on object 
const user = {
    name:"John",
    age:"30",
    city:"New York City"
}

for (const key in user) {
    console.log(key+" : "+user[key]);//user[name]
}