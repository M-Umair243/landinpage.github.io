let username = document.getElementById("username");
let password = document.getElementById("password");
let username_error = document.getElementById("user_error");
let password_error = document.getElementById("pass_error");

username.addEventListener('textInput', Username_verify);
password.addEventListener('textInput', Pass_verify);
function Validation() {
  if (username.value.length < 9) {
    username_error.style.display="block";
    username.style.border="1px solid red";
    username.focus();
    return false;
  }
  if (password.value.length < 6) {
    password_error.style.display="block";
    password.style.border="1px solid red";
    password.focus();
    return false;
  }
}

function Username_verify() {
  if (username.value.length >= 8) {
    username_error.style.display="none";
    username.style.border="1px solid green";
    return true;
  }
}
function Pass_verify() {
  if (password.value.length >= 5) {
    password_error.style.display="none";
    password.style.border="1px solid green";
    return true;
  }
}