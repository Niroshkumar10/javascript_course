// IF statement and IF Else statement

// let age1=prompt("enter your age");
// if (age1>=18) {
//     console.log("Your the eligible for vote")
// }
// else{
//     console.log("you are the not eligible vote")
// }

// let x2=prompt("enter the number1:")
// let y2=prompt("enter the number2:")

// x2=Number(x2);
// y2=Number(y2);

// console.log("x2:",x2)
// console.log("y2:",y2)

// let add=x2+y2
// console.log(add)

let mark=prompt("enter your percantage:")
console.log("percantage:",mark)

if (mark>=90 || mark>=100) {
    console.log("Your grade is:A");
}
else if(mark>80 || mark>90){
     console.log("Your grade is :B");     
}
else{
    console.log("your garde is :C")
}



// Nested if statement

let tamil=98,English=90,maths=25
let total,avarege;
total=tamil+English+maths;
avg=total/3;
console.log("Total Mark:",total);
console.log("Cut OFF mark:",avg);

if (tamil>=35 && English>=35 && maths>=35) {
    console.log("your result is:pass")
    if (tamil>=40 && English>=40 && maths>=40) {
        console.log("your result is :D")
    } else {
        
    }
}
else{
    console.log("your result is:fail")
}