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
            var S = ""
                //$("#table-reserva").append("<tr><th scope='row'>7:00</th>")

            S += "<tr><th scope='row'>7:00</th>";
            for (var i1 = 0; i1 < 7; i1++) {
                console.log(Matriz[0][i1])
                if (Matriz[0][i1] == 2) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Puedes Reservar" class="btn btn-success"><i class="fa fa-check"></i></button></td>'

                } else if (Matriz[0][i1] == 1) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Alguien ya reservo" class="btn btn-danger"><i class="fa fa-close"></i></button></td>'

                } else if (Matriz[0][i1] == 0) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="No tiene el Software" class="btn btn-warning"><i class="fa fa-minus-square-o"></i></button></td>'

                }

            }
            S += "</tr>"
                //$("#table-reserva").append(S)
            S += "<tr><th scope='row'>8:30</th>";
            for (var i2 = 0; i2 < 7; i2++) {
                console.log(Matriz[1][i2])
                if (Matriz[1][i2] == 2) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Puedes Reservar" class="btn btn-success"><i class="fa fa-check"></i></button></td>'

                } else if (Matriz[1][i2] == 1) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Alguien ya reservo" class="btn btn-danger"><i class="fa fa-close"></i></button></td>'

                } else if (Matriz[1][i2] == 0) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="No tiene el Software" class="btn btn-warning"><i class="fa fa-minus-square-o"></i></button></td>'

                }

            }
            S += "</tr>"
            S += "<tr><th scope='row'>10:00</th>";
            for (var i3 = 0; i3 < 7; i3++) {
                console.log(Matriz[1][i3])
                if (Matriz[2][i3] == 2) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Puedes Reservar" class="btn btn-success"><i class="fa fa-check"></i></button></td>'

                } else if (Matriz[2][i3] == 1) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Alguien ya reservo" class="btn btn-danger"><i class="fa fa-close"></i></button></td>'

                } else if (Matriz[2][i3] == 0) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="No tiene el Software" class="btn btn-warning"><i class="fa fa-minus-square-o"></i></button></td>'

                }

            }
            S += "</tr>"
            S += "<tr><th scope='row'>11:30</th>";
            for (var i4 = 0; i4 < 7; i4++) {
                console.log(Matriz[1][i4])
                if (Matriz[3][i4] == 2) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Puedes Reservar" class="btn btn-success"><i class="fa fa-check"></i></button></td>'

                } else if (Matriz[3][i4] == 1) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Alguien ya reservo" class="btn btn-danger"><i class="fa fa-close"></i></button></td>'

                } else if (Matriz[3][i4] == 0) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="No tiene el Software" class="btn btn-warning"><i class="fa fa-minus-square-o"></i></button></td>'

                }

            }
            S += "</tr>"
            S += "<tr><th scope='row'>1:00</th>";
            for (var i5 = 0; i5 < 7; i5++) {
                console.log(Matriz[1][i4])
                if (Matriz[4][i5] == 2) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Puedes Reservar" class="btn btn-success"><i class="fa fa-check"></i></button></td>'

                } else if (Matriz[4][i5] == 1) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Alguien ya reservo" class="btn btn-danger"><i class="fa fa-close"></i></button></td>'

                } else if (Matriz[4][i5] == 0) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="No tiene el Software" class="btn btn-warning"><i class="fa fa-minus-square-o"></i></button></td>'

                }

            }
            S += "</tr>"
            S += "<tr><th scope='row'>2:30</th>";
            for (var i6 = 0; i6 < 7; i6++) {
                console.log(Matriz[1][i5])
                if (Matriz[5][i6] == 2) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Puedes Reservar" class="btn btn-success"><i class="fa fa-check"></i></button></td>'

                } else if (Matriz[5][i6] == 1) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Alguien ya reservo" class="btn btn-danger"><i class="fa fa-close"></i></button></td>'

                } else if (Matriz[5][i6] == 0) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="No tiene el Software" class="btn btn-warning"><i class="fa fa-minus-square-o"></i></button></td>'

                }

            }
            S += "</tr>"
            S += "<tr><th scope='row'>4:00</th>";
            for (var i7 = 0; i7 < 7; i7++) {
                console.log(Matriz[1][i7])
                if (Matriz[6][i7] == 2) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Puedes Reservar" class="btn btn-success"><i class="fa fa-check"></i></button></td>'

                } else if (Matriz[6][i7] == 1) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Alguien ya reservo" class="btn btn-danger"><i class="fa fa-close"></i></button></td>'

                } else if (Matriz[6][i7] == 0) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="No tiene el Software" class="btn btn-warning"><i class="fa fa-minus-square-o"></i></button></td>'

                }

            }
            S += "</tr>"
            S += "<tr><th scope='row'>5:30</th>";
            for (var i8 = 0; i8 < 7; i8++) {
                console.log(Matriz[1][i8])
                if (Matriz[7][i8] == 2) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Puedes Reservar" class="btn btn-success"><i class="fa fa-check"></i></button></td>'

                } else if (Matriz[7][i8] == 1) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Alguien ya reservo" class="btn btn-danger"><i class="fa fa-close"></i></button></td>'

                } else if (Matriz[7][i8] == 0) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="No tiene el Software" class="btn btn-warning"><i class="fa fa-minus-square-o"></i></button></td>'

                }

            }
            S += "</tr>"
            S += "<tr><th scope='row'>7:0</th>";
            for (var i9 = 0; i9 < 7; i9++) {
                console.log(Matriz[1][i9])
                if (Matriz[8][i9] == 2) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Puedes Reservar" class="btn btn-success"><i class="fa fa-check"></i></button></td>'

                } else if (Matriz[8][i9] == 1) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="Alguien ya reservo" class="btn btn-danger"><i class="fa fa-close"></i></button></td>'

                } else if (Matriz[8][i9] == 0) {
                    S += '<td><button style="margin-left: 35px;" data-toggle="modal" data-target="#exampleModal" type="button" title="No tiene el Software" class="btn btn-warning"><i class="fa fa-minus-square-o"></i></button></td>'

                }

            }
            S += "</tr>"
            $("#table-reserva").append(S)



        })
        .catch(function(error) {
            alert('El usuario no existe')

        })


    //LLENADO TABLA

    //Llenado de lo tiene alguien por y






}