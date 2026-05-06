document.getElementById('color-change').addEventListener('mouseenter', changRed)
document.getElementById('color-change1').addEventListener('mouseenter', changPink)
document.getElementById('color-change2').addEventListener('mouseenter', changBlue)
document.getElementById('color-change3').addEventListener('mouseenter', changPurp)
document.getElementById('color-change4').addEventListener('mouseenter', changGrn)

function changRed(){
    document.body.style.backgroundColor = 'red';
}
function changPink(){
    document.body.style.backgroundColor = 'pink';
}
function changBlue(){
    document.body.style.backgroundColor = 'Blue';
}
function changPurp(){
    document.body.style.backgroundColor = 'purple';
}
function changGrn(){
    document.body.style.backgroundColor = 'green';
}