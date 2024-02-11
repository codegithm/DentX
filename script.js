$(document).ready(function () {
  $("form[name='call-back']").submit(function (e) {
    e.preventDefault();
    var formsubmit = document.getElementById("call-us-form");
    var formData = new FormData(formsubmit);
    formData.append("service_id", "service_laeyc94");
    formData.append("template_id", "template_lh2orkr");
    formData.append("user_id", "URj1ren_ccMcAJvfT");

    $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
      type: "POST",
      data: formData,
      contentType: false, // auto-detection
      processData: false, // no need to parse formData to string
    })
      .done(function () {
        alert("Your mail is sent!");
      })
      .fail(function (error) {
        alert("Oops... " + JSON.stringify(error));
      });
  });
});
