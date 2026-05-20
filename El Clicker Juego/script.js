var item = document.getElementById("item")
var counter = document.getElementById("counter")

var numItem = 0
var itemPerClick = 1

itemCounter.innerHTML = "0 Items";
function clickItem(){
    numItems = numItems + 1
    counter.innerHTML = numItem.toString() + " Items";
}



item.addEventListener("click", clickItem)