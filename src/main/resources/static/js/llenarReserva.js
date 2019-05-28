//FALTA OBTENER SALA
// FALTA OBTENER LA HORA



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
        .then(function (response) {
            let reservas_dates = response.data;

            salto(reservas_dates, Matriz)

        })
        .catch(function (error) {
            salto([], Matriz)
            console.log('no hay reserva asociadas')

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

        .then(function (response) {
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

                        if (horas[t] == reservas_dates[g].hora && salas[y] == reservas_dates[g].sala && Cookies.get('user-cur')==reservas_dates[g].quien) {
                            console.log("PASO-----------------")
                            Matriz[t][y] = 4;

                        }
                        else if (horas[t] == reservas_dates[g].hora && salas[y] == reservas_dates[g].sala && Cookies.get('user-cur')!=reservas_dates[g].quien) {
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
                    S += '<td><input id="1-table" type="button" hora="7:00" sala="' + salas[i1] + '" style="margin-left: 35px;" value="&#x2714" onclick="javascript:generar_reserva(this)"   title="Puedes Reservar" class="btn btn-success"></td>'

                } else if (Matriz[0][i1] == 1) {
                    S += '<td><input id="2-table" type="button" hora="7:00" sala="' + salas[i1] + '" style="margin-left: 35px;"     title="Alguien ya reservo" value="&#x2718" class="btn btn-danger"></td>'

                } else if (Matriz[0][i1] == 0) {
                    S += '<td><input id="3-table" type="button" hora="7:00" sala="' + salas[i1] + '" style="margin-left: 35px;"  value="&#x2706"  title="No tiene el Software" class="btn btn-warning"></td>'

                }
                else if (Matriz[0][i1] == 4) {
                    S += '<td><input id="33-table" type="button" hora="7:00" sala="' + salas[i1] + '" style="margin-left: 35px;"  value="&#x2718"  title="Cancelar Reserva" class="btn btn-primary"></td>'

                }


            }
            S += "</tr>"
            //$("#table-reserva").append(S)
            S += "<tr><th scope='row'>8:30</th>";
            for (var i2 = 0; i2 < 7; i2++) {
                console.log(Matriz[1][i2])
                if (Matriz[1][i2] == 2) {
                    S += '<td><input id="4-table" type="button" hora="8:30"  sala="' + salas[i2] + '" style="margin-left: 35px;" onclick="javascript:generar_reserva(this)"    title="Puedes Reservar" value="&#x2714" class="btn btn-success"></td>'

                } else if (Matriz[1][i2] == 1) {
                    S += '<td><input id="5-table" type="button" hora="8:30"  sala="' + salas[i2] + '" style="margin-left: 35px;"     title="Alguien ya reservo" value="&#x2718" class="btn btn-danger"></td>'

                } else if (Matriz[1][i2] == 0) {
                    S += '<td><input id="6-table" type="button" hora="8:30" sala="' + salas[i2] + '"  style="margin-left: 35px;"   value="&#x2706"  title="No tiene el Software" class="btn btn-warning"></td>'

                }
                else if (Matriz[1][i2] == 4) {
                    S += '<td><input id="66-table" type="button" hora="8:30" sala="' + salas[i2] + '" style="margin-left: 35px;"  value="&#x2718"  title="Cancelar Reserva" class="btn btn-primary"></td>'

                }

            }
            S += "</tr>"
            S += "<tr><th scope='row'>10:00</th>";
            for (var i3 = 0; i3 < 7; i3++) {
                console.log(Matriz[1][i3])
                if (Matriz[2][i3] == 2) {
                    S += '<td><input id="7-table" type="button" hora="10:00"  sala="' + salas[i3] + '" style="margin-left: 35px;" onclick="javascript:generar_reserva(this)"   title="Puedes Reservar" value="&#x2714" class="btn btn-success"></td>'

                } else if (Matriz[2][i3] == 1) {
                    S += '<td><input id="8-table" type="button" hora="10:00"  sala="' + salas[i3] + '" style="margin-left: 35px;"    title="Alguien ya reservo" value="&#x2718" class="btn btn-danger"></td>'

                } else if (Matriz[2][i3] == 0) {
                    S += '<td><input id="9-table" type="button" hora="10:00"  sala="' + salas[i3] + '" style="margin-left: 35px;"  value="&#x2706"  title="No tiene el Software" class="btn btn-warning"></td>'

                }
                else if (Matriz[2][i3] == 4) {
                    S += '<td><input id="99-table" type="button" hora="10:00" sala="' + salas[i3] + '" style="margin-left: 35px;"  value="&#x2718"  title="Cancelar Reserva" class="btn btn-primary"></td>'

                }

            }
            S += "</tr>"
            S += "<tr><th scope='row'>11:30</th>";
            for (var i4 = 0; i4 < 7; i4++) {
                console.log(Matriz[1][i4])
                if (Matriz[3][i4] == 2) {
                    S += '<td><input id="10-table" type="button" hora="11:30" sala="' + salas[i4] + '" style="margin-left: 35px;" onclick="javascript:generar_reserva(this)"   title="Puedes Reservar" value="&#x2714" class="btn btn-success"></td>'

                } else if (Matriz[3][i4] == 1) {
                    S += '<td><input id="11-table" type="button" hora="11:30" sala="' + salas[i4] + '" style="margin-left: 35px;"    title="Alguien ya reservo" value="&#x2718" class="btn btn-danger"></td>'

                } else if (Matriz[3][i4] == 0) {
                    S += '<td><input id="12-table" type="button" hora="11:30" sala="' + salas[i4] + '" style="margin-left: 35px;"  value="&#x2706"  title="No tiene el Software" class="btn btn-warning"></td>'

                }
                else if (Matriz[3][i4] == 4) {
                    S += '<td><input id="1212-table" type="button" hora="11:30" sala="' + salas[i4] + '" style="margin-left: 35px;"  value="&#x2718"  title="Cancelar Reserva" class="btn btn-primary"></td>'

                }

            }
            S += "</tr>"
            S += "<tr><th scope='row'>1:00</th>";
            for (var i5 = 0; i5 < 7; i5++) {
                console.log(Matriz[1][i4])
                if (Matriz[4][i5] == 2) {
                    S += '<td><input id="13-table" type="button" hora="1:00" sala="' + salas[i5] + '" style="margin-left: 35px;" onclick="javascript:generar_reserva(this)"   title="Puedes Reservar" value="&#x2714" class="btn btn-success"></td>'

                } else if (Matriz[4][i5] == 1) {
                    S += '<td><input id="14-table" type="button" hora="1:00" sala="' + salas[i5] + '" style="margin-left: 35px;"    title="Alguien ya reservo" value="&#x2718" class="btn btn-danger"></td>'

                } else if (Matriz[4][i5] == 0) {
                    S += '<td><input id="15-table" type="button" hora="1:00" sala="' + salas[i5] + '" style="margin-left: 35px;"  value="&#x2706"  title="No tiene el Software" class="btn btn-warning"></td>'

                }
                else if (Matriz[4][i5] == 4) {
                    S += '<td><input id="1515-table" type="button" hora="1:00" sala="' + salas[i5] + '" style="margin-left: 35px;"  value="&#x2718"  title="Cancelar Reserva" class="btn btn-primary"></td>'

                }

            }
            S += "</tr>"
            S += "<tr><th scope='row'>2:30</th>";
            for (var i6 = 0; i6 < 7; i6++) {
                console.log(Matriz[1][i5])
                if (Matriz[5][i6] == 2) {
                    S += '<td><input id="16-table" type="button" hora="2:30" sala="' + salas[i6] + '" style="margin-left: 35px;" onclick="javascript:generar_reserva(this)"   title="Puedes Reservar" value="&#x2714" class="btn btn-success"></td>'

                } else if (Matriz[5][i6] == 1) {
                    S += '<td><input id="17-table" type="button" hora="2:30" sala="' + salas[i6] + '" style="margin-left: 35px;"    title="Alguien ya reservo" value="&#x2718" class="btn btn-danger"></td>'

                } else if (Matriz[5][i6] == 0) {
                    S += '<td><input id="18-table" type="button" hora="2:30" sala="' + salas[i6] + '" style="margin-left: 35px;"  value="&#x2706"  title="No tiene el Software" class="btn btn-warning"></td>'

                }
                else if (Matriz[5][i6] == 4) {
                    S += '<td><input id="1818-table" type="button" hora="2:30" sala="' + salas[i6] + '" style="margin-left: 35px;"  value="&#x2718"  title="Cancelar Reserva" class="btn btn-primary"></td>'

                }

            }
            S += "</tr>"
            S += "<tr><th scope='row'>4:00</th>";
            for (var i7 = 0; i7 < 7; i7++) {
                console.log(Matriz[1][i7])
                if (Matriz[6][i7] == 2) {
                    S += '<td><input id="19-table" type="button" hora="4:00" sala="' + salas[i7] + '" style="margin-left: 35px;" onclick="javascript:generar_reserva(this)"   title="Puedes Reservar" value="&#x2714" class="btn btn-success"></td>'

                } else if (Matriz[6][i7] == 1) {
                    S += '<td><input id="20-table" type="button" hora="4:00" sala="' + salas[i7] + '" style="margin-left: 35px;"    title="Alguien ya reservo" value="&#x2718" class="btn btn-danger"></td>'

                } else if (Matriz[6][i7] == 0) {
                    S += '<td><input id="21-table" type="button" hora="4:00" sala="' + salas[i7] + '" style="margin-left: 35px;" value="&#x2706"  title="No tiene el Software" class="btn btn-warning"></td>'

                }
                else if (Matriz[6][i7] == 4) {
                    S += '<td><input id="2121-table" type="button" hora="4:00" sala="' + salas[i7] + '" style="margin-left: 35px;"  value="&#x2718"  title="Cancelar Reserva" class="btn btn-primary"></td>'

                }

            }
            S += "</tr>"
            S += "<tr><th scope='row'>5:30</th>";
            for (var i8 = 0; i8 < 7; i8++) {
                console.log(Matriz[1][i8])
                if (Matriz[7][i8] == 2) {
                    S += '<td><input id="22-table" type="button" hora="5:30" sala="' + salas[i8] + '" style="margin-left: 35px;" onclick="javascript:generar_reserva(this)"    title="Puedes Reservar" value="&#x2714" class="btn btn-success"></td>'

                } else if (Matriz[7][i8] == 1) {
                    S += '<td><input id="23-table" type="button" hora="5:30" sala="' + salas[i8] + '" style="margin-left: 35px;"     title="Alguien ya reservo" value="&#x2718" class="btn btn-danger"></td>'

                } else if (Matriz[7][i8] == 0) {
                    S += '<td><input id="24-table" type="button" hora="5:30" sala="' + salas[i8] + '" style="margin-left: 35px;"   value="&#x2706"  title="No tiene el Software" class="btn btn-warning"></td>'

                }
                else if (Matriz[7][i8] == 4) {
                    S += '<td><input id="2424-table" type="button" hora="5:30" sala="' + salas[i8] + '" style="margin-left: 35px;"   value="&#x2718"  title="Cancelar Reserva" class="btn btn-primary"></td>'

                }

            }
            S += "</tr>"
            S += "<tr><th scope='row'>7:0</th>";
            for (var i9 = 0; i9 < 7; i9++) {
                console.log(Matriz[1][i9])
                if (Matriz[8][i9] == 2) {
                    S += '<td><input id="25-table" type="button" hora="7:0"  sala="' + salas[i9] + '" style="margin-left: 35px;" onclick="javascript:generar_reserva(this)"   title="Puedes Reservar" value="&#x2714" class="btn btn-success"></td>'

                } else if (Matriz[8][i9] == 1) {
                    S += '<td><input id="26-table" type="button" hora="7:0" sala="' + salas[i9] + '" style="margin-left: 35px;"    title="Alguien ya reservo" value="&#x2718" class="btn btn-danger"></td>'

                } else if (Matriz[8][i9] == 0) {
                    S += '<td><input id="27-table" type="button" hora="7:0" sala="' + salas[i9] + '" style="margin-left: 35px;"  value="&#x2706"  title="No tiene el Software" class="btn btn-warning"></td>'
                }
                else if (Matriz[8][i9] == 4) {
                    S += '<td><input id="2727-table" type="button" hora="7:0" sala="' + salas[i9] + '" style="margin-left: 35px;"   value="&#x2718"  title="Cancelar Reserva" class="btn btn-primary"></td>'

                }

            }
            S += "</tr>"
            $("#table-reserva").append(S)



        })
        .catch(function (error) {
            alert('El usuario no existe')

        })


    //LLENADO TABLA

    //Llenado de lo tiene alguien por y






}

function generar_reserva(comp) {
    DATE = Cookies.get('elec-fecha').split("/")
    dia_s = DATE[0]
    mes_s = DATE[1]
    ano_s = DATE[2]
    hora_s = $("#" + comp.id).attr("hora");
    quien_s = Cookies.get('user-cur')
    software_s = Cookies.get('elec-software')
    sala_s = $("#" + comp.id).attr("sala");

    alert(dia_s)
    alert(mes_s)
    alert(ano_s)
    alert(hora_s)
    alert(quien_s)
    alert(software_s)
    alert(sala_s)

    axios.post('reservas/add-reserva', {
        dia: dia_s,
        mes: mes_s,
        ano: ano_s,
        hora: hora_s,
        software: software_s,
        quien: quien_s,
        sala: sala_s,
    })
        .then(function (response) {
            alert("Se realizo la reserva")
            location.reload()
        })
        .catch(function (error) {
            console.log(error + ' No se logro hacer post')
        })




}