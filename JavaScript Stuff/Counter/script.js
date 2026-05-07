var count = 0;

function plusOne(){
    count = count + 1;
    document.getElementById("count-text").innerHTML = count;
}

var count = 0;

function minusOne(){
    count = count - 1;
    document.getElementById("count-text").innerHTML = count;
}

document.getElementById("plus-one").addEventListener("click", plusOne)
document.getElementById("minus-one").addEventListener("click", minusOne)