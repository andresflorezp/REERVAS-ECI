function llenarSoftware() {
    axios.get("/reservas/all-software")
        .then(function(response) {
            var datas = response.data;
            for (var i = 0; i < datas.length; i++) {
                $("#all-software").append("<option>" + datas[i].nombre + "- V " + datas[i].versione + "</option>")
            }

        })
        .catch(function(error) {
            alert('El usuario no existe')

        })
}

function guardaReservas() {
    var fecha = $("#date_chooice")
    var chooice_software = $("#all-software")
    Cookies.set('elec-fecha', fecha);
    Cookies.set('elec-software', chooice_software)
    window.location.assign('crear_reserva.html')

}