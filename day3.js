// Day 3: Control Structures Tasks/Activities: 
// Activity 1: If-Else Statements 
    // Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console. 
        const num = -23;
        if(num>0){
            console.log(`${num} is positive number`);
        } else if (num<0){
            console.log(`${num} is nagetive number`);
        } else {
            console.log(`${num} is eqaul to 0`);
        }

    // Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console. 
        const age = 21;
        if(age>=21){
            console.log(`age of person is ${age}, and it is >=18, so he can vote.`);
        } else{
            console.log(`age of person is ${age}, and it is <18, so he can't vote.`);
        }


// Activity 2: Nested If-Else Statements 
    // Task 3: Write a program to find the largest of three numbers using nested if-else statements. 
        const num1 = 5, num2 = 7, num3 = 2;
        if(num1>num2 ){
            if(num1>num3){
                console.log(`${num1} is the largest number`);
            } else {
                console.log(`${num1} is greater than ${num2}, but less than ${num3}`);
            }
        } else if(num1<num2){
            if(num2>num3){
                console.log(`${num2} is the largest number`);
            } else{
                console.log(`${num3} is the largest number`);
            }
        } else {
            console.log(`${num3} is the largest number`);
        }
        // 5    6   7
        // 5>6 
            // 6>7- false
                // 5 is big
            // 5>6 , 5<7
        // 5<6
            // 6>7
                // 6 is big
            // 6<7 
                // 7 is big
        // 7 is big


// Activity 3: Switch Case 
    // Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. 
        const number = 5;
        switch (number) {
            case 1:
                console.log("It is monday")
                break;
            case 2:
                console.log("It is tuesday")
                break;
            case 3:
                console.log("It is wednesday")
                break;
            case 4:
                console.log("It is thurseday")
                break;
            case 5:
                console.log("It is friday")
                break;
            case 6:
                console.log("It is saturday")
                break;
            case 7:
                console.log("It is sunday")
                break;
            default:
                console.log("case is not valid");
                break;
        }

    // Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console. 
        const grade = 82;
        switch(true){
            case (grade>=85):
                console.log("Grade is A");
                break;
            case (grade>=70 && grade<85):
                console.log("Grade is B");
                break;
            case (grade>=55 && grade<70):
                console.log("Grade is C");
                break;
            case (grade>=40 && grade<55):
                console.log("Grade is D");
                break;
            case (grade<=33):
                console.log("Grade is F");
                break;
            default:
                console.log('case is not valid');
                break;
        }

// Activity 4: Conditional (Ternary) Operator 
    // Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console. 
        const checkNum = 89;
        console.log(`${checkNum%2===0 ? checkNum+ 'is even': checkNum + 'is odd'}`);
// Activity 5: Combining Conditions 
    // Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console. 
        const year = 1900;
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            console.log(`${year} is a leap year`);
        } else {
            console.log(`${year} is not a leap year`);
        }

// Feature Request: 
    // 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result. 
    // 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result. 
    // 3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name. 
    // 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade. 
    // 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result. 
// Achievement: By the end of these activities, students will:
    // Implement and understand basic if-else control flow. 
    // Use nested if-else statements to handle multiple conditions. 
    // Utilize switch cases for control flow based on specific values. 
    // Apply the ternary operator for concise condition checking. 
    // Combine multiple conditions to solve more complex problems. 

