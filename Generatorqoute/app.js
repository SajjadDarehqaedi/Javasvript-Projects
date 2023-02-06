const qoutes = [["The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela"],
["The way to get started is to quit talking and begin doing", "Walt Disney"],
["Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking", "Steve Jobs"],
["If life were predictable it would cease to be life, and be without flavor.", "Eleanor Roosevelt"],
["f you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", "Oprah Winfrey"]]

let qouteText = document.getElementById("qoute")
let auther = document.getElementById("auther")

function ChangeQoute(){
    // console.log(qoutes[0][0] + qoutes[0][1])
    let random = parseInt(Math.random() * qoutes.length)  
    qouteText.innerHTML = qoutes[random][0]
    auther.innerHTML = qoutes[random][1]           
}

window.onload = ()=>{
    qouteText.innerHTML = qoutes[0][0]
    auther.innerHTML = qoutes[0][1]
}