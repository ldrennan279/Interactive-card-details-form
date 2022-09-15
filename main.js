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

// render functions to add information to Card front and back

function render(input, output){
    input.addEventListener("keyup", function(){
        let cardInfo = output
        cardInfo.innerHTML = `
            ${input.value}
        `
    })
}

render(cardHolderName, cardDetails)
render(cvc, cvcNumbers)
render(month, mm)
render(year, yy)

function charSeperation(){
    cardNumber.addEventListener("keyup", function(e){
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        longCardNumber.innerHTML = `
            ${cardNumber.value}
        `
    })
}

charSeperation()

// Error messages for feilds that are empty

let cardHolderError = document.getElementById("cardHolder-error")
let cardNumberError = document.getElementById("cardNumber-error")
let expError = document.getElementById("exp-error")
let cvcError = document.getElementById("cvc-error")

function error(input, errorId){
    input.addEventListener("click", function(){
        if(input.value == ""){
            errorId.style.display = "block"
        } else {
            errorId.style.display = "none"
        }
    })
}

error(cardHolderName, cardHolderError)
error(cardNumber, cardNumberError)
error(month, expError)
error(year, expError)
error(cvc, cvcError)
