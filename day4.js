// Tasks/Activities: 
// Activity 1: For Loop 
console.log("activity 1:");
    console.log("\n->")
    // • Task 1: Write a program to print numbers from 1 to 10 using a for loop. 
        for (let num = 1; num < 10; num++) {
            console.log(num);
        }
      
            console.log("\n->")
    // • Task 2: Write a program to print the multiplication table of 5 using a for loop. 
        for (let i = 1; i <= 10; i++) {
            console.log(i*5);
        }


// Activity 2: While Loop
console.log("\nactivity 2:");
        console.log("\n->")
    // • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop. 
        let j = 1;
        let sum = 0;
        while(j<=10){
            sum += j;
            j++;
        }
        console.log(`Sum of 1 to 10 is ${sum}`);
            console.log("\n->")
    // • Task 4: Write a program to print numbers from 10 to 1 using a while loop. 
        let revNum = 10;
        while (revNum>0) {
            console.log(revNum);
            revNum--;
        }


// Activity 3: Do...While Loop
console.log("\nactivity 3:");
        console.log("\n->")
    // • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop. 
        let doVar = 1;
        do {
            console.log(doVar)
            doVar++;
        } while (doVar<=5);

        console.log("\n->")
    // • Task 6: Write a program to calculate the factorial of a number using a do...while loop. 
        let num = 5;
        let fact = 1;
        let i = 1;
        do {
            fact *= i;
            i++;
        } while (i<=num);
        console.log(`Factorial of ${num} is ${fact}`);
// Activity 4: Nested Loops 
console.log("\nactivity 4:");
        console.log("\n->")
    // • Task 7: Write a program to print a pattern using nested for loops: (ignore color) 
    //  *
    //  * *
    //  * * *
    //  * * * *
    //  * * * * *
        for (let i = 0; i < 5; i++) {
            let str = '';
            for (let j = 0; j <= i; j++) {
                str += '* ';
            }
            console.log(`${str}`);
        }


// Activity 5: Loop Control Statements 
console.log("\nactivity 5:");
        console.log("\n->")
    // • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement. 
    let k = 1;
    while (k<=10) {
        if(k === 5){
            k++;
            continue;
        } else{
            console.log(k)
            k++;
        }
    }

        console.log("\n->")
    // • Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement. 
    let m = 1;
    while (m<=10) {
        if(m === 7){
            break;
        } else{
            console.log(m)
            m++;
        }
    }
