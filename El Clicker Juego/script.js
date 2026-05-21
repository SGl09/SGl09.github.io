var itemMonster = document.getElementById("itemMonster")
var counter = document.getElementById("counterMonster")

var numItem = 0
var itemPerClick = 1

counter.innerHTML = "0 Items";

function clickItem(){
    numItem = numItem + itemPerClick;
    counter.innerHTML = numItem.toString() + " Items";
}



itemMonster.addEventListener("click", clickItem)