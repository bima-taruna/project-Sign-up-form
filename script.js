const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const leftSide = document.querySelector(".left-side");
password.addEventListener("change", () => {
  matchPassword(password.textContent, confirmPassword.textContent);
});

confirmPassword.addEventListener("change", () => {
  matchPassword(password.value, confirmPassword.value);
});

const errorText = document.createElement("p");
function matchPassword(input1, input2) {
  if (input1 !== input2) {
    errorText.style.color = "red";
    errorText.textContent = "password did not match with confirm password";
    password.style.borderColor = "red";
    confirmPassword.style.borderColor = "red";
    leftSide.appendChild(errorText);
  } else {
    if (leftSide.childElementCount == 7) {
      leftSide.removeChild(errorText);
      password.style.borderColor = "#e5e7eb";
      confirmPassword.style.borderColor = "#e5e7eb";
    }
    password.style.borderColor = "#e5e7eb";
    confirmPassword.style.borderColor = "#e5e7eb";
  }
}
