
let cal = document.getElementById("calculate")
let price = document.getElementById("price")
let peopleNum = document.getElementById("peopleNum")
let serviceQuality = document.getElementById("service")
let anim = document.getElementById("anim")
let showResult = document.getElementById("showResult")
let result = document.querySelectorAll(".result")
let form = document.querySelectorAll(".input")
let warning = document.querySelectorAll(".warning")
let s = document.getElementById("1")
let diaolog = document.getElementById("warning-text")
let boxDioalog = document.getElementById("box-dioalog")
cal.addEventListener("click", ()=>{
    
    var bill = parseInt(price.value)
    var number = parseInt(peopleNum.value)
    var service = parseInt(serviceQuality.value)
    var amountTip = parseFloat((service * bill) / 100)
    var totalAmount = bill + amountTip
    var person = parseFloat(totalAmount / number).toFixed(2)

    warning.forEach((war)=>{
        if (war.value=== "" || war.value === "Choose"){
            boxDioalog.style.display = "flex"
            diaolog.innerHTML = `${war.getAttribute("name")} is empty`
            setTimeout(()=>{
                boxDioalog.style.display = "none"
            },1500)
        }
        
    })


    const x = [totalAmount.toFixed(2), amountTip.toFixed(2), person ]
    result.forEach(()=>{
        for (var i in result){
            result[i].textContent = x[i]
        }
    })


    setTimeout(()=>{
        anim.style.display = "block"
    }, 200)


    setTimeout(()=>{
        anim.style.display = "none"
        showResult.style.display = "block"
        cal.disabled = true
    }, 2000)
    
})


form.forEach((inp)=>{
    inp.addEventListener("input", ()=>{
        cal.disabled = false
        anim.style.display = "none"
        showResult.style.display = "none"
    })
})
