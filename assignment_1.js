
// Comment

const name = "Bryor"
console.log(`Hello ${name}.`)


const productName = "Sailboat"
const costPerUnit = 4500.00
const basePrice = 8999.99
const discountRate = 0.15
const salesTaxRate = 0.07
const fixedMonthlyCosts = 10000

const discountedPrice = basePrice * (1- discountRate)
const finalPriceWithTax = discountedPrice * (1+salesTaxRate)
const profitPerUnit = finalPriceWithTax - costPerUnit
const breakEvenUnits = Math.ceil(fixedMonthlyCosts/profitPerUnit)
const isProfitablePerUnit = profitPerUnit > 0

console.log("Product:", productName)
console.log("Discounted Price: $" + discountedPrice.toFixed(2))
console.log("Profit per Unit: $" + profitPerUnit.toFixed(2))
console.log("Units needed to break even:", breakEvenUnits)
console.log("Are we profitable?", isProfitablePerUnit)