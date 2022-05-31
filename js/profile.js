document.addEventListener("DOMContentLoaded", (event) => {

var myInput = document.getElementById("password1");
//var myInput2 = document.getElementById("password2");

var submit_button = document.getElementById("submit")

//submit_button.addEventListener("click", validate)
/*
function validate() {
  console.log("clicked")
    if (myInput.value != myInput2.value) {
        alert("Passwords do not match.");
        submit_button.disabled=true;
        //submit_button.removeEventListener('click',validate)
    }
    submit_button.disabled=false;
    //submit_button.addEventListener("click", validate)

}
*/
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var passwords_match = document.getElementById("passwords_match");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }


} //linking with its API
let button = document.getElementById("submit");
button.addEventListener("click", submitclick);
function submitclick(){
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let firstname = document.getElementById("fname").value;
    let lastname = document.getElementById("lname").value;
    let id= window.localStorage.getItem("id");
    console.log(id);
    let data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('firstname', firstname);
    data.append('lastname', lastname);
    data.append('id', id);

    axios({
        method: 'POST',
        url:'http://localhost/Foody-backend/profile.php',
        data: data
    }).then(function (response) {
        console.log("batoul");
        console.log(response);

         if(id!==null && id!=="logged out"){
            window.location.href='http://localhost/Foody/index.html'
        }
       
;    }
    )}
})