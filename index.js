const form = document.querySelector(".form");
const input = document.querySelector("#email");
const btn = document.querySelector(".submit-btn");
const errorText = document.querySelector(".hidden");
const confirmation = document.querySelector(".confirmation-hidden");
const emailContainer = document.querySelector(".text-container");
const emailConfirmed = document.querySelector("span");

function valid(email) {
  const pattern = /^[^@\s]+@[^@\s]+$/;
  return pattern.test(email);
} ;


form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("submit")
  // console.log(input.value);
  if (!valid(input.value)) {
    errorText.classList.remove("hidden");
  } else {
  confirmation.classList.remove("confirmation-hidden");
  emailContainer.style.display = "none";
  emailConfirmed.innerText =input.value ;
  }
  end
});









//   emailContainer.style.display = "none";
  // console.log(event);
  // console.log(event.innerText);

  // console.log("enter");
  // if (input.value === (valid))
  //   errorText.classList.remove("hidden");
  // end
  // errorText.classList.remove("hidden");
// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("clicked")
//   confirmation.classList.remove("confirmation-hidden");
//   emailContainer.style.display = "none";
// });
