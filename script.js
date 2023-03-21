// dname mname fname lname

let wrgmsg = document.querySelectorAll(".err-msg");
let input = document.querySelectorAll(".first-input");
let btn = document.querySelector("#submit-answ");
let errMsg = document.querySelector(".err-msg");
let errMsg1 = document.querySelector(".err-msg1");
let errMsg11 = document.querySelector(".err-msg11");
let errMsg2 = document.querySelector(".err-msg2");
let errMsg3 = document.querySelector(".err-msg3");
let form = document.querySelector("#form");
let cardNameInput = document.querySelector("#cardname");
let cardNameDiv = document.querySelector("#card-name");
let cardNumInput = document.querySelector("#cardnum");
let cardNumDiv = document.querySelector("#card-num");
let cardMonthInput = document.querySelector("#expMonth");
let cardMonthDiv = document.querySelector("#card-date");
let cardYearInput = document.querySelector("#expYear");
let cardYearDiv = document.querySelector("#card-date1");
let cardCVCDiv = document.querySelector("#card2p");
let cardCVCInput = document.querySelector("#cvc-input");

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

function myFunction()
{
    cardNameDiv.innerHTML =  cardNameInput.value;
    cardNumDiv.innerHTML =  cardNumInput.value;
    cardMonthDiv.innerHTML =  cardMonthInput.value;
    cardYearDiv.innerHTML =   `/${cardYearInput.value}`;
    cardCVCDiv.innerHTML =   cardCVC  Input.value;
}

function validate() {
  let name = document.forms["Form"]["cardname"].value;
  let num = document.forms["Form"]["cardnum"].value;
  let exp = document.forms["Form"]["expdate"].value;
  let exp1 = document.forms["Form"]["expdate1"].value;
  let cvc = document.forms["Form"]["cvc"].value;

    
    var letters = /^[A-Za-z0-9\s]+$/;
    var result = letters.test(num);
  
    if (name == "") {
      errMsg.classList.remove("hide");
      document.forms["Form"]["cardname"].classList.add("border-red");
    } else {
      errMsg.classList.add("hide");
      document.forms["Form"]["cardname"].classList.remove("border-red");
    }
    
    // deixar o distanciamento do err msg para card number

  if (num == "") {
    errMsg1.classList.remove("hide");

    document.forms["Form"]["cardnum"].classList.add("border-red");
  } else {
    errMsg1.classList.add("hide");

    document.forms["Form"]["cardnum"].classList.remove("border-red");
  }

  if (cvc == "") {
    errMsg3.classList.remove("hide");
    document.forms["Form"]["cvc"].classList.add("border-red");
  } else {
    errMsg3.classList.add("hide");
    document.forms["Form"]["cvc"].classList.remove("border-red");
  }

  if (
    exp == "" ||
    (exp == null && exp1 == "") ||
    exp1 == null ||
    exp1 == "" ||
    (exp1 == null && exp == "") ||
    exp == null
  ) {
    errMsg2.classList.remove("hide");
    document.forms["Form"]["expdate"].classList.add("border-red");
    document.forms["Form"]["expdate1"].classList.add("border-red");
  } else {
    errMsg2.classList.add("hide");
    document.forms["Form"]["expdate"].classList.remove("border-red");
    document.forms["Form"]["expdate1"].classList.remove("border-red");
  }
}

