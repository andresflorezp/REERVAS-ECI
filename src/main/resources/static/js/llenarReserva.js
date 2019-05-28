function parsear() {
    var fechaA = Cookies.get('elec-fecha')
    var cambio = fechaA.split("/")
    var cdia = cambio[0];
    var cmes = cambio[1];
    var cano = cambio[2];

    var Matriz = new Array(9);
    for (var i = 0; i < 9; i++) {
        Matriz[i] = new Array(7);
    }
    var all_reservas;
    var reservas_dates;
    var horas = ["7:00", "8:30", "10:00", "11:30", "1:00", "2:30", "4:00", "5:30", "7:0"]
    var ocupadoY = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    var ocupadoX = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    axios.get("/reservas/reserva/" + cdia + "/" + cmes + "/" + cano)
        .then(function(response) {
            var reservas_dates = response.data;

        })
        .catch(function(error) {
            alert('El usuario no existe')

        })
    var softwareA = Cookies.get("elec-software")
    tiene = [0, 0, 0, 0, 0, 0, 0]
    salas = ["redes", "plataformas", "software", "videojuegos", "multimedia", "inteligente", "fundamentos"]
    for (var k = 0; k < salas.length; k++) {
        axios.get("/software/" + salas[i])
            .then(function(response) {
                var datase = response.data;
                for (var m = 0; m < datase.length; m++) {
                    if (softwareA == datase[m]) {
                        tiene[k] = 1;
                    }

                }


            })
            .catch(function(error) {
                alert('El usuario no existe')

            })
    }

    //LLENADO TABLA









}