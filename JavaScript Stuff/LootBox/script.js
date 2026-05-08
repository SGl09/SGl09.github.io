lootbox = document.getElementById("lootbox")
function  rollLootbox(){
    number = Math.floor(Math.random()* 100)
var common = document.getElementById("common");
var c_count = 0;

var uncommon = document.getElementById("uncommon");
var u_count = 0;

var rare = document.getElementById("rare");
var r_count = 0;

var epic = document.getElementById("epic");
var e_count = 0;

var legendary = document.getElementById("legendary");
var l_count = 0;

var mythic = document.getElementById("mythic");
var m_count = 0;

var wow = document.getElementById("wow");
var w_count = 0;

var impossible = document.getElementById("impossible");
var im_count = 0;






    if (number < 50) {
        lootbox.innerHTML = "COMMON";
        lootbox.style.backgroundColor = "gray"
        c_count = c_count + 1;
        common.innerHTML = c_count;
    }

    else if (number < 75) {
        lootbox.innerHTML = "UNCOMMON";
        lootbox.style.backgroundColor = "green"
        u_count = u_count + 1;
        uncommon.innerHTML = u_count;
    }

    else if (number < 85) {
        lootbox.innerHTML = "RARE";
        lootbox.style.backgroundColor = "blue"
        r_count = r_count + 1;
        rare.innerHTML = r_count;
    }

    else if (number < 95) {
        lootbox.innerHTML = "EPIC";
        lootbox.style.backgroundColor = "purple"
        e_count = e_count + 1;
        epic.innerHTML = e_count;
    }

    else if (number < 99) {
        lootbox.innerHTML = "LEGENDARY";
        lootbox.style.backgroundColor = "gold"
        l_count = l_count + 1;
        legendary.innerHTML = l_count;
    }

    else if (number < 99.5) {
        lootbox.innerHTML = "MYTHIC";
        lootbox.style.backgroundColor = "cyan"
        m_count = m_count + 1;
        mythic.innerHTML = m_count;
    }

    else if (number < 99.75) {
        lootbox.innerHTML = "WOW";
        lootbox.style.backgroundColor = "pink"
        w_count = w_count + 1;
        wow.innerHTML = w_count;
    }  

    else if (number < 99.99) {
        lootbox.innerHTML = "IMPOSSIBLE";
        lootbox.style.backgroundColor = "MidnightBlue"
        im_count = im_count + 1;
        impossible.innerHTML = im_count;
    }    
}

document.getElementById("roll").addEventListener("click", rollLootbox);
document.getElementById("username").value