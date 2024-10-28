function emailSend() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "vaw.site.2024@gmail.com",
    Password: "FF4CAF6DBB9BE7EEF1E878C31DC0B03DB073",
    To: "vaw.site.2024@gmail.com",
    From: "vaw.site.2024@gmail.com",
    Subject: "VAW Contact Form Submission",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
