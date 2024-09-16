const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const signInForm = document.getElementById("signInForm");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("signInEmail").value;
  const password = document.getElementById("signInPassword").value;

  if (email === "shashankmalik23156@gmail.com" && password === "1234") {
    window.location.href = "Home2.html";
  } else {
    alert("Invalid credentials");
  }
});
