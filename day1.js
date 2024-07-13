// *Day 1: Variables and Data Types
// Tasks/Activities:
// Activity 1: Variable Declaration
    // Task 1: Declare a variable using var , assign it a number, and log the value to the console.
    var num = 10;
    console.log(`The declared variable is : ${num}`);

    // Task 2: Declare a variable using let , assign it a string, and log the value to the console.
    let  name = "Oggy";
    console.log(`The name is : ${name}`);


// Activity 2: Constant Declaration
    // Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.
    const boolValue = true;
    console.log(`boolValue is ${boolValue}`);


// Activity 3: Data Types
    // Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
    const id = 13;
    console.log(`type of id is ${typeof id}` );

    const user = "Marine";
    console.log(`type of user is ${typeof user}`);

    const is18 = true;
    console.log(`type of is18 is ${typeof is18}`);

    const favThings = {
        movie : "Random",
        game: "Snake",
    }
    console.log(`type of favorite things ${typeof favThings}`);

    const certificates = ["Google Event", "A random hackathon"];
    console.log(`type of certificate variable is ${typeof certificates}`);


// Activity 4: Reassigning Variables
    // Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.
    let value = 165;
    console.log(`old value id '${value}'`);

    value = 200;
    console.log(`new value is '${value}'`);


// Activity 5: Understanding const
    // Task 6: Try reassigning a variable declared with const and observe the error.
    const isType = true;
    isType = false;
    // ! when trying to reassigning a value into a const cariable, getting error that is 'TypeError: Assignment to constant variable.'

// Feature Request:
    // 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
    // 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
// Achievement:
// By the end of these activities, you will:
    // Know how to declare variables using var, let, and const.
    // Understand the different data types in JavaScript.
    // Be able to use the typeof operator to identify the data type of a variable.
    // Understand the concept of variable reassignment and the immutability of const variables.