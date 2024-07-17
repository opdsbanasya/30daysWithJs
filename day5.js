// Day 5: Functions Tasks/Activities: 
// Activity 1: Function Declaration 
    // Task 1: Write a function to check if a number is even or odd and log the result to the console. 
    const num = 32;
    function isEven(){
        if(num%2 === 0){
            console.log(`${num}  is a even num`);
        } else {
            console.log(`${num}  is not a even num`);
        }
    }
    isEven();

    //Task 2: Write a function to calculate the square of a number and return the result. 
    function squareOfNum(){
        return num*num;
    }
    console.log(`${squareOfNum()} is square of ${num}`);

// Activity 2: Function Expression 
    // Task 4: Write a function expression to concatenate two strings and return the result. 
    const concat = function(){
        const fName = "Yuvraj";
        const lName = "Singh";
        return( fName + lName);
    }
    console.log(`full name is ${concat()}`);

    // Task 3: Write a function expression to find the maximum of two numbers and log the result to the console. 
    const maxNum = function(){
        const num1 = 56;
        const num2 = 23;
        return (num1>num2 ? num1 : num2);
    }
    console.log(`the max num is ${maxNum()}`);

// Activity 3: Arrow Functions 
    // Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value. 
    const specificChar = "Achievement";
    let char = 'v';
    const containChar = ()=>{
        return (specificChar.includes(char));
    }
    console.log(`${specificChar} is contains ${char} is ${containChar()}`)

    // Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
    const sumOfNums = ()=>{
        const num1 = 56;
        const num2 = 23;
        return (num1 + num2);
    }
    console.log(`sum is ${sumOfNums()}`);

// Activity 4: Function Parameters and Default Values 
    // Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age. 
    const personData = (name, age=18)=>{
        return (`Hello ${name}, your age is ${age}`)
    }
    console.log(personData("Tom"))
    // Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
    const product = (pNum1, pNum2 = 4)=>{

    }

// Activity 5: Higher-Order Functions 
    // Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result. 
    const cubeOfNum = (cube, result, num) =>{
        const res = cube(num);
        result(res, num);
    }
    cubeOfNum((num)=>{
        return num*num*num;
    },(res,num)=>{
        console.log(`the cube of ${num} is ${res}`);
    }, 5)

    // Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
    const Ajube = (resultAjube, numOfAjub)=>{
        resultAjube(numOfAjub);
    }   
    Ajube((numOfAjub)=>{
        console.log(`Total ${numOfAjub} in the world!`)
    }, 7)

// Feature Request: 
    // 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result. 
    // 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result. 
    // 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result. 
    // 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result. 
    // 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times. 

// Achievement: By the end of these activities, students will: 
//  Understand and define functions using function declarations, expressions, and arrow functions. 
//  Use function parameters and default values effectively. 
//  Create and utilize higher-order functions. 
//  Apply functions to solve common problems and perform calculations. 
//  Enhance code reusability and organization using functions. 

