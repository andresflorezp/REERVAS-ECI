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
    var fecha = $("#date_chooice").val()
    var chooice_software = $("#all-software").val()
    alert(fecha);
    alert(chooice_software);
    Cookies.set('elec-fecha', fecha);
    Cookies.set('elec-software', chooice_software)
    window.location.replace('crear_reserva.html')
    alert("stop")

}