// Day 13: Modules
// Tasks/Activities:
    // Activity 1: Creating and Exporting Modules
    // Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
    import add from './sumModule.js'
    console.log(`The sum of 2 nums : ${add(5,7)}`);

    // Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
    import Person from './person.js';
    console.log("The person details is : ");
    console.log(Person());


// Activity 2: Named and Default Exports
    // Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
    import hello from './namedExport.js'
    console.log(`first : ${hello.hello()}`);

    // Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
    import array from './module.js';
    console.log(`The array is : ${array()}`);


// Activity 3: Importing Entire Modules
    // Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
    import MultiExports from './multiExports.js'
    console.log(`The fisrt constant is : ${MultiExports.name}`);
    console.log(`The second constant is : ${MultiExports.device}`);
    console.log(`The multiply of 2 nums : ${MultiExports.MultiExports(2,3)}`);
    

// Activity 4: Using Third-Party Modules
    // Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
    import _ from 'lodash';
    console.log(`The random number is : ${_.random(0,10)}`);

    // Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
    import axios from 'axios';
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });


// Feature Request:
    // Basic Module Script: Write a script that creates a module exporting a function and imports it in another script.
    // Named and Default Exports Script: Create a script demonstrating both named and default exports and their usage.
    // Third-Party Module Script: Write a script that installs, imports, and uses functions from third-party modules like lodash and axios.
    // Module Bundling Script: Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).
// Achievement:
// By the end of these activities, students will:
    // Create and export functions, objects, and constants using modules.
    // Import modules using named and default imports.
    // Use third-party modules installed via npm.
    // Understand the basics of module bundling (optional).