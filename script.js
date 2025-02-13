// Part 1: Declaring and Invoking Functions
function greet(name = 'Human') {
    return console.log(`Hello ${name}! You are the best!`);
}
 greet();
 greet('Anns');

 // Part 2: Working with Parameters and Returning Values

 function sum(num1, num2) {
    return num1 + num2;
}

let result = sum(10, 20); {
    console.log(result);
}

// Part 3: Function Scope

let x = 10;
 
function changeValue() {
    let x = 25
    console.log("Inside changeValue x = " + x);
}

console.log("Outside changeValue x = " + x);
changeValue();

// Part 4: Closures

function outerFunction() {
    let count = 0;
    return function() {
        count++;
        console.log("Count:", count);
    }
}

let incrementCounter = outerFunction();
incrementCounter();
incrementCounter();
incrementCounter();

function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
    };
}

let counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1