// function multiply(x,y){
//     return x*y;
// }
// console.log(multiply(3,5));

function isEven(num){
    if(num%2==0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(4));

const difference =function subtract(a,b){
return a-b;
}

console.log(difference(4,2));

const greeting = function greet(name){
    return `Hello, ${name}!`;
}

console.log(greeting("Josh"));

function calculate(x,y){
    const calc= function(x,y){
    sum = x+y;
    return Math.sqrt(sum);
    }
    return calc(x,y);
}


console.log(calculate(5,20));

function average(num1,num2,num3){
    const avg=function(num1,num2,num3){
        sum = num1+num2+num3;
        return (sum/3);
    }
    return avg(num1,num2,num3);
}
console.log(average(3,5,7));
multiply = (a,b) => a*b;
greet = (name) => `Hello, ${name}!`;
square = (x) => x*x;
isEven =(num) => num%2===0;
findMax = (numbers) => Math.max(...numbers);
addTwoNumbers = (a,b) => a+b;