'use strict'

// ---task1----------------------

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = [];

for (let i = 0; i < userNames.length; i++) {
    const initial = userNames[i].split(' ').map(item => item[0]).join('.');
    initials.push(initial);
}

console.log(initials.sort()); 


// --task2----------------------

const currentMaxValue = 4589; 
let reverseMaxValue;

reverseMaxValue = Number(String(currentMaxValue).split('').reverse().join(''));

console.log(reverseMaxValue); 
console.log(typeof reverseMaxValue); 

// -----task3----------------------

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = 1;

for (let i = 0; i < resultsArray.flat(Infinity).length; i ++) {
    productOfArray *= resultsArray.flat(Infinity)[i];
}

console.log(productOfArray); 
