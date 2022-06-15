let age = Number(prompt("What is your age?"))
let distance = Number(prompt("How far are you traveling?"))

let priceForTravelKm = 0.21
let initialPrice = priceForTravelKm*distance

let taxUnder18 = 0.2 
let taxOver65 = 0.4

let discountPrice

if (age <= 18){
    let discount = taxUnder18 * 100
    let price = (initialPrice - (taxUnder18*initialPrice)).toFixed(2)
    
    discountPrice = `You have a ${discount}% discount and you will now pay $${price}`
} 

else if (age >= 65){
    let discount = taxOver65 * 100
    let price = (initialPrice-(taxOver65*initialPrice)).toFixed(2)

   discountPrice =  `You have a ${discount}% discount and you will now pay $${price}`
}

else {
    discountPrice = `You have no discount and you will pay  $${initialPrice}`
}


console.log(discountPrice)



