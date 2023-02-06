function ChangeProfile(inp){
    var img = document.getElementById("image-profile")
    var file = inp.files[0]
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function(){
        img.setAttribute("src", reader.result)
    }
    reader.onerror = function(){
        reader.error
    }
}