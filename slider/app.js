//Find the Image
let mainImg = document.getElementById("mainImg")

//Find the Buttons
let rightBt = document.getElementById("rightBt")
let leftBt = document.getElementById("leftBt")

//Images
const images =  ["index1.jpg", "index2.jpg", "index3.jpg"]
const numbers = [1, 2, 3, 4]
const numbers1 = [4, 5, 6, 7]
const t = [...numbers, ...numbers1]
const [one, two, ...rest] = numbers
console.log[one, two]
console.log(t)
console.log(numbers.map((num) => {
    return num * 3
}))
let f = (a, b)=>{
    const m = a * b
    const s = a - b
    const d = a / b
    const add = a + b
    return [m, s ,d, add]
}
console.log(f(4,2).map((num)=>{
    return num * 2
}))
const [num1, num2,, num4] = f(4, 2)
console.log(num1, num2,  num4)
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  
 
  myVehicle(vehicleOne);

  // old way
  function myVehicle({brand, type}) {
    const message = brand + " " + type
    return message
  }
console.log(myVehicle)
// window.onload = ()=>{
//     mainImg.setAttribute("src", "index.jpg")
// }

// rightBt.addEventListener("click", ()=>{
//     let lenImg = images.length - 1
//     mainImg.setAttribute("src", `${images[lenImg]}`)
//     lenImg -=1
// })

