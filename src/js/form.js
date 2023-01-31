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
        Success()
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
        Success();
    })
}

function Success() {
    Swal.fire({
        icon: 'success',
        title: "<h5 style='color:#fff'>Mensagem Enviada com Sucesso!</h5>",
        text: 'Obrigado pelo seu contacto, informamos que a sua mensagem foi entregue com sucesso, irá receber um e-mail de resposta da nossa equipa!',
        type: 'success',
        confirmButtonColor : 'rgb(0, 136, 255)',
        confirmButtonText : 'Ok',
        color: '#fff',
        background: '#161b22'
    }).then((result) => {
        // Reload the Page
        location.reload();
      });
      
}