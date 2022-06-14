let age = Number(prompt("What is your age?"))
let distance = Number(prompt("How far are you traveling?"))

let priceForTravelKm = 0.21
let initialPrice = priceForTravelKm*distance



let taxUnder18 = 0.2 
let taxOver65 = 0.4

if (age <= 18){
  discountPrice =  initialPrice - (taxUnder18*initialPrice)
} 

else if (age >= 65){
   discountPrice = initialPrice - (taxOver65*initialPrice)
}

else {
    discountPrice = initialPrice
}


console.log(discountPrice)