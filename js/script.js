var userName = document.getElementById("name");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");
var submitBtn = document.getElementById("submit");
var contactForm = document.getElementsByTagName("form");

function clearInputs() {
  userName.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
  userName.classList.remove("is-valid");
  email.classList.remove("is-valid");
  subject.classList.remove("is-valid");
  message.classList.remove("is-valid");
}

function successAlert() {
  Swal.fire({
    title: "Good job!",
    text: "Email sent successfully",
    icon: "success",
  });
}
function failedAlert() {
  Swal.fire({
    title: "Message not sent",
    text: "You have to enter proper data to send the mail",
    icon: "error",
  });
}

function sendEmail() {
  const messageBody = ` Name: ${userName.value} <br/> Email: ${email.value} <br/> Subject: ${subject.value} <br/> Message: ${message.value} `;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "younis.webdev@gmail.com",
    Password: "9B8C95A76D74BC0998CBCF1D5E6BD9C83BD7",
    To: "younis.webdev@gmail.com",
    From: "younis.webdev@gmail.com",
    Subject: subject.value,
    Body: messageBody,
  }).then((message) => {
    console.log(message);
    if (message == "OK") {
      successAlert();
      clearInputs();
    }
  });
}

var nameRegex = /^[a-z ,.'-]+$/i;
var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var subjectRegex = /^[a-z ,.'-]+$/i;
var messageRegex = /^[A-Z a-z ,.'-0123456789]+$/;

userName.addEventListener("change", () => {
  if (nameRegex.test(userName.value)) {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
  } else {
    userName.classList.remove("is-valid");
    userName.classList.add("is-invalid");
  }
});

email.addEventListener("change", () => {
  if (emailRegex.test(email.value)) {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  } else {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
  }
});

subject.addEventListener("change", () => {
  if (subjectRegex.test(subject.value)) {
    subject.classList.remove("is-invalid");
    subject.classList.add("is-valid");
  } else {
    subject.classList.remove("is-valid");
    subject.classList.add("is-invalid");
  }
});

message.addEventListener("change", () => {
  if (messageRegex.test(message.value)) {
    message.classList.remove("is-invalid");
    message.classList.add("is-valid");
  } else {
    message.classList.remove("is-valid");
    message.classList.add("is-invalid");
  }
});

contactForm[0].addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    userName.classList.contains("is-valid") &&
    email.classList.contains("is-valid") &&
    subject.classList.contains("is-valid") &&
    message.classList.contains("is-valid")
  ) {
    sendEmail();
  } else {
    failedAlert();
  }
});

var serviceCta = document.querySelectorAll(".single-skill .cta");

serviceCta[0].addEventListener("click", () => {
  subject.value = "Web Development - ...";
  if (subject.classList.contains("is-valid")) {
  } else {
    subject.classList.add("is-valid");
  }
});
serviceCta[1].addEventListener("click", () => {
  subject.value = "UI UX - ...";
  if (subject.classList.contains("is-valid")) {
  } else {
    subject.classList.add("is-valid");
  }
});
serviceCta[2].addEventListener("click", () => {
  subject.value = "SEO - ...";
  if (subject.classList.contains("is-valid")) {
  } else {
    subject.classList.add("is-valid");
  }
});
