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