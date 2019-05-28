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
    for (i = 0; i < 9; i++) {
        for (var f = 0; f < 7; f++) {
            Matriz[i][f] = 2;
        }
    }
    console.log(Matriz)
    var all_reservas;


    axios.get("/reservas/reserva/" + cdia + "/" + cmes + "/" + cano)
        .then(function(response) {
            let reservas_dates = response.data;

            salto(reservas_dates, Matriz)

        })
        .catch(function(error) {
            alert('El usuario no existe')

        })




}

function salto(reservas_dates, Matriz) {
    console.log(reservas_dates)
    var softwareAC = Cookies.get("elec-software")
    var softwareAB = softwareAC.split("-")
    var softwareA = softwareAB[0];
    console.log(softwareA)
    var tiene = [0, 0, 0, 0, 0, 0, 0]
    var salas = ["redes", "plataformas", "software", "videojuegos", "multimedia", "inteligente", "fundamentos"]
    var horas = ["7:00", "8:30", "10:00", "11:30", "1:00", "2:30", "4:00", "5:30", "7:0"]

    axios.get("reservas/all-software")

    .then(function(response) {
            var datase = response.data;
            console.log(datase)
            for (var m = 0; m < datase.length; m++) {
                if (softwareA == datase[m].nombre) {
                    if (datase[m].sala == 'redes') {
                        tiene[0] = 1;

                    }
                    if (datase[m].sala == 'plataformas') {
                        tiene[1] = 1;

                    }
                    if (datase[m].sala == 'software') {
                        tiene[2] = 1;

                    }
                    if (datase[m].sala == 'videojuegos') {
                        tiene[3] = 1;

                    }
                    if (datase[m].sala == 'multimedia') {
                        tiene[4] = 1;

                    }
                    if (datase[m].sala == 'inteligente') {
                        tiene[5] = 1;

                    }
                    if (datase[m].sala == 'fundamentos') {
                        tiene[6] = 1;

                    }




                }

            }
            console.log(tiene)
            console.log(reservas_dates)
            for (var g = 0; g < reservas_dates.length; g++) {

                for (var t = 0; t < 9; t++) {

                    for (var y = 0; y < 7; y++) {
                        console.log(horas[t])

                        console.log(salas[y])

                        if (horas[t] == reservas_dates[g].hora && salas[y] == reservas_dates[g].sala) {
                            console.log("PASO-----------------")
                            Matriz[t][y] = 1;

                        }






                    }
                }


            }
            console.log(Matriz)
            for (var n = 0; n < 7; n++) {
                if (tiene[n] == 0) {
                    for (var j = 0; j < 9; j++) {
                        if (Matriz[j][n] == 2) {
                            Matriz[j][n] = 0
                        }

                    }

                }
            }
            console.log("Matriz")
            console.log(Matriz)
        })
        .catch(function(error) {
            alert('El usuario no existe')

        })


    //LLENADO TABLA

    //Llenado de lo tiene alguien por y





}