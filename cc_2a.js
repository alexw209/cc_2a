// Coding Challenge 00

// Code goes here


const productName = "Computer";
let costPerUnit = 500;
let basePrice = 1000;
let discountRate = 0.15;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 3000;

let discountedPrice = basePrice*(1-discountRate);
let finalPriceWithTax = discountedPrice*(1+salesTaxRate);
let profitPerUnit = finalPriceWithTax-costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts/ profitPerUnit);
let isProfitablePerUnit = profitPerUnit>0;

console.log(productName);
console.log(discountedPrice);
console.log(finalPriceWithTax);
console.log(profitPerUnit);
console.log(breakEvenUnits);
console.log(isProfitablePerUnit);