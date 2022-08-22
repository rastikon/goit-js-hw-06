const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  // const formEl = event.currentTarget.elements;

  // const mail = formEl.email.value;
  // const password = formEl.password.value;

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля мають бути заповнені.");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  form.reset();
}

// const formData = new FormData(event.currentTarget);

// formData.forEach((value, name) => {
//   console.log("onFormSubmit -> name", name);
//   console.log("onFormSubmit -> value", value);
// });
