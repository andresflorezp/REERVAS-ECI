function veriLog() {
    var correo_user = $("#email-in").val()
    var password_user = $("#pass-in").val()
    
    axios.get("/reservas/userByCorreo/"+correo_user)
        .then(function(response) {
		var userL=response.data
		if(userL.contrasena===password_user){
			if(userL.rol=='admin'){
				window.location.assign('crear_usuario.html')			
			}
			else{
				window.location.assign('home.html')			
			}

		}
           
        })
        .catch(function(error) {
		alert('El usuario no existe')

        })
}
