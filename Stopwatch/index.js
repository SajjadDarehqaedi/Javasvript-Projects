window.onload = function (){
    var seconds = 00
    var tens = 00
    var appendSeconds = document.getElementById('seconds')
    var appendTens = document.getElementById('tens')
    var buutonStart = document.getElementById('button-start')
    var buttonStop = document.getElementById('button-stop')
    var buttonReset = document.getElementById('button-reset')
    var interval;
    buutonStart.onclick = function (){
        clearInterval(interval)
        interval = setInterval(startTimer, 10)
    }
    buttonStop.onclick = function (){
        clearInterval(interval)
    }
    buttonReset.onclick = function (){
        clearInterval(interval)
        tens = "00"
        seconds = "00"
        appendTens.innerHTML = tens
        appendSeconds.innerHTML = seconds
    }
    function startTimer(){
        tens++;
        if (tens <= 9){
            appendTens.innerHTML = "00" + tens
        }
        if (tens > 9){
            appendTens.innerHTML = tens
        }
        if (tens > 99){
            console.log("seconds")
            seconds++;
            appendSeconds.innerHTML = "0" + seconds
            tens = 0
            appendTens.innerHTML = "0" + 0
        }
        if (seconds > 9){
            appendSeconds.innerHTML = seconds
        }
    }
}



