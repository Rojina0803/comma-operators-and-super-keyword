//Comma operators
// 
// for (let i = 1, j = 9; i <= j; i++, j--) {
                           
//     console.log(`a[${i}][${j}]= ${a[i][j]}`);
//   }

// let x=1;
// x=(x++,x);
// console.log(x)

// x=(2,3)
// console.log(x);

// let a=(3+6,7+2);
// console.log(a);
// //  evaluates value from left to right-->

// let y=(3,6)+(7,2);
// console.log(y);

// let z=(a=10, b =20, a+b);
// console.log(z)

//Unary operator --> has only one operand

// const myObj = { h: 4 };
// delete myObj.h;
// console.log(myObj);

// const obj={a:23,b:24,c:67,d:34}
// delete obj.b
// console.log(obj);

// const arr=[23,45,67,78,89,90]
// console.log(arr);

// const fun= new function(a,b){}
const fun=  function(a,b){}
console.log(typeof(fun));
console.log(fun);
// console.stack(fun);
console.log(typeof "Hello world" );

//void operator

const output = void 1;
console.log(output);

void (function iife() {
    console.log('iife is executed');
  })();

  //Relational operator
//compares its operand and returns boolean values
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(0 in trees);
console.log(3 in trees);
console.log(6 in trees);
console.log(trees);


const theDay = new Date(2024, 2, 14);
if (theDay instanceof Date) {
  console.log(theDay)
}
const today=new Date(2024,2,14)
console.log(today)

//Basic expressions

//Grouping operators

const a = 1;
const b = 2;
const c = 3;
 console.log((a + b) * c );
console.log(a * c + b * c);

// new operator --> used to create new object
const object= new function red (){
    myfavourite="Girl",
    priced= "possesion",
    oop="lalalaa"
}
  
console.log(object)

//Super keyword in JAVASCRIPT

class Animal{
    constructor(name, age){
        this.name=name;
        this.age=age;
        
    }
    move(speed){
        console.log(`The ${this.name} runs in the speed of ${speed}mph`)
    }

}
class Rabbit extends Animal{
    constructor( name, age, hopspeed){
        super(name,age);
       
        this.hopspeed= hopspeed;
        
    }
    hop(){
        console.log(`The ${this.name} can hop`)
        super.move(this.hopspeed);
    }
}
class Fish extends Animal{
    constructor( name, age, swimspeed){
        super(name,age);
        
        this.swimspeed= swimspeed;
        
    }
    swim(){
        console.log(`The ${this.name} can swim`)
        super.move(this.swimspeed);
    }
}
class Fox extends Animal{
    constructor( name, age, runspeed){
        super(name,age);
        this.runspeed= runspeed;
        
    }
    run(){
        console.log(`The ${this.name} can run`);
        super.move(this.runspeed);
    }
}
const rabbit= new Rabbit("rabbit",1,25);
const fish= new Fish("fish",3,125);
const fox= new Fox("fox",14,925);
console.log(rabbit.name,rabbit.age, rabbit.hopspeed);
console.log(fish);
console.log(fox);

rabbit.hop()
fish.swim()
fox.run()

