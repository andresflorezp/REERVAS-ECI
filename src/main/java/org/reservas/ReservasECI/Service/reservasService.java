package org.reservas.ReservasECI.Service;

import java.util.ArrayList;
import java.util.List;
import org.reservas.ReservasECI.Entities.reservas;
import org.reservas.ReservasECI.Repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class reservasService {
	@Autowired
	ReservaRepository per;

	public void addReserva(reservas res) {
		per.save(res);
	}
	public List<reservas> getAllReservas() {
		List<reservas> reservase = new ArrayList<reservas>();
		Iterable<reservas> reservasa =per.findAll();
		for(reservas u:reservasa) {
			reservase.add(u);
		}
		return reservase;
	}
	public List<reservas> getReservaDiaMesAno(String dia,String mes,String ano) {
		List<reservas> reservase = new ArrayList<reservas>();
		Iterable<reservas> reservasa =per.findAll();
		for(reservas u:reservasa) {
            if(u.getDia().equals(dia) && u.getMes().equals(mes) && u.getAno().equals(ano)){
                reservase.add(u);
            }
		}
		return reservase;
	}
}
