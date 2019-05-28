function veriLog() {
    var correo_user = $("#email-in").val()
    var password_user = $("#pass-in").val()

    axios.get("/reservas/userByCorreo/" + correo_user)
        .then(function(response) {
            var userL = response.data
            if (userL.contrasena === password_user) {
                if (userL.rol == 'admin') {
                    Cookies.set('user-cur',correo_user)
                    window.location.assign('home_admin.html')
                } else {
                    Cookies.set('user-cur',correo_user)
                    window.location.assign('home_profesor.html')
                }
            }
        })
        .catch(function(error) {
            alert('El usuario no existe')

        })
}