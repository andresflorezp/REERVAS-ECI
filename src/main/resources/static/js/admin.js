function createUser() {

    var nameuser = $('#name-c-user').val()
    var lastnameuser = $('#lastname-c-user').val()
    var emailuser = $('#email-c-user').val()
    var roluser = $('#role-c-user').val()
    var passuser = $("#password-c-user").val()
    axios.post('reservas/archivo', {
            nombre: nameuser,
            apellido: lastnameuser,
            contrasena: passuser,
            correo: emailuser,
            rol: roluser
        })
        .then(function(response) {
            alert("Se adiciono el usuario")
        })
        .catch(function(error) {

            console.log(error + ' No se logro hacer post')
        })
}