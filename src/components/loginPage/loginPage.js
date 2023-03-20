const messageLinks = document.querySelectorAll('.message a');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

messageLinks.forEach((link) => {
  link.addEventListener('click', function(event) {
    event.preventDefault();   

    if (link.textContent === "Sign In") {
      registerForm.style.display = "none";
      loginForm.style.display = "block";
    } else if (link.textContent === "Create an account") {
      loginForm.style.display = "none";
      registerForm.style.display = "block";
    }
  });
});