// Day 6: Arrays
// Tasks/Activities:
// Activity 1: Array Creation and Access
    // Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
        const num = [1,2,3,4,5]
        console.log(`the array is ${num}`);

    // Task 2: Access the first and last elements of the array and log them to the console.
        console.log(`The first element of array : ${num[0]}`);
        console.log(`The last element of array : ${num[num.length - 1]}`);


// Activity 2: Array Methods (Basic)
    // Task 3: Use the push method to add a new number to the end of the array and log the updated array.
        num.push(6);
        console.log(`updated array is ${num}`);

    // Task 4: Use the pop method to remove the last element from the array and log the updated array.
        const poppedElem = num.pop()
        console.log(`the popped element : ${poppedElem} \nand updated array : ${num}`);

    // Task 5: Use the shift method to remove the first element from the array and log the updated array.
        const delElem = num.shift();
        console.log(`the deleted element is ${delElem} \n updated array is : ${num}`);

    // Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
        num.unshift(8);
        console.log(`the array is ${num}`);


// Activity 3: Array Methods (Intermediate)
    // Task 7: Use the map method to create a new array where each number is doubled and log the new array.
        const newArray = []
        num.map((item, index)=>{
            newArray[index] = item*2;
        })
        console.log(`The new array is : ${newArray}`);

    // Task 8: Use the filter method to create a new array with only even numbers and log the new array.
        const evenArray = num.filter((nums)=>{
            return nums%2===0;
        })
        console.log(`Even Array : ${evenArray}`);

    // Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
        const sum = num.reduce((acc, curr)=>{
            return acc+curr;
        })
        console.log(`The sum of array is ${sum}`);


// Activity 4: Array Iteration
    // Task 10: Use a for loop to iterate over the array and log each element to the console.
        console.log("the elements of array using for loop:");
        for (let elem = 0; elem < num.length; elem++) {
            console.log(elem);
        }

    // Task 11: Use the forEach method to iterate over the array and log each element to the console.
        console.log("the elements of array using forEach method:");
        num.forEach(elem=>{
            console.log(elem);
        })

// Activity 5: Multi-dimensional Arrays
    // Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
        const matrix = [[1,2],[5,6]]
        console.log(`the 2D array ${matrix}`);
    // Task 13: Access and log a specific element from the two-dimensional array.
        console.log(`speific elem from 2D array ${matrix[0][0]}`);    
git 
// Feature Request:
    // Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.
    // Array Transformation Script: Create a script that uses map, filter, and reduce methods to transform and aggregate array data.
    // Array Iteration Script: Write a script that iterates over an array using both for loop and forEach method and logs each element.
    // Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array.
// Achievement:
// By the end of these activities, students will:
    // Create and manipulate arrays using various methods.
    // Transform and aggregate array data using map, filter, and reduce.
    // Iterate over arrays using loops and iteration methods.
    // Understand and work with multi-dimensional arrays.
