const colors = ["red", "blue", "green", "pink", "brown"]
let body = document.querySelector("body")
body.style.background = "black"
function ChangeColor(){
    var e = parseInt(Math.random() * colors.length) 
    body.style.background = colors[e]
    console.log(e)
    }
