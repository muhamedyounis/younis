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

contactForm[0].addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
