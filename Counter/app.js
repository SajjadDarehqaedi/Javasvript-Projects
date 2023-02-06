//Colors
const colors = ["green", "red", "white"]

//Find the counter
let number = document.getElementById("showNumber")

//Find the buttons
let btIncrease = document.getElementById("increase")
let btdecrease = document.getElementById("decrease")

//Set the initial Value
window.addEventListener("load", ()=>{
    number.innerHTML = 0
    number.style.color = colors[2]

})

//Increasing function
btIncrease.addEventListener("click", ()=>{
    let value = parseInt(number.textContent)
    value +=1
    number.innerHTML = value
    if (value > 0 ){
        number.style.color = colors[0]
    }
    if (value === 0){
        number.style.color = colors[2]
    }
    
    
})

//Decreasing Function
btdecrease.addEventListener("click", ()=>{
    let value = parseInt(number.textContent)
    value-=1
    number.innerHTML = value
    if (value < 0){
        number.style.color = colors[1]
    }
    if (value === 0){
        number.style.color = colors[2]
    }
})



