
function Welcome(){
    alert("Hello")
}

document.getElementsByClassName("minus-btn").addEventListener("click", minus);

function minus() {
    var x= document.getElementsById("valeur")
    document.getElementsById("valeur").value = "9"
}