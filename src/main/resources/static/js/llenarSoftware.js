/*function actulizarCookie2(sala) {

    Cookies.set('sala-actual', sala);
}*/


function deleteSoftware(comp) {
    var ident = comp.id;
    alert(ident)
    axios.delete("/reservas/delete-software/" + ident)
        .then(function(response) {
            $("#" + ident + "r").empty()
            $("#" + ident + "r").remove()
            alert("Se logro borrar el software")
        })
        .catch(function(error) {
            console.log(error + "no se pudo borrar software")

        })

}

function loadSala(sala) {
    axios.get("/reservas/software/" + sala)
        .then(function(response) {
            var software = response.data;
            console.log(software)
            for (var i = 0; i < software.length; i++) {
                $("#contenido").append('<div id="' + software[i].id + 'r" class="card "><div class="card-body ">' +
                    '<h3 class="card-title ">' + software[i].nombre + '</h3>' +
                    '<h6 class="card-subtitle mb-2 text-muted ">' + software[i].versione + '</h6>' +
                    '<p class="card-text ">' + software[i].descripcion + '</p>' +
                    '<input id="' + software[i].id + '"class="btn btn-danger" onclick="deleteSoftware(this);return false" type="button" value="Eliminar">' +
                    '</div>' +
                    '</div>' +
                    '<br><br>')
            }


        })
        .catch(function(error) {
            console.log("no se pudo traer la sala")

        })
}



function actulizarCookie(sala) {
    alert()
    Cookies.set('sala-actual', sala);
    window.location.assign('anadirSoftware.html')

}


function anadirSoftware() {
    var nombreS = $("#name-c-software").val();
    var versionS = $("#version-c-software").val();
    var descripcionS = $("#descripcion-c-software").val();
    var salaS = Cookies.get('sala-actual');
    axios.post('reservas/add-software', {
            nombre: nombreS,
            versione: versionS,
            descripcion: descripcionS,
            sala: salaS
        })
        .then(function(response) {
            alert("Se adiciono el software")
            window.location.assign(salaS + '.html')
        })
        .catch(function(error) {

            console.log(error + ' No se logro adicionar el software')
        })


}