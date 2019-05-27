/*function actulizarCookie2(sala) {

    Cookies.set('sala-actual', sala);
}*/

function loadSala(sala) {
    axios.get("/reservas/software/" + sala)
        .then(function(response) {
            var software = response.data;
            console.log(software)
            for (var i = 0; i < software.length; i++) {
                $("#contenido").append('"<div id="' + software[i].id + '" class="card "><div class="card-body ">' +
                    '<h3 class="card-title ">' + software[i].nombre + '</h3>' +
                    '<h6 class="card-subtitle mb-2 text-muted ">' + software[i].versione + '</h6>' +
                    '<p class="card-text ">' + software[i].descripcion + '</p>' +
                    '<input class="btn btn-danger " action="deleteSoftware(this)" type="submit " value="Eliminar ">' +
                    '<input class="btn btn-warning " action="actulizarSoftware(this)" type="submit " value="Actualizar ">' +
                    '</div>' +
                    '</div>' +
                    '<br><br>')
            }


        })
        .catch(function(error) {
            console.log("no se pudo traer la sala")

        })
}

/*

function actulizarCookie(sala) {

    Cookies.set('sala-actual', sala);
    window.location.assign(sala + '.html')

}
*/
/*
function anadirSoftware() {
    var nombreS = $("#nombreSoftware").val();
    var versionS = $("#versionSoftware").val();
    var descripcionS = $("#descripcionSoftware").val();
    var salaS = Cookies.get('sala-actual');
    axios.post('reservas/add-software', {
            nombre: nombreS,
            version: versionS,
            descripcion: descripcionS,
            sala: salaS
        })
        .then(function(response) {
            alert("Se adiciono el software")
        })
        .catch(function(error) {
            alert
            console.log(error + ' No se logro adicionar el software')
        })




}

function deleteSoftware(this) {
    var ident = this.id;
    axios.delete("/reservas/delete-software/" + ident)
        .then(function(response) {
            $("#" + ident).empty()
            $("#" + ident).remove()
            console.log("Se logro borrar el software")
        })
        .catch(function(error) {
            console.log("no se pudo borrar software")

        })

}*/