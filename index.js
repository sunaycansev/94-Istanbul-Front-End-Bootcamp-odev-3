//Selecting Elements
const form = document.querySelector("#form1");
const userName = document.querySelector("#userName");
const userPassword = document.querySelector("#userPassword");
const userMail = document.querySelector("#userMail");
const userConfirm = document.querySelector("#userConfirm");
const submit = document.querySelector("#submit");

// Add Event Listeners
submit.addEventListener("click", validate);
console.log(userName);
function validate(e) {
  e.preventDefault();
  nameCheck();
  passwordCheck();
  mailCheck();
  confirmCheck();
}
// input checking functions
function nameCheck(e) {
  const nameError = document.querySelector("#nameError");
  if (userName.value.length == 0) {
    nameError.classList.remove("non-visible");
    userName.classList.add("red-border");
  } else {
    nameError.classList.add("non-visible");
    // userName.classList.remove("red-border");
    userName.classList.remove("red-border");
  }
}
function passwordCheck(e) {
  const passwordError = document.querySelector("#passwordError");
  if (userPassword.value.length < 8) {
    passwordError.classList.remove("non-visible");
    userPassword.classList.add("red-border");
  } else {
    passwordError.classList.add("non-visible");
    userPassword.classList.remove("red-border");
  }
}
function mailCheck(e) {
  const mailError = document.querySelector("#mailError");
  if (!userMail.value.includes("@")) {
    mailError.classList.remove("non-visible");
    userMail.classList.add("red-border");
  } else {
    mailError.classList.add("non-visible");
    userMail.classList.remove("red-border");
  }
}
function confirmCheck(e) {
  const confirmError = document.querySelector("#confirmError");
  if (!userConfirm.checked) {
    confirmError.classList.remove("non-visible");
  } else {
    confirmError.classList.add("non-visible");
  }
}
// adding event listeners
userName.addEventListener("blur", nameCheck);
userPassword.addEventListener("blur", passwordCheck);
userMail.addEventListener("blur", mailCheck);
userConfirm.addEventListener("blur", confirmCheck);
