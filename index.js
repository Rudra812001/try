// let ages = [18, 16, 21, 17, 19, 90];
// let adults = ages.filter(chackAge);

// adults.forEach(print);

// function chackAge(element){
//     return element >= 18;
// }
// function print(element){
//     console.log(element);
// }

// const greeting = function(userName){
//     console.log(`hello ${userName}`);
//     }
//     greeting("Rudra");
    
// const greeting = (userName) => console.log(`Hello ${userName}`);
// greeting("Rudra");

// const percent = function(x, y){
//         return x/y*100;
//     }
//     console.log(`${percent(75, 150)}%`);

// let grades = [100, 50, 90, 60, 80, 70];

// grades.sort(descending);
// grades.forEach(print);

// function descending(x, y){
//     return y-x;
// }
// function print(element){
//     console.log(element);
// }


// let grades = [100, 50, 90, 60, 80, 70];

// grades.sort((x, y) => y-x);
//    grades.forEach((element) => console.log(element));


// let userName = "Rudra";
// let userInbox = 0;

// login();

// function login(){
//     displayUserName();
//     displayUserInbox();
// }
// function displayUserName(){
// console.log(`Welcome ${userName}`);
// }
// function displayUserInbox(){
//     console.log(`You have ${userInbox} new messagees`);
// }

// const store = new Map([
//     ["t-shirt", 20],
//     ["jeans", 30],
//     ["socks", 10]
//     ]);
    
//     let shoppingCart = 0;
    
//     shoppingCart += store.get("t-shirt");
//     shoppingCart += store.get("jeans");
//     console.log(shoppingCart);
    
//     store.forEach((value, key) => console.log(`${key} $${value}`));
    

// const store = new Map([
//     ["t-shirt", 20],
//     ["jeans", 30],
//     ["socks", 10]
//     ]);
    
//     store.set("hat", 40);
    
//     store.forEach((value, key) => console.log(`${key} $${value}`));
    

// const store = new Map([
//     ["t-shirt", 20],
//     ["jeans", 30],
//     ["socks", 10]
//     ]);
    
//     store.delete("jeans");
    
//     store.forEach((value, key) => console.log(`${key} $${value}`));


// const store = new Map([
//     ["t-shirt", 20],
//     ["jeans", 30],
//     ["socks", 10]
//     ]);
    
//     console.log(store.has("socks"));
//     store.forEach((value, key) => console.log(`${key} $${value}`));
    
// const store = new Map([
//     ["t-shirt", 20],
//     ["jeans", 30],
//     ["socks", 10]
//     ]);
    
//     console.log(store.has("hat"));
//     store.forEach((value, key) => console.log(`${key} $${value}`));

// const store = new Map([
//     ["t-shirt", 20],
//     ["jeans", 30],
//     ["socks", 10]
//     ]);
    
//     console.log(store.size);
//     store.forEach((value, key) => console.log(`${key} $${value}`));
    

// const car = {
//     madel:"Mustang",
//     color:"red",
//     year:"2023",
    
//     drive : function(){
//         console.log("You drive the car");
//     },
//     brake : function(){
//         console.log("You step on the brakes");
//     }
//     }
    
//     console.log(car.madel);
//     console.log(car.color);
//     console.log(car.year);
    
//     car.drive();
//     car.brake();
    
// const car1 = {
//         madel:"Mustang",
//         color:"red",
//         year:"2023",
//         
//         drive : function(){
//             console.log(` you drive the ${this.madel}`);
//         }
//     }
//         const car2 = {
//             madel:"Corvette",
//             color:"red",
//             year:"2023",
//             
//             drive : function(){
//                 console.log(`you drive the ${this.madel}`);
//             }
//             }
//           car1.drive();  
//           car2.drive();  
    
    
// console.log(this);

// this.name = "Rudra";
// console.log(this.name);


// class Player{
//         pause(){
//             console.log("You paused the game");
//         }
//         exit(){
//             console.log("You exited the game");
//         }
//     }
    
//     const player1 = new Player();
//     player1.score += 1;
//     console.log(player1.score);
//     player1.pause();
//     player1.exit();
    
// class Student{

//     constructor(name, age, gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }
//     study(){
//         console.log(`${this.name} is studying`);
//         }
//     }
//     const student1 = new Student("Rudra", 21, 3.1);
//     const student2 = new Student("Priya", 23, 4.1);
    
//     console.log(student1.name);
//     console.log(student1.age);
//     console.log(student1.gpa);
//     student1.study();
    
//     console.log(student2.name);
//     console.log(student2.age);
//     console.log(student2.gpa);
//     student2.study();
    
// class Car{

//         static numberOfCars = 8;
    
//         constructor(model){
//             this.model = model;
//             this.numberOfCars += 1;
//         }
    
//         startRace(){
//             console.log("3...2...1...Go!");
//         }
//     }
    
//     const car1 = new Car("Mustang");
//     const car2 = new Car("Corvette");
//     const car3 = new Car("BMW");
    
//     car1.startRace();
    

// class Animal{
//         eat(){
//             console.log(`This ${this.name} is eating`);
//         }
//         sleep(){
//             console.log(`This ${this.name} is sleeping`);
//         }
//     }
//     class Rabbit extends Animal{
    
//         name = "rabbit";
//         run(){
//             console.log(`This ${this.name} is running`); 
//         }
//     }
//     class Fish extends Animal{
    
//         name = "Fish";
//         swim(){
//             console.log(`This ${this.name} is running`); 
//         }
//     }
//     class Hawk extends Animal{
    
//         name = "Hawk";
//         Fly(){
//             console.log(`This ${this.name} is running`); 
//         }
//     }
//     const rabbit = new Rabbit();
//     const fish = new Fish();
//     const hawk = new Hawk();
    
//     console.log(rabbit.alive);
//     rabbit.eat();
//     rabbit.sleep();
//     rabbit.run();
    
    
    
// class Car{

//         staticnumberOfCars = 0;
    
//         constructor(model){
//             this.model = model;
//             this.numberOfCars += 1;
//         }
    
//         startRace(){
//             console.log("3...2...1...Go!");
//         }
//     }
    
//     const car1 = new Car("Mustang");
//     const car2 = new Car("Corvette");
//     const car3 = new Car("BMW");
    
//     car1.startRace();
    
//     inheritance
    
    // inheritance = a child class can inherit all the
    //               mathods and properties from another class
    
    
    // class Animal{
    //     eat(){
    //         console.log(`This ${this.name} is eating`);
    //     }
    //     sleep(){
    //         console.log(`This ${this.name} is sleeping`);
    //     }
    // }
    // class Rabbit extends Animal{
    
    //     name = "rabbit";
    //     run(){
    //         console.log(`This ${this.name} is running`); 
    //     }
    // }
    // class Fish extends Animal{
    
    //     name = "Fish";
    //     swim(){
    //         console.log(`This ${this.name} is running`); 
    //     }
    // }
    // class Hawk extends Animal{
    
    //     name = "Hawk";
    //     Fly(){
    //         console.log(`This ${this.name} is running`); 
    //     }
    // }
    // const rabbit = new Rabbit();
    // const fish = new Fish();
    // const hawk = new Hawk();
    
    // console.log(rabbit.alive);
    // rabbit.eat();
    // rabbit.sleep();
    // rabbit.run();

    
    // // super = Refers to the parent class.
    // //         Commonly used to invoke constructor of a parent class
    // // class Animal{
    // //     constructor(name, age){
    // //         this.name = name;
    // //         this.age = age;
    // //         
    // //     }
    // // }
    // // class Rabbit extends Animal{
    
    // //     constructor(name, age, runSpeed){
    // //         super(name,age);
    // //         this.runSpeed = runSpeed;
    // //     }
    // // }
    // // class Fish extends Animal{
    
    // //     constructor(name, age, swimSpeed){
    // //         super(name,age);
    // //         this.swimSpeed = swimSpeed;
    // //     }
    // //     
    // // }
    // // class Hawk extends Animal{
    
    // //     constructor(name, age, FlySpeed){
    // //         super(name,age);
    // //         this.FlySpeed = FlySpeed;
    // //     }
    // // }
    
    // // const rabbit = new Rabbit("rabbit", 1, 40);
    // // const fish = new Rabbit("fish", 2, 45);
    // // const hawk = new Rabbit("hawk", 3, 50);
    
    // // console.log(rabbit.name);
    // // console.log(rabbit.age);
    // // console.log(rabbit.runSpeed);

    // class Animal{
    //         constructor(name, age){
    //             this.name = name;
    //             this.age = age;
    //             
    //         }
    //     }
    //     class Rabbit extends Animal{
        
    //         constructor(name, age, runSpeed){
    //             super(name,age);
    //             this.runSpeed = runSpeed;
    //         }
    //     }
    //     class Fish extends Animal{
        
    //         constructor(name, age, swimSpeed){
    //             super(name,age);
    //             this.swimSpeed = swimSpeed;
    //         }
    //         
    //     }
    //     class Hawk extends Animal{
        
    //         constructor(name, age, FlySpeed){
    //             super(name,age);
    //             this.FlySpeed = FlySpeed;
    //         }
    //     }
        
    //     const rabbit = new Rabbit("rabbit", 1, 40);
    //     const fish = new Rabbit("fish", 2, 45);
    //     const hawk = new Rabbit("hawk", 3, 50);
        
    //     console.log(rabbit.name);
    //     console.log(rabbit.age);
    //     console.log(rabbit.runSpeed);
        
    // class Car{
    //         constructor(power){
    //             this._gas = 25;
    //             this._power = power;
    //         }
    //         get power(){
    //             return`${this._power}hp`;
    //         }
    //         get gas(){
    //             return`${this._gas}L (${this._gas / 50*100}%)`;
    //         }
    //         set gas(value){
    //             if(value >50){
    //                 value = 50;
    //             }
    //             else if(value < 0){
    //                 value = 0;
    //             }
    //             this._gas = value;
    //         }
    //     }
        
    //     let car = new Car(400);
        
    //     car.gas = -100000000000000000;
        
    //     console.log(car.power);
    //     console.log(car.gas);
        
        
        
    // class Car{

    //         constructor(model, year, color){
    //             this.model = model;
    //             this.year = year;
    //             this.color = color;
    //         }
    //     }
        
    //     const car1 = new Car("Mustang", 2023, "red");
    //     const car2 = new Car("Corvette", 2024, "blue");
    //     const car3 = new Car("Lambo", 2022, "yellow");
        
    //     changecolor(car1, "gold");
    //     displayInfo(car1);
    //     //displayInfo(car2);
    //     //displayInfo(car3);
        
    //     function displayInfo(car){
    //         console.log(car.model);
    //         console.log(car.year);
    //         console.log(car.color);
    //     }
        
    //     function changecolor(car, color){
    //         car.color = color;
    //     }
        
    // class Car{

    //         constructor(model, year, color){
    //             this.model = model;
    //             this.year = year;
    //             this.color = color;
    //         }
        
    //     drive(){
    //         console.log(`You drive the ${this.model}`);
    //     }
        
    //     }
        
    //     const car1 = new Car("Mustang", 2023, "red");
    //     const car2 = new Car("Corvette", 2024, "blue");
    //     const car3 = new Car("Lambo", 2022, "yellow");
        
    //     const cars = [car1, car2, car3];
        
    //        //console.log(cars[0].model);
    //         //console.log(cars[1].model);
    //         //console.log(cars[2].model); 
        
    //         //cars[0].drive();
    //         //cars[1].drive();
    //         //cars[2].drive();
        
    //     startRace(cars);
        
    //         function startRace(cars){
    //             for(const car of cars){
    //                 car.drive();
    //             }
    //         }
        
        
    // class Card{
    //         constructor(value, suit){
    //             this.value = value;
    //             this.suit = suit;
    //         }
    //     }
        
    //     let card1 = new Card("A", "Heats");
    //     let card2 = new Card("A", "Spades");
    //     let card3 = new Card("A", "Diamonds");
    //     let card4 = new Card("A", "Clubs");
    //     let card5 = new Card("2", "Heats");
    //     let card6 = new Card("2", "Spades");
    //     let card7 = new Card("2", "Diamonds");
    //     let card8 = new Card("2", "Clubs");
        
    //     let cards = [card1, card2, card3, card4, card5, card6, card7, card8];
        
    //     console.log(card1.value + card1.suit);
    //     console.log(cards[0].value + cards[0].suit);
        

//     setTimeout(firstMessage, 3000);
// setTimeout(secondMessage, 6000);
// setTimeout(thirdMessage, 9000);

// function firstMessage(){
//     alert(`Buynthis course for $500!`);
// }
// function secondMessage(){
//     alert(`This is not a scam!`);
// }
// function thirdMessage(){
//     alert(`DO ITT!`);
// }

// let item = "cryptocurrency";
// let price = 420.69;

// let timer1 = setTimeout(firstMessage, 3000, item, price);
// let timer2 = setTimeout(secondMessage, 6000);
// let timer3 = setTimeout(thirdMessage, 9000);

// function firstMessage(item, price){
//     alert(`Buy this ${item} for $${price}`);
// }
// function secondMessage(){
//     alert(`This is not a scam!`);
// }
// function thirdMessage(){
//     alert(`DO ITT!`);
// }
// document.getElementById("myButton").onclick = function(){
//     clearTimeout(timer1);
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     alert(`Thanks for buying <3`);
// }

// let count = 0;
// let max = window.prompt("Count up to what #?");
// max = Number(max);

// const myTimer = setInterval(countUp, 1000);

// function countUp(){
//     count+=1;
//     console.log(count);
//     if(count >= max){
//         clearInterval(myTimer);
//     }
// }

// let date = new Date(10000000);

// date = date.toLocaleString();
// document.getElementById("myLable").innerHTML = date;



// const myLabel = document.getElementById("myLabel");

// update();
// setInterval(update, 1000);

//  function update(){

// let date = new Date();
// myLabel.innerHTML = formatTime(date);

// function formatTime(date){
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let amOrPm = hours >= 12 ? "pm" :"am";

//     hours = (hours % 12) || 12;

//     hours = formatZeroes(hours);
//     minutes = formatZeroes(minutes);
//     seconds = formatZeroes(seconds);
//     
// return`${hours}:${minutes}:${seconds}${amOrPm}`;

// }
// function formatZeroes(time){
//     time = time.toString();
//     return time.length <2 ? "0" + time : time;
// }
//  }

// console.log("START");
// console.log("This step is synchronous");
// console.log("END");


// console.log("START");
// setTimeout(() => console.log("This is asynchronous"), 5000);
// console.log("END");

// console.time("Response time");

// alert("CLICK THE OK BUTTON!");

// console.timeEnd("Response time");

// console.time("Response time");

// setTimeout(() => console.log("HELLO!"), 3000);

// //end
// console.timeEnd("Response time");

// const promise = new Promise((resolve, reject) => {

//         let fileLoaded = false;
//         //    let fileLoaded = true;
    
//         if(fileLoaded){
//             resolve("file loaded");
//         }
//         else{
//             reject("File NOT loaded");
//         }
//     });
    
//     promise.then(value => console.log(value))
//             .catch(error => console.log(error));
    

// const wait = promise = new Promise(resolve => {
//         setTimeout(resolve, 5000);
//     });
//     promise.then( () => console.log('Thank for waiting !'));


// const wait = time =>new Promise(resolve => {
//         setTimeout(resolve, time);
//     });
//     wait(3000).then(() => console.log('Thank for waiting !'));
 

// async function loadFile(){
//     
//         let fileLoaded = true;
//         //    let fileLoaded = true;
    
//         if(fileLoaded){
//             return"file loaded";
//         }
//         else{
//             throw"File NOT loaded";
//         }
//     }
//     loadFile().then(value => console.log(value))
//             .catch(error => console.log(error));
    
    

// async function loadFile(){

//     let fileLoaded = true;
//     //let fileLoaded = false;
    
//     if(fileLoaded){
//         return"File loaded";
    
//     }
//     else{
    
//         throw "File NOT loaded";
//      }
//     }
    
//     async function startProcess(){
//         try{
//     let message = await loadFile();
//     console.log(message);
//         }
    
//     catch(error){
//         console.log(error);
//     }
    
//     }
//     startProcess();
    

// //console.dir(document);
// console.log(document.title);
// console.log(document.URL);

// document.title = "Title goes here!";

// //document.location = "http://www.google.com";

// document.body.style.backgroundColor = "skyblue";
// document.getElementById("myDiv").innerHTML = "Hello";


// let element = document.getElementById("myTitle");
// element.style.backgroundColor = "lightgreen";
    

// let fruits = document.getElementsByName("fruits");

// // console.log(fruits);
// console.log(fruits[2]);



// let elements = document.querySelectorAll("li");
// elements.forEach(element => {
//     element.style.backgroundColor = "lightgreen";
// })



// let element = document.querySelector("#vegetables");
// let sibling = element.nextElementSibling;
// sibling.style.backgroundColor = "lightgreen";


// let element = document.querySelector("#vegetables");
// let sibling = element.previousElementSibling;
// sibling.style.backgroundColor = "lightgreen";


// const element = document.getElementById("myDiv");

// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;

// function doSomething(){
//     element.style.backgroundColor = "red";
// }

// function doSomethingElse(){
//     element.style.backgroundColor = "lightgreen";
// }



// const myDiv = document.getElementById("myDiv");
// window.addEventListener("keydown", move);
// let x = 0;
// let y = 0;

// function move(Event){

//     switch(Event.key){
//         case "ArrowDown"://by press down Arrow key output will be sow
//             y+=5;
//             myDiv.style.top = y + "px";
//             break;

//         case "ArrowUp"://by press up Arrow key output will be sow
//               y-=5;
//              myDiv.style.top = y + "px";
//              break;

//          case "ArrowRight"://by press Right Arrow key output will be sow
//             x+=5;
//             myDiv.style.left = x + "px";
//              break;

//         case "ArrowLeft"://by press Left Arrow key output will be sow
//             x-=5;
//              myDiv.style.left = x + "px";
//              break;
//              default:
//               break;
//     }
// }


// const myButton = document.getElementById("myButton");
//     const myAnimation = document.getElementById("myDiv");

//     myButton.addEventListener("click", begin);

//     function begin(){
//         let timerId = null;
//         let scaleX = 1;
//         let scaleY = 1;
//         
//         timerId = setInterval(frame, 5);

//         function frame(){
//            if(scaleX <= 0.1 || scaleY <= 0.1){ 
//                  clearInterval(timerId);
//             }
//             else{
//                 scaleY -= 0.01
//                 scaleX -= 0.01
//             myAnimation.style.transform = "scale("+scaleX + "," + scaleY + ")";
//             }
//         }
//     }


// let canvas = document.getElementById("myCanvas");
//     let context = canvas.getContext("2d");

// //(x. y, r, sAngle, eAngle, conterclockwise)

// context.fillStyle = "lightpink";
// context.strokeStyle = "darkblue";
// context.lineWidth = 5;
// context.beginPath();
// context.arc(250, 250, 200, 0, 2*Math.PI);
// context.fill();
// context.stroke();



// myButton.addEventListener("click", () => window.open("https://google.com"));

//myButton.addEventListener("click", () => window.close());

//myButton.addEventListener("click", () => window.print());




let age = window.prompt("Enter your age");
if(age < 18){
    window.alert("You must be 18+ to visit this site");
    window.close();
}



