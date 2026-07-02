var itemMonster = document.getElementById("itemMonster")
var counter = document.getElementById("counterMonster")
var upgrade = document.getElementById("clicker-upgrade-B")
var upgrade2 = document.getElementById("autoclicker-upgrade-B")

var numItem = 0
var itemPerClick = 1
var autoEarn = 0


counter.innerHTML = "0 Monsters";

function clickItem(){
    numItem = numItem + itemPerClick;
    counter.innerHTML = numItem.toString() + " Monsters";
}

function upgradeClick(){
    if (numItem > 14) {
        itemPerClick = itemPerClick + 1
        numItem = numItem - 15
        counter.innerHTML = numItem.toString() + " Monsters";
        upgrade.innerHTML = "Upgrade Click: 500 monsters";
        upgrade.removeEventListener("click", upgradeClick)
    }
}
function upgradeClick_2(){
        if (numItem > 499) {
        itemPerClick = itemPerClick + 2
        numItem = numItem - 500
        counter.innerHTML = numItem.toString() + " Monsters";
        upgrade.innerHTML = "Upgrade Click: 15000 monsters"
    }
}

function autoClick(){
    if (numItem > 199) {
        autoEarn = autoEarn + 1
        numItem = numItem - 200
        counter.innerHTML = numItem.toString() + " Monsters";
        upgrade2.innerHTML = "Autoclick: 1500 monsters"
        
    }
}
    setInterval(function autoClickAction(){
    numItem = numItem + autoEarn;
    counter.innerHTML = numItem.toString() + " Monsters";}, 500)



itemMonster.addEventListener("click", clickItem)
upgrade.addEventListener("click", upgradeClick,)
upgrade.addEventListener("click", upgradeClick_2,);
upgrade2.addEventListener("click", autoClick)