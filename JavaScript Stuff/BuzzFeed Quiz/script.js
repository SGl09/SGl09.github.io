
var q1_a1 = document.getElementById("q1-a1");
var q1_a2 = document.getElementById("q1-a2");
var q1_a3 = document.getElementById("q1-a3");
var q1_a4 = document.getElementById("q1-a4");

var q2_a1 = document.getElementById("q2-a1");
var q2_a2 = document.getElementById("q2-a2");
var q2_a3 = document.getElementById("q2-a3");
var q2_a4 = document.getElementById("q2-a4");

var q3_a1 = document.getElementById("q3-a1");
var q3_a2 = document.getElementById("q3-a2");
var q3_a3 = document.getElementById("q3-a3");
var q3_a4 = document.getElementById("q3-a4");

var q4_a1 = document.getElementById("q4-a1");
var q4_a2 = document.getElementById("q4-a2");
var q4_a3 = document.getElementById("q4-a3");
var q4_a4 = document.getElementById("q4-a4");


var q5_a1 = document.getElementById("q5-a1");
var q5_a2 = document.getElementById("q5-a2");
var q5_a3 = document.getElementById("q5-a3");
var q5_a4 = document.getElementById("q5-a4");


var q6_a1 = document.getElementById("q6-a1");
var q6_a2 = document.getElementById("q6-a2");
var q6_a3 = document.getElementById("q6-a3");
var q6_a4 = document.getElementById("q6-a4");


var result = document.getElementById("result");
var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");
var result4 = document.getElementById("result4");
var result5 = document.getElementById("result5");
var result6 = document.getElementById("result6");

var submit_button = document.getElementById("submit-button");
var submit_button2 = document.getElementById("submit-button2");
var submit_button3 = document.getElementById("submit-button3");
var submit_button4 = document.getElementById("submit-button4");
var submit_button5 = document.getElementById("submit-button5");
var submit_button6 = document.getElementById("submit-button6");


var score_radahn = 0;
var score_melania = 0;
var score_firegiant = 0;
var score_maliketh = 0;

function check_q1(){

    if (q1_a1.checked == true){
        score_radahn = score_radahn + 1;
        result.innerHTML = "You chose 1!";
    }
    else if (q1_a2.checked == true){
        score_melania = score_melania + 1;
        result.innerHTML = "You chose 2!";
    }
    else if (q1_a3.checked == true){
        score_firegiant = score_firegiant + 1;
        result.innerHTML = "You chose 3!";
    }
    else if (q1_a4.checked == true){
        score_maliketh = score_maliketh + 1;
        result.innerHTML = "You chose 4!";
    }
    else{
        result.innerHTML = "You didn't choose anything!";
    }
}

function check_q2(){

        if (q2_a1.checked == true){
        score_radahn = score_radahn + 1;
        result2.innerHTML = "You chose 1!";
    }
    else if (q2_a2.checked == true){
        score_melania = score_melania + 1;
        result2.innerHTML = "You chose 2!";
    }
    else if (q2_a3.checked == true){
        score_firegiant = score_firegiant + 1;
        result2.innerHTML = "You chose 3!";
    }
    else if (q2_a4.checked == true){
        score_maliketh = score_maliketh + 1;
        result2.innerHTML = "You chose 4!";
    }
    else{
        result2.innerHTML = "You didn't choose anything!";
    }
}

function check_q3(){

        if (q3_a1.checked == true){
        score_radahn = score_radahn + 1;
        result3.innerHTML = "You chose 1!";
    }
    else if (q3_a2.checked == true){
        score_melania = score_melania + 1;
        result3.innerHTML = "You chose 2!";
    }
    else if (q3_a3.checked == true){
        score_firegiant = score_firegiant + 1;
        result3.innerHTML = "You chose 3!";
    }
    else if (q3_a4.checked == true){
        score_maliketh = score_maliketh + 1;
        result3.innerHTML = "You chose 4!";
    }
    else{
        result3.innerHTML = "You didn't choose anything!";
    }
}

function check_q4(){

        if (q4_a1.checked == true){
        score_radahn = score_radahn + 1;
        result4.innerHTML = "You chose 1!";
    }
    else if (q4_a2.checked == true){
        score_melania = score_melania + 1;
        result4.innerHTML = "You chose 2!";
    }
    else if (q4_a3.checked == true){
        score_firegiant = score_firegiant + 1;
        result4.innerHTML = "You chose 3!";
    }
    else if (q4_a4.checked == true){
        score_maliketh = score_maliketh + 1;
        result4.innerHTML = "You chose 4!";
    }
    else{
        result4.innerHTML = "You didn't choose anything!";
    }
}

function check_q5(){

        if (q5_a1.checked == true){
        score_radahn = score_radahn + 1;
        result5.innerHTML = "You chose 1!";
    }
    else if (q5_a2.checked == true){
        score_melania = score_melania + 1;
        result5.innerHTML = "You chose 2!";
    }
    else if (q5_a3.checked == true){
        score_firegiant = score_firegiant + 1;
        result5.innerHTML = "You chose 3!";
    }
    else if (q5_a4.checked == true){
        score_maliketh = score_maliketh + 1;
        result5.innerHTML = "You chose 4!";
    }
    else{
        result5.innerHTML = "You didn't choose anything!";
    }
}

function calculate_result(){
        if(score_melania, score_firegiant, score_maliketh < score_radahn){
            result6.innerHTML = "YOU GOT 1!!!"
        }

        else if(score_radahn, score_firegiant, score_maliketh < score_melania){
           result6.innerHTML  = "YOU GOT 2!!!"
        }

        else if (score_radahn, score_melania, score_maliketh < score_firegiant){
            result6.innerHTML = "YOU GOT 3!!!"
        }

        else if(score_radahn, score_firegiant, score_melania < score_maliketh){
            result6.innerHTML = "YOU GOT 4!!!"
        }

        else{
            result6.innerHTML = "nothing..."
        }
}

submit_button.addEventListener("click", check_q1);
submit_button2.addEventListener("click", check_q2);
submit_button3.addEventListener("click", check_q3);
submit_button4.addEventListener("click", check_q4);
submit_button5.addEventListener("click", check_q5);
submit_button6.addEventListener("click", calculate_result);

