// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access
    // Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
    const book = {
        title:"The Pragmatic Programmer",
        author:"David Thomas",
        year:2019,
    }
    console.log(`Book info : `);
    console.log(book);


    // Task 2: Access and log the title and author properties of the book object.
    console.log(`The title of book : ${book.title}`);
    console.log(`the author of book : ${book.author}`);


// Activity 2: Object Methods
    // Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
    book.info = ()=>{
        return `The book name is ${book.title} and the author is ${book.author}`
    }
    console.log(book.info());

    // Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
    book.update = (year)=>{
        book.year = year;
    }
    book.update(2023);
    console.log(`The updated book info is :`);
    console.log(book);


// Activity 3: Nested Objects
    // Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
    const library = {
        name:"National Library",
        books:[
            {bookName:"Crying in H Mart",author:"Michelle Zauner, year:2000"},
            {bookName:"On Earth We're Briefly Gorgeous",author:"Ocean Vuong, year:1980"},
            {bookName:"All About Love",author:"bell hooks, year:2010"},
        ]
    }
    console.log("Library info :");
    console.log(library);

    // Task 6: Access and log the name of the library and the titles of all the books in the library.
    console.log(`The name of library is ${library.name}`);
    console.log("All books name :");
    library.books.map((book,index)=>{
        console.log(`The book at index number ${index} is '${book.bookName}'`)
    })


// Activity 4: The this Keyword
    // ! Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
    book.info = function(){
        return `The book name is ${this.title} and the year is ${this.year}`
    }
    console.log(book.info());
    

// Activity 5: Object Iteration
    // Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
    for(let prop in book){
        console.log(`${prop} : ${book[prop]}`);
    }

    // Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
    console.log("The Keys and values of book object usig Object.keys() and Object.values()");
    console.log(Object.keys(book));
    console.log(Object.values(book));

    
// Feature Request:
    // Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
    // Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.
    // Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values.
// Achievement:
// By the end of these activities, students will:
    // Create and manipulate objects with properties and methods.
    // Understand and use the this keyword in object methods.
    // Work with nested objects and arrays of objects.
    // Iterate over an object's properties using loops and built-in methods.