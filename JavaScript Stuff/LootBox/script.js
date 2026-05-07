lootbox = document.getElementById("lootbox")
function  rollLootbox(){
    number = Math.floor(Math.random()* 100)



    if (number < 50) {
        lootbox.innerHTML = "COMMON";
        lootbox.style.backgroundColor = "gray"
    }

    else if (number < 75) {
        lootbox.innerHTML = "UNCOMMON";
        lootbox.style.backgroundColor = "green"
    }

    else if (number < 85) {
        lootbox.innerHTML = "RARE";
        lootbox.style.backgroundColor = "blue"
    }

    else if (number < 95) {
        lootbox.innerHTML = "EPIC";
        lootbox.style.backgroundColor = "purple"
    }

    else if (number < 99) {
        lootbox.innerHTML = "LEGENDARY";
        lootbox.style.backgroundColor = "gold"
    }

    else if (number < 99.5) {
        lootbox.innerHTML = "MYTHIC";
        lootbox.style.backgroundColor = "cyan"
    }

    else if (number < 99.75) {
        lootbox.innerHTML = "WOW";
        lootbox.style.backgroundColor = "pink"
    }  

    else if (number < 99.99) {
        lootbox.innerHTML = "IMPOSSIBLE";
        lootbox.style.backgroundColor = "MidnightBlue"
    }    
}

document.getElementById("roll").addEventListener("click", rollLootbox);