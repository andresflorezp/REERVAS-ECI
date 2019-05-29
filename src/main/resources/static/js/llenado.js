function tablaReservaQuien() {

    axios.get("reservas/reserva/quien/" + Cookies.get('user-cur'))
        .then(function(response) {
            let reservas_dates = response.data;



            for (var l = 0; l < reservas_dates.length; l++) {
                $("#mis_reservas").append('<tr>' +
                    '<td>' + reservas_dates[l].mes + '</td>' +
                    '<td>' + reservas_dates[l].dia + '</td>' +
                    '<td>' + reservas_dates[l].ano + '</td>' +
                    '<td>' + reservas_dates[l].hora + '</td>' +
                    '<td>' + reservas_dates[l].sala + '</td>' +
                    '<td>' + reservas_dates[l].software + '</td>' +
                    '</tr>')

            }



        })
        .catch(function(error) {

            console.log('no hay reserva asociadas')

        })



}

function reservasTodos() {
    axios.get("reservas/all-reservas")
        .then(function(response) {
            let reservas_dates = response.data;

            for (var l = 0; l < reservas_dates.length; l++) {
                $("#todas_reservas").append('<tr>' +
                    '<td>' + reservas_dates[l].mes + '</td>' +
                    '<td>' + reservas_dates[l].dia + '</td>' +
                    '<td>' + reservas_dates[l].ano + '</td>' +
                    '<td>' + reservas_dates[l].hora + '</td>' +
                    '<td>' + reservas_dates[l].quien + '</td>' +
                    '<td>' + reservas_dates[l].sala + '</td>' +
                    '<td>' + reservas_dates[l].software + '</td>' +
                    '</tr>')

            }



        })
        .catch(function(error) {

            console.log('no hay reserva asociadas')

        })




}