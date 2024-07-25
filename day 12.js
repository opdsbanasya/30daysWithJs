// Day 12: Error Handling
// Tasks/Activities:
// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
const errHandle = () => {
    try {
        throw new Error("Network error")
    } catch (err) {
        console.log(err);
    }
}
errHandle()

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
const divide = () => {
    let numerator = 5;
    let denominator = 0;
    if (denominator === 0) {
        try {
            throw new Error("Denominator is zero! can't divide");
        } catch (err) {
            console.log(err);
        }
    } else {
        let result = numerator / denominator;
        console.log(result);
    }
}
divide();


// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
const multi = () => {
    let num1 = 5;
    let num2 = -6;
    if (num1 < 0 || num2 < 0) {
        try {
            throw new Error("getting nagetive number by multiplication")
        } catch (error) {
            console.log(error);
        }
        finally {
            console.log(`the result is : ${num1 * num2}`);
        }
    }
}
multi()

// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class ValidationError extends Error{
    constructor(msg){
        super(msg);
        this.name = "Validation Error";
    }
}
const multiply = (a,b)=>{
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new ValidationError("Validation error occured");
    }
    return a*b;
}
try{
    let res = multiply(5,'3')
    console.log(res);
} catch(err){
    console.log(err);
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class EmptyStringError extends Error{
    constructor(msg){
        super(msg);
        this.name = "Empty String Error";
    }
}
const input = () =>{
    let inpStr = prompt("Enter a String")
    if(inpStr.length === 0){
        throw new EmptyStringError("The Entered String is Empty")
    }
    return inpStr;
}
try{
    console.log(`The string is : ${input()}`);
} catch(err){
    console.log(err);
}
// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const startLive = () => {
    let intSpeed = Math.floor(Math.random() * 10)
    return new Promise((resolve, reject) => {
        if (intSpeed < 4) {
            reject("network speed is slow");
        } else {
            resolve("Stream live started");
        }
    })
}

startLive().then((res) => {
    console.log(res);
})
    .catch(err => {
        console.log(err);
    })

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
let intSpeed = Math.floor(Math.random() * 10)
const liveStreamPromise = () => {
    return new Promise((resolve, reject) => {
        if (intSpeed < 4) {
            reject("network speed is slow");
        } else {
            resolve("live started");
        }
    })
}

try {
    const liveStream = async () => {
        try {
            const res = await liveStreamPromise();
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }
    liveStream();
} catch (err) {
    console.log(err);
}

// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
const productData = () => {
    let api = "https://fakestoreapi.com/prducts/1";

    fetch(api).
        then(res => {
            if (!res.ok) {
                throw new Error("product data not retrieve");
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(err =>{
            console.log(err);
        })
        
    
}
productData();

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
const userData = async () => {
    let api = "https://fakestoreapi.com/usrs/1";
    try {
        await fetch(api).
            then(res => {
                if (!res.ok) {
                    throw new Error("user data not retrieve");
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
            })
    } catch (err) {
        console.log(err);
    }
}
userData();

// Feature Request:
// Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.
// Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
// Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.
// Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.
// Achievement:
// By the end of these activities, students will:
// Understand and implement basic error handling using try-catch blocks.
// Use finally blocks to execute code regardless of the try-catch outcome.
// Create and use custom error classes.
// Handle errors in promises using .catch() and within async functions using try-catch.
// Implement graceful error handling when making network requests with the fetch API.*/