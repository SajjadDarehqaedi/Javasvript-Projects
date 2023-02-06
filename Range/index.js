var range = document.getElementById("range")
var showRange = document.getElementById("showRange")
window.onload = function (){
    range.value = "0"
    showRange.innerHTML = "0%"
} 
range.oninput = function (){
    showRange.innerHTML = range.value + "%"
}