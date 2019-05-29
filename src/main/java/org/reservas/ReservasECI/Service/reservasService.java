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
	public List<reservas> getReservaQuien(String quien){
		List<reservas> reservase = new ArrayList<reservas>();
		Iterable<reservas> reservasa =per.findAll();
		for(reservas u:reservasa) {
            if(u.getQuien().equals(quien) ){
                reservase.add(u);
            }
		}
		return reservase;

	}

	public void deleteReserva(String dia,String mes,String ano,String hora,String software,String quien,String sala){
		Iterable<reservas> reservasa =per.findAll();
		for(reservas u:reservasa) {
			System.out.println(u.getDia().equals(dia)+"="+dia + "||"+u.getDia());
			System.out.println(u.getMes().equals(mes)+"="+mes + "||"+u.getMes());
			System.out.println(u.getAno().equals(ano)+"="+ano + "||"+u.getAno());
			System.out.println(u.getHora().equals(hora)+"="+hora + "||"+u.getHora());
			System.out.println(u.getQuien().equals(quien)+"="+quien + "||"+u.getQuien());
			System.out.println(u.getSala().equals(sala)+"="+sala + "||"+u.getSala());
			System.out.println(u.getSoftware().equals(software)+"="+software + "||"+u.getSoftware());
			System.out.println();
			System.out.println();
            if(u.getDia().equals(dia) && u.getMes().equals(mes) && u.getAno().equals(ano) && u.getHora().equals(hora) && u.getSoftware().equals(software) && u.getQuien().equals(quien) && u.getSala().equals(sala)){
				System.out.println(u.getId());

				per.delete(u);
				
            }
		}	
		System.out.println("pasasasas");	


	}
}
