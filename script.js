
var s1, s2, s3, s4, s5, s6, s7, s8, s9;

s1 = document.querySelector(".button1");
s2 = document.querySelector(".button2");
s3 = document.querySelector(".button3");
s4 = document.querySelector(".button4");
s5 = document.querySelector(".button5");
s6 = document.querySelector(".button6");
s7 = document.querySelector(".button7");
s8 = document.querySelector(".button8");
s9 = document.querySelector(".button9");
s10 = document.querySelector(".reset");

const popupDiv = document.getElementById('popupDiv');
const res = document.querySelector(".res");

const you = document.querySelector(".youp");
const tie = document.querySelector(".tiep");
const oppo = document.querySelector(".compp");

var youWon = 0, tied = 0, oppoWon = 0;

var turnchage = document.querySelector(".turnchage");

var buttons = document.querySelectorAll(".btn-class");

var Xturn = true;
var count = 0;



function clearFeild() {

    setTimeout(() => {
        s1.innerHTML = "";
        s2.innerHTML = "";
        s3.innerHTML = "";
        s4.innerHTML = "";
        s5.innerHTML = "";
        s6.innerHTML = "";
        s7.innerHTML = "";
        s8.innerHTML = "";
        s9.innerHTML = "";
    }, 500)

    count = 0;
}

s10.addEventListener("click", (e) => {
    Xturn = true;
    clearFeild();
    enablebtn();

})

function disablededbtn() {
    s1.disabled = true;
    s2.disabled = true;
    s3.disabled = true;
    s4.disabled = true;
    s5.disabled = true;
    s6.disabled = true;
    s7.disabled = true;
    s8.disabled = true;
    s9.disabled = true;

}

function hidePop() {
    popupDiv.style.display = 'none'
}
function showPop() {

    popupDiv.style.display = 'block'
    setTimeout(() => {
        hidePop();
    }, 1500)
    clearFeild();
    enablebtn();


}

// this is a winner funtion 
const getWinner = (w) => {
    Xturn = true;

    res.innerHTML = (w + " is a winner 😍");
    if (w == "X") {
        youWon++;
        you.innerHTML = youWon;

    }
    if (w == "0") {
        oppoWon++;
        oppo.innerHTML = oppoWon;
    }

    showPop();


}
function gameDraw() {
    tied++;
    tie.innerHTML = tied;
    count = 0;
    Xturn = true;
    res.innerHTML = ("Game Draw 😒")
    showPop();
    enablebtn();

}

// click on the listner on everybutton and set the background on it 

function checkForWin() {
    if (s1.innerHTML == s2.innerHTML && s2.innerHTML == s3.innerHTML && s3.innerHTML == s1.innerHTML && s1.innerHTML != "") {
        getWinner(s1.innerHTML);

    }
    else if (s1.innerHTML == s4.innerHTML && s4.innerHTML == s7.innerHTML && s7.innerHTML == s1.innerHTML && s1.innerHTML != "") {
        getWinner(s1.innerHTML);

    }
    else if (s4.innerHTML == s5.innerHTML && s5.innerHTML == s6.innerHTML && s6.innerHTML == s4.innerHTML && s4.innerHTML != "") {
        getWinner(s4.innerHTML);

    }
    else if (s7.innerHTML == s8.innerHTML && s8.innerHTML == s9.innerHTML && s9.innerHTML == s7.innerHTML && s7.innerHTML != "") {
        getWinner(s7.innerHTML);

    }
    else if (s1.innerHTML == s5.innerHTML && s5.innerHTML == s9.innerHTML && s9.innerHTML == s1.innerHTML && s1.innerHTML != "") {
        getWinner(s1.innerHTML);

    }
    else if (s3.innerHTML == s6.innerHTML && s6.innerHTML == s9.innerHTML && s9.innerHTML == s3.innerHTML && s3.innerHTML != "") {
        getWinner(s3.innerHTML);

    }
    else if (s3.innerHTML == s5.innerHTML && s5.innerHTML == s7.innerHTML && s7.innerHTML == s3.innerHTML && s3.innerHTML != "") {
        getWinner(s3.innerHTML);

    }
    else if (s2.innerHTML == s5.innerHTML && s5.innerHTML == s8.innerHTML && s8.innerHTML == s2.innerHTML && s2.innerHTML != "") {
        getWinner(s2.innerHTML);

    }
    else if (s1.innerHTML != "" && s2.innerHTML != "" && s3.innerHTML != "" && s4.innerHTML != "" && s5.innerHTML != "" && s6.innerHTML != "" && s7.innerHTML != "" && s8.innerHTML != "" && s9.innerHTML != "" && count == 9) {
        gameDraw();
    }
}

Array.from(buttons).forEach(buttons => {

    buttons.addEventListener('click', (e) => {


        if (Xturn) {
            Xturn = false;
            buttons.innerHTML = "X";
            turnchage.innerHTML = "0";
            buttons.disabled = true;


        }
        else {
            Xturn = true;
            buttons.innerHTML = "0";
            turnchage.innerHTML = "X";
            buttons.disabled = true;

        }
        count += 1;
        if (count == 9) {
            // call the draw function 
            gameDraw();
        }

        checkForWin();



    })
})






