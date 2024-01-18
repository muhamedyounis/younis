var userName = document.getElementById("name");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");
var submitBtn = document.getElementById("submit");
var contactForm = document.getElementsByTagName("form");

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
    if (message == "OK")
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
  });
}

var nameRegex = /^[a-z ,.'-]+$/i;
var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var subjectRegex = /^[a-z ,.'-]+$/i;
var messageRegex = /^[a-z ,.'-0123456789]+$/;

userName.addEventListener("keyup", () => {
  if (nameRegex.test(userName.value)) {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
  } else {
    userName.classList.remove("is-valid");
    userName.classList.add("is-invalid");
  }
});

email.addEventListener("keyup", () => {
  if (emailRegex.test(email.value)) {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
  } else {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
  }
});

subject.addEventListener("keyup", () => {
  if (subjectRegex.test(subject.value)) {
    subject.classList.remove("is-invalid");
    subject.classList.add("is-valid");
  } else {
    subject.classList.remove("is-valid");
    subject.classList.add("is-invalid");
  }
});

message.addEventListener("keyup", () => {
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
  // if () {
  //   sendEmail();
  // }
});

var serviceCta = document.querySelectorAll(".single-skill .cta");

serviceCta[0].addEventListener("click", () => {
  subject.value = "Web Development - ";
});
serviceCta[1].addEventListener("click", () => {
  subject.value = "UI UX - ";
});
serviceCta[2].addEventListener("click", () => {
  subject.value = "SEO - ";
});
