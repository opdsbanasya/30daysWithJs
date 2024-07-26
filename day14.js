// Day 14: Classes
// Tasks/Activities:
// Activity 1: Class Definition 
    // Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
    class Person{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        greet(){
            return `Hello ${this.name}, you are ${this.age} year old.`;
        }
        updateAge(currAge){
            this.age = currAge;
            return this.age;
        }
    }
    const person1 = new Person("Surya", 30);
    //* console.log(person1.greet());

    // Task 2: Add a method to the Person class that updates the age property and logs the updated age.
    //* console.log(`Your updated age is ${person1.updateAge(35)}`);


// Activity 2: Class Inheritance
    // Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
    class Student extends Person{
        constructor(name, age, studentId){
            super(name, age);
            this.studentId = studentId;
        }
        stIdReturn(){
            return `Your id is ${this.studentId}.`
        }
        greet(){
            return `Hello ${this.name}, you are ${this.age} year old and your Id is ${this.studentId}.`;
        }
        static standard = 10;
    }
    const student1 = new Student("Jai Shah", 15, 235);
    //* console.log(student1.stIdReturn());

    // Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
    //* console.log(student1.greet());


// Activity 3: Static Methods and Properties
    // Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
    class Person1{
        constructor(fName, lName, age){
            this.fName = fName;
            this.lName = lName;
            this.age = age;
        }
        static greet(){
            return `Hello, welcome to the class.`;
        }
        get fullName(){
            return `${this.fName} ${this.lName}`;
        }
        set fullName(a){
            const [fName, lName] = a.split("");
            this.fName = fName;
            this.lName = lName;
        }
    }
    // console.log(Person1.greet());
    
    // Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
    // console.log(`The Standard is ${Student.standard}th.`);


// Activity 4: Getters and Setters
    // Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
    const p2 = new Person1("Harsh", "Sharma", 25)
    // console.log(`The full name is ${p2.fullName}.`);
    
    // Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
    p2.fName = "Ajay Sharma";
    // console.log(`The full name is ${p2.fullName}.`);


// Activity 5: Private Fields (Optional)
    // Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
    class Account{
        #balance = 0;
        constructor(){
            this.#balance = 0;
        }
        deposit(amount){
            this.#balance += amount;
            return this.#balance;
        }
        withdraw(amount){
            if(this.#balance >= amount){
                this.#balance -= amount;
                return this.#balance;
            }else{
                return "Insufficient balance.";
            }
        }
    }
    
    // Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
    const acc1 = new Account();
    console.log(`Deposited : ${acc1.deposit(10000)}`);
    console.log(`Withdrawn : ${acc1.withdraw(5000)}`);
    
// Feature Request:
    // Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages.
    // Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs the results.
    // Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.
    // Getters and Setters Script: Create a script that uses getters and setters in a class.
    // Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).
// Achievement:
// By the end of these activities, students will:
    // Define and use classes with properties and methods.     
    // Implement inheritance to extend classes.
    // Utilize static methods and properties.
    // Apply getters and setters for encapsulation.
    // Understand and use private fields in classes (optional).