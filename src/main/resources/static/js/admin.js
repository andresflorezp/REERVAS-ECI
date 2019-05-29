function createUser() {

    var nameuser = $('#name-c-user').val()
    var lastnameuser = $('#lastname-c-user').val()
    var emailuser = $('#email-c-user').val()
    var roluser = $('#role-c-user').val()
    var passuser = $("#password-c-user").val()
    axios.post('reservas/usuario', {
            nombre: nameuser,
            apellido: lastnameuser,
            contrasena: passuser,
            correo: emailuser,
            rol: roluser
        })
        .then(function(response) {
            alert("Se creo el usuario")
            window.location.assign('home_admin.html')
        })
        .catch(function(error) {

            console.log(error + ' No se logro adiciona')
        })
}