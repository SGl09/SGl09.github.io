var itemMonster = document.getElementById("itemMonster")
var counter = document.getElementById("counterMonster")

var numItem = 0
var itemPerClick = 1

counter.innerHTML = "0 Monsters";

function clickItem(){
    numItem = numItem + itemPerClick;
    counter.innerHTML = numItem.toString() + " Monsters";
}



itemMonster.addEventListener("click", clickItem)