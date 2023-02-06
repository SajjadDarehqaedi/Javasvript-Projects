function changeColor(){
    const hexColors = [0, 1, 2, 3, 4, 5,
                       6, 7, 8, 9, "A", "B",
                       "C", "D", "E", "F"]
    let body = document.querySelector("body")
    let hexValue= document.getElementById("HexCode")
    let hex = "#"
    for (var i = 0; i < 6 ; i++){
        var index = Math.floor(Math.random() * hexColors.length)
        hex+= hexColors[index]
    }
    hexValue.innerHTML = hex
    body.style.background = hex                   
}