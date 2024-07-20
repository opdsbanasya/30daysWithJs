// Day 8: ES6+ Features
// Tasks/Activities:
// Activity 1: Template Literals
    // Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
    const personName = "Kittu", age = 2;
    console.log(`The person name is ${personName} and age is ${age}`);

    // Task 2: Create a multi-line string using template literals and log it to the console.
    const multiline = `Hello! I am taking 30 days JavaScript challange and it is 8th day`;
    console.log(multiline);


// Activity 2: Destructuring
    // Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
    const arr = [2,5,6,4,8];
    const [first, second, ...firstSecond] = arr;
    console.log(`First and second elements are ${first} and ${second}`);

    // Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
    const bookInfo = {
        title:"Crying in H Mart",
        author:"Michelle Zauner",
        year:1953,
    }
    const {title , author} = bookInfo;
    console.log(`The book name is ${title} written by ${author}`);

// Activity 3: Spread and Rest Operators
    // Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
    const arrPlus = [...arr, 8,9]
    console.log(`Here is the additioal array ${arrPlus}`);

    // Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
    const sum = ([...sumArr])=>{
        return sumArr.reduce((acc, curr)=>{
            return (acc+curr);
        })
    }
    console.log(`The sum of arr is ${sum(arr)}`);


// Activity 4: Default Parameters
    // Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
    const productNum = (num1, num2 = 1)=>{
        return num1 * num2;
    }
    console.log(`With second parameter ${productNum(5,6)}`);
    console.log(`Without second parameter ${productNum(5)}`);


// Activity 5: Enhanced Object Literals
    // Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
    const newPerson = {
        name:"Sijuka",
        age:8,
        info:()=>{
            return `The person name is ${newPerson.name} and age is ${newPerson.age}`
        }
    }
    console.log(`Person info :\n${newPerson.info()}`);


    // Task 9: Create an object with computed property names based on variables and log the object to the console.
    const productName = "Mobile"
    const product = {
        name:productName,
        [`${productName}Price`]:20000,
        manFactYear:2024
    }
    console.log(product);
    
    
// Feature Request:
    // Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
    // Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
    // Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
    // Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
    // Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.
// Achievement:
// By the end of these activities, students will:
    // Understand and use template literals for string interpolation and multi-line strings.
    // Apply destructuring to extract values from arrays and objects.
    // Utilize spread and rest operators for array manipulation and function arguments.
    // Define functions with default parameters.
    // Create objects using enhanced object literals, including methods and computed property names.