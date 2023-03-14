// dname mname fname lname

let wrgmsg = document.querySelectorAll(".err-msg");

let btn = document.querySelector("#submit-answ");
const errMsg = document.querySelector('.err-msg');


btn.addEventListener("click", function(e) {
    
    e.preventDefault();
    
    function required()
    {
        let cvc = document.forms["Form"]["dname"].value;
        let exp = document.forms["Form"]["mname"].value;
        let name = document.forms["Form"]["fname"].value;
        let num = document.forms["Form"]["lname"].value;

        if (name === "" || name === null)
        {
            inputEmail.classList.add('border-red');
            errMsg.classList.remove('hide');
        }
        else {
            inputEmail.classList.remove('border-red');
            errMsg.classList.add('hide');
         }
    }
  });




  
  
  
  btn.addEventListener('click', validação);
  
  
    
