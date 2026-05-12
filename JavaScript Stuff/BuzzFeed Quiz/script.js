var q1_a1 = document.getElementById("q1_a1")
var q1_a2 = document.getElementById("q1_a1")
var q1_a3 = document.getElementById("q1_a1")
var q1_a4 = document.getElementById("q1_a1")

var result = documents.getElementById("result")
var submit_button = document.getElementById("submit-button")


var score_radahn = 0;
var score_melania = 0;
var score_firegiant = 0;
var score_maliketh = 0;

function check_q1(){

    if (q1_a1.checked == true){
        score_radahn = score_radahn + 1
    }
    else if (q1_a2.checked == true) {
        score_melania = score_melania + 1
    }  
    else if (q1_a3.checked == true) {
        score_firegiant = score_firegiant + 1
    }
    else if (q1_a4.checked == true) {
      score_maliketh = score_maliketh + 1
    }
    else{

        result.innerHTML = "You didn't choose anything!"
    }


}

submit_button.addEventListener("click", check_q1)