window.onload = function() {
    Validate();
}

function Validate(){
    document.querySelector("button[type='submit']").onclick = function(event) {
        event.preventDefault();
        var fullname = document.getElementById("fullname_id").value;
        var email = document.getElementById("email_id").value;
        var subject = document.getElementById("subject_id").value;
        var message = document.getElementById("message_id").value;
        if (!fullname || !email || !subject || !message) {
            alert("Todos os campos devem ser preenchidos!");
            return false;
        }
        var emailFormat = /^\S+@\S+\.\S+$/;
        if (!emailFormat.test(email)) {
            alert("Formato de email inválido!");
            return false;
        }
        SendMail();
    }
}

function SendMail() {
    var params = {
        user_name : document.getElementById("fullname_id").value,
        user_email : document.getElementById("email_id").value,
        user_subject : document.getElementById("subject_id").value,
        user_message : document.getElementById("message_id").value,
    }
    emailjs.send("service_mr1qt27", "template_40dtk22", params).then(function (res){
        location.reload();
        document.getElementById("success-img").style.display = "block";
        setTimeout(hideImage, 5000);
    })
}

function hideImage() {
    document.getElementById("success-img").style.display = "none";
}
