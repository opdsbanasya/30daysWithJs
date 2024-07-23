// Day 11: Promises and Async/Await
// Tasks/Activities:
// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const sendMessage = (message) => {
    let internetSpeed = Math.floor(Math.random() * 10)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (internetSpeed > 4) {
                resolve(`message is sent. \n${message}`);
            } else {
                reject("internet speed in slow, retry");
            }
        }, 2000);
    })
}
sendMessage("How are You")
    .then(res => {
        console.log(res);
    })

    // Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
    .catch(err => {
        console.log(err);
    })



// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const mediaServer = (media) => {
    return new Promise(resolve => {
        resolve(`${media} downloaded`)
    })
}
mediaServer("Apple.png")
    .then(res => {
        console.log(res);
        return mediaServer("bahubali.mp4");
    })
    .then(res => {
        console.log(res);
    })

// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const getNum = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            let randomNum = Math.floor(Math.random() * 1000);
            console.log(randomNum);
            resolve();
        }, 1000)
    })
}
const num = async () => {
    await getNum();
    await getNum()
}
num();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const userIdGenerate = () => {
    let userID = Math.floor(Math.random() * 10000) + 1;
    return new Promise((resolve, reject) => {
        if (userID > 1000) {
            console.log(`User id generated : ${userID}`);
            resolve();
        } else {
            reject("User id is out of range");
        }
    })
}
const IdGenerator = async () => {
    try {
        await userIdGenerate();
        await userIdGenerate();
    } catch (err) {
        console.log(`${err} -> try again`);
    }
}
IdGenerator();

// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
const fetchData = () => {
    const api = "https://fakestoreapi.com/users/1";
    fetch(api)
    .then(res =>{
        if(!res.ok){
            throw("Network error")
        }
        return res.json()
    })
    .then(data =>{
        console.log("Data recieved");
        console.log(data);
    })
    .catch(err =>{
        console.log(err);
    })

}
fetchData()

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const getInfo = async ()=>{
    api = "https://fakestoreapi.com/carts/5"
    
    const cart = await fetch(api);
    const cartData = await cart.json();

    console.log("Data Retrieves :");
    console.log(cartData);
}
getInfo();

// Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const user1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("first database created");
        resolve("25gh8k");
    },500);
})
const user2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("second database created");
        resolve("58d2f6");
    },1000);
})
const user3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Failed to create Third database");
        reject("Retry to create database");
    },1500);
})

Promise.all([user1, user2 , user3])
.then(response =>{
    console.log(`database addressess : ${response}`);
})
.catch(err => {
    console.log(err);
})
// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const uploadImage = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("uploaded")
    },1000)
})
const uploadVideo = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("rejected"); 
    },2000)
})
Promise.race([uploadImage, uploadVideo])
.then(res => {
    console.log(res);
})
.catch(err =>{
    console.log(err);
})

// Feature Request:
// Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
// Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
// Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
// API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
// Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.
// Achievement:
// By the end of these activities, students will:
// Understand and create promises, including handling resolved and rejected states.
// Chain multiple promises to perform sequential asynchronous operations.
// Use async/await to handle asynchronous code more readably.
// Fetch data from public APIs using both promises and async/await.
// Manage multiple concurrent promises using Promise.all and Promise.race.