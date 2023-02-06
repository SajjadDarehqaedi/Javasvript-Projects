//Find the Image
let mainImg = document.getElementById("mainImg")

//Find the Buttons
let rightBt = document.getElementById("rightBt")
let leftBt = document.getElementById("leftBt")

//Images
const images =  ["index1.jpg", "index2.jpg", "index3.jpg"]

let count =  0
let lenImg = images.length - 1

window.onload = ()=>{
    mainImg.setAttribute("src", "index.jpg")
}


rightBt.addEventListener("click", ()=>{
    if (count > lenImg){
        count = 0
    }
    mainImg.setAttribute("src", `${images[count]}`)
    count +=1
    
})


leftBt.addEventListener("click", () => {
    if (count < 0){
        count = lenImg
    }
    mainImg.setAttribute("src", images[count])
    count -= 1
})

