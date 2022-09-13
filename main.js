// Output
let cardDetails = document.getElementById("cardHolderDetails")
let longCardNumber = document.getElementById("longCardNumber")
let cvcNumbers = document.getElementById("cvcNumbers") 
let mm = document.getElementById("mm")
let yy = document.getElementById("yy")
const frontOfCard = document.getElementById("frontOfCard")

// input
let cardHolderName = document.getElementById("cardHolderName")
let cardNumber = document.getElementById("cardNumber")
let month = document.getElementById("mmDate")
let year = document.getElementById("yyDate")
let cvc = document.getElementById("cvcData")

function render(input, output){
    input.addEventListener("keyup", function(){
        let cardInfo = output
        cardInfo.innerHTML = `
            ${input.value}
        `
    })
}

function charSeperation(){
    cardNumber.addEventListener("keyup", function(e){
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        longCardNumber.innerHTML = `
            ${cardNumber.value}
        `
    })
}

render(cardHolderName, cardDetails)
charSeperation()
render(cvc, cvcNumbers)
render(month, mm)
render(year, yy)

// Error messages

function error(){
    
}
