jQuery(document).ready(function ($) {
    var time = 380;
    setTimeout(function () {
        var btn = $("form#contactForm button.submit");
        btn.on("click", function (e) {
            e.preventDefault()
            var name = $("form#contactForm input#contactName").val();
            var email = $("form#contactForm input#contactEmail").val();
            var subjet = $("form#contactForm input#contactSubject").val();
            var message = $("form#contactForm textarea#contactMessage").val();
            var body = 'Client name: ' + name + '<br/> Client email: ' + email + '<br/> Enquiry subject: ' + subjet + '<br/> Enquiry message: ' + message;
            console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< hi" + body);
            // Visit https://smtpjs.com/
            Email.Send({
                Host: "smtp.elasticemail.com",
                Username: "yazanbn99@gmail.com",
                Password: "9A7EEB983B53710404478F4B0803E71D21BA",
                To: "yazannajem@icloud.com",
                From: "yazanbn99@gmail.com",
                Subject: "Enquiry",
                Body: body
            }).then(
                $("form#contactForm input#contactName").val(''),
                $("form#contactForm input#contactEmail").val(''),
                $("form#contactForm input#contactSubject").val(''),
                $("form#contactForm textarea#contactMessage").val(''),
                // message => alert(message)
            );
            return true;
        });
    }, time);
});