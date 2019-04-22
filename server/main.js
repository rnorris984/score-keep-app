import {Meteor} from 'meteor/meteor'; 
import {Players} from './../imports/api/players.js';

Meteor.startup( () => {
    // let obj = {
    //   name: 'Richard',
    //   printName() {
    //     console.log(`Name is ${this.name}`); 
    //   }
    // };

    // // obj.printName(); 

    // setTimeout(obj.printName.bind(obj), 1000); 


    // class Person {
    //   constructor(name = 'Anonymous', age = 0) {
    //     this.name = name; 
    //     this.age = age; 
    //   }
    //   getGreeting(){
    //     return `Hi my name is ${this.name}.`; 
    //   }
    //   getPersonDescription(){
    //     return `${this.name} is ${this.age} years old.`; 
    //   }
    // }

    // class Employee extends Person {
    //   constructor(name, age, title){
        // super runs the parent class constructor function (don't have to redefine the defaults)
    //       super(name, age); 
    //       this.title = title; 
    //   }
    //   getGreeting(){
    //     if (this.title){
    //       return `Hi my name is ${this.name}, I work as a ${this.title}.`
    //     }else{
    //       return super.getGreeting(); 
    //     }
    //   }
    //   hasJob(){
    //     return !!this.title; 
    //   }
    // }

    // class Programmer extends Person {
    //   constructor(name, age, preferredLanguage = 'assembly'){
    //       super(name, age);
    //       this.preferredLanguage = preferredLanguage; 
    //   }
    //   getGreeting(){
    //     return `Hi, I'm ${this.name}, my preferred language is ${this.preferredLanguage}.`
    //   }
    // }

    // let userOne = new Programmer('Richard', 39, 'Yavascript');
    // console.log(userOne.getPersonDescription()); 
}); 



// Object Spread Operator
// let user = {
//     name: 'Andrew',
//     location: 'Philadelphia',
//     age: 54
// };

// let person = {
//     age: 39,
//     ...user
// };

// // console.log(person); 

// // Object Property Shorthand
// let bike = 'Scott'; 
// let stuff = {
//     bike,
//     laptop: 'mac'
// }; 
// // console.log(stuff);

// let house = {
//     bedrooms: 2, 
//     bathrooms: 1.5
// };

// let yearBuilt = 1850; 

// let houseObj = {
//     ...house, 
//     bedrooms: 3,
//     yearBuilt, 
//     flooring: 'Carpet' 
// };

// console.log(houseObj);

// 