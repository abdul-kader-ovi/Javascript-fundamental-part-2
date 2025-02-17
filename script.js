"use strict";

// function addttion(a, b){
//     const result = a+b;
//     return result;
// }

// const calculatedResult=addttion(5,7);

// console.log(calculatedResult);


// function juicer(apple, orange){
//     const recipe=`Make juice with ${apple} apples and ${orange} oranges`;
//     return recipe;
// }

// const fruitJuice=juicer(3,5);  
// console.log(fruitJuice);


//--------funciton declaration-----

// const age=calcAge1(1993);           //funciton can be accessed before declaration in function declaration
// console.log(age);
// function calcAge1(birthYear){
//     return 2025-birthYear;
// }



// function expression / anonymous function/
// const calcAge2=function(birthYear){
//     return 2025-birthYear;
// }
// const ag2=calcAge2(1992);
// console.log(ag2);


//--------------Arrow function------------------------
// const calcAge3=birthYear=>2025-birthYear;
// const age3=calcAge3(2000);
// console.log(age3);


// const yearsUntilRetirement=(birthYear, firstName)=>{
//     const age4=2025-birthYear;
//     const retiremtnt=65-age4; 
//     // return retiremtnt;
//     return `${firstName} will retire in ${retiremtnt} years.`;

// }

// // const retYear=yearsUntilRetirement(2000);
// // console.log(retYear);

// console.log(yearsUntilRetirement(1993,"Ovi"));




// function fruitCutter(fruit){
//     return fruit*4;
// }



// function juicer(apple, mango){
//     const applesPieces=fruitCutter(apple);
//     const mangoPieces=fruitCutter(mango);

//     const recipe=`Make juice with ${applesPieces} pieces apples and ${mangoPieces} pieces mangoes.`;
//     return recipe;
// }

// const juice=juicer(4,5);
// console.log(juice);


//coding challenge 1
// const dolphinsScore1=44;
// const dolphinsScore2=23;
// const dolphinsScore3=71;

// const koalasScore1=65;
// const koalasScore2=54;
// const koalasScore3=49;

// function calcAverage(scores1, score2, score3){
//     return (scores1+score2+score3)/3;
// }

// const dolphinsAvgScore=calcAverage(44,23,71);
// const koalasAvgScore=calcAverage(105,54,209);



// const checkWinner=(avgDolphins,avgKoalas)=>{
//     if(avgDolphins>=avgKoalas*2){
//         return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
//     }else if(avgKoalas>=avgDolphins*2){
//         return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
//     }else return `No winner! Dolphins${avgDolphins} vs Koalas${avgKoalas}`;
// }

// const winner=checkWinner(dolphinsAvgScore,koalasAvgScore);
// console.log(winner);



//-------------Array--------------------------------
// const friends=['Sagor','Safiq','Bristy'];
// console.log(friends);
// console.log(friends[friends.length-1]);
// // add element in array
// const newLength=friends.push('Saiful');
// console.log(friends);
// console.log(newLength);

// friends.unshift('Faysal');
// console.log(friends);

//remove elements from array
// const popped=friends.pop();
// console.log(friends);  //remove last element
// console.log(popped);

// friends.shift(); //remove first
// console.log(friends);


// const indexElement=friends.indexOf('Safiq');
// console.log(indexElement);
// const indexElement2=friends.indexOf('Safiqa'); //not an element
// console.log(indexElement2);

// console.log(friends.includes('Sagor'));
// console.log(friends.includes('Bob'));

// friends.push(23);
// console.log(friends);
// console.log(friends.includes('23')); //strictly checkibg type

// if(friends.includes('Sagor')){
//     console.log('You have a friend named Sagor');
// }else console.log('Sagor is not in your friend list.');



//coding challenge 2
// let bill = 275;
// let tip=bill>=50 && bill<=300 ? (bill*15)/100 : (bill*20)/100;
// console.log(`The bill was ${bill}, the tip was ${tip} and the total payment ${bill+tip}`);


// let bill = [125,555,44];
// function calcTip(bill){
//     if(bill>=50 && bill<=300){
//         const tip=(bill*15)/100;
//         const totalBill=bill+tip;
//         return totalBill;
//     }else{
//         const tip=(bill*20)/100;
//         const totalBill=bill+tip;
//         return totalBill;
//     }
// }

// const billCalc=[calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
// console.log(`Total bills are ${billCalc}`);



// javascriptObject 

 const john={
    firstName:'John',
    lastName:'Snow',
    age:2010-1988,
    job:'Teacher',
    friends:['Sansa', 'Aria', 'Hodor', 'Dany']
 }

 console.log(john);
 console.log(john.firstName);
console.log(john['lastName']);

const nameKey='Name';

console.log(john['first'+'Name']);
console.log(john['last'+'Name']); 

// const interestedIn=prompt('What do you want to know about Jonas? Choose among firstName, lastName, age, job, friends.');

// if(john[interestedIn]){
//    console.log(john[interestedIn]);
// }else{
//    console.log('Wrong request. Choose among firstName, lastName, age, job, friends.');
// }

john.location='North';
john.email='john@gmail.com';
console.log(john);


console.log(`${john.firstName} has ${john.friends.length} friends, and his best friend is ${john.friends[0]}`);
 


//-----------------Object Method--------------------

const john2={
   firstName:'John',
   lastName:'Snow',
   birthYear:1980,
   job:'Teacher',
   friends:['Sansa', 'Aria', 'Hodor', 'Dany'],
   hasDriverLicense:true,
   calcAge:function(){
      this.age= 2025-this.birthYear;
      return this.age;
   },
   // getDriverLicense:function(){
   //    if(this.hasDriverLicense){
   //       return `${this.firstName} is a ${this.calcAge()} year old ${this.job} & he has a driver's license.`;
   //    }else{
   //       return `${this.firstName} is a ${this.calcAge()} year old ${this.job} & he doesn't have a driver's license.`;
   //    }
   // }

   getDriverLicense:function(){
      return `${this.firstName} is a ${this.job} and he has ${this.hasDriverLicense ? 'a':'no'} driver license.`;
   }
}

console.log(john2.calcAge());
console.log(john2.age);
console.log(john2.age);
console.log(john2.age);

console.log(john2.getDriverLicense());



const mark={
   fullName:'Mark',
   mass:78,
   height:1.69,
   calcBMI:function(){
      this.bmi=this.mass/this.height**2;
      return this.bmi;
   }
}

const smith={
   fullName:'Smith',
   mass:88,
   height:1.69,
   calcBMI:function(){
      this.bmi=this.mass/this.height**2;
      return this.bmi;
   }
}

console.log(mark.calcBMI());
console.log(smith.calcBMI());

if(mark.calcBMI()>smith.calcBMI()){
   console.log(`Mark BMI ${mark.calcBMI()} is higher than Smith's BMI ${smith.calcBMI()}`);
}else{
   console.log(`Smith's BMI ${smith.calcBMI()} is higher than Mark BMI ${mark.calcBMI()}`);
}
