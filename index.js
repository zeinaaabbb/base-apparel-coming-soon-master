// console.log("hello");

const input = document.querySelector("#email");
const btn = document.querySelector(".submit-btn");
const errorText = document.querySelector(".hidden");
const confirmation = document.querySelector(".confirmation-hidden");
const emailContainer = document.querySelector(".text-container");

input.addEventListener("submit", (event) => {
  console.log(event);

});

btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("clicked")
  confirmation.classList.remove("confirmation-hidden");
  emailContainer.style.display = "none";
});
