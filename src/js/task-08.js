const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log("Це сабміт форми");

  const formEl = event.currentTarget.elements;
  console.dir(formEl);

  const mail = formEl.email.value;
  const password = formEl.password.value;

  if (mail === "" || password === "") {
    alert("Всі поля мають бути заповнені.");
  }

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log("onFormSubmit -> name", name);
    console.log("onFormSubmit -> value", value);
  });

  form.reset();
}
