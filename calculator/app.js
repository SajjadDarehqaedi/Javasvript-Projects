var buttons = document.querySelectorAll(".btn")
var disBt = document.querySelectorAll(".disable")
var showText = document.getElementById("showText")
var equal = document.getElementById("equal")
var del = document.getElementById("bt-danger-width")

//Finding the buttons
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      let value = e.target.dataset.num;
      showText.innerHTML += value;
      //make the disbaled buttons false
      for (i in disBt){
        if (showText.innerHTML === null){
            disBt[i].disabled = true
          }
          else{
            disBt[i].disabled = false
          }
       
      }

    })
    
  });
//calculating the displayed detail
equal.onclick = ()=>{
  var detail = showText.textContent.split("=")
  var result = eval(detail[0])
  showText.innerHTML = result

}

//deleting the desplayed detail
del.onclick = ()=>{
  showText.innerHTML = null
  //make the disbaled button true
  for (i in disBt){
    disBt[i].disabled = true
  }
}

  
window.onload = ()=>{
    showText.innerHTML = null

    //make the disbaled button true
    for (i in disBt){
      disBt[i].disabled = true
    }

}

