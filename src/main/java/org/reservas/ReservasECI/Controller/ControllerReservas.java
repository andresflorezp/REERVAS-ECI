package org.reservas.ReservasECI.Controller;

import java.util.List;

import org.reservas.ReservasECI.Entities.Usuario;
import org.reservas.ReservasECI.Entities.reservas;
import org.reservas.ReservasECI.Entities.software;
import org.reservas.ReservasECI.Service.UsuarioService;
import org.reservas.ReservasECI.Service.reservasService;
import org.reservas.ReservasECI.Service.softwareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin
@RestController
@RequestMapping("/reservas")
public class ControllerReservas {

	@Autowired
	UsuarioService ser;

	@Autowired
	softwareService per;

	@Autowired
	reservasService res;
	
	@CrossOrigin
	@GetMapping
	public ResponseEntity<?> getAllUsers() {
		if (ser.getAllUsuarios().size() == 0)
			return new ResponseEntity<>("HTTP 404", HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(ser.getAllUsuarios(), HttpStatus.ACCEPTED);
	}
	

	@CrossOrigin
	@GetMapping("/userByCorreo/{correo}")
	public ResponseEntity<?> getUserCorreo(@PathVariable("correo") String correo) {
		if (ser.getUserByCorreo(correo)==null)
			return new ResponseEntity<>("HTTP 404", HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(ser.getUserByCorreo(correo), HttpStatus.ACCEPTED);
	}

	
	@CrossOrigin
	@GetMapping("/all-profe")
	public ResponseEntity<?> getAllUsersProfe() {
		if (ser.getAllUsuariosProfesor().size() == 0)
			return new ResponseEntity<>("HTTP 404", HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(ser.getAllUsuariosProfesor(), HttpStatus.ACCEPTED);
	}

	@CrossOrigin
	@GetMapping("/all-admin")
	public ResponseEntity<?> getAllUsersAdmin() {
		if (ser.getAllUsuariosAdmin().size() == 0)
			return new ResponseEntity<>("HTTP 404", HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(ser.getAllUsuariosAdmin(), HttpStatus.ACCEPTED);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/usuario")
	@ResponseBody
	public ResponseEntity<?> manejadorCreateUser(@RequestBody Usuario user) {
		try {
			ser.addUser(user);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception ex) {

			return new ResponseEntity<>("No es posible crear el recurso", HttpStatus.FORBIDDEN);
		}

	}

	/**
	 * 
	 * 
	 * Controller para sala
	 */
	@CrossOrigin
	@GetMapping("/software/{sala}")
	public ResponseEntity<?> getSoftwareBySala(@PathVariable("sala") String sala) {
		if (per.getSoftwarerBySala(sala).size() == 0)
			return new ResponseEntity<>("HTTP 404", HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(per.getSoftwarerBySala(sala), HttpStatus.ACCEPTED);
	}


	@CrossOrigin
	@GetMapping("/all-software")
	public ResponseEntity<?> getAllSoftware() {
		if (per.getAllsoftware().size() == 0)
			return new ResponseEntity<>("HTTP 404", HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(per.getAllsoftware(), HttpStatus.ACCEPTED);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/add-software")
	@ResponseBody
	public ResponseEntity<?> manejadorCreateSoftware(@RequestBody software soft) {
		try {
			per.addSoftware(soft);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception ex) {
			return new ResponseEntity<>("No es posible crear el recurso", HttpStatus.FORBIDDEN);
		}

	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/delete-software/{id}")
	public ResponseEntity<?> manejadorDeleteSoftware(@PathVariable("id") Long id) {
		try {
			per.deleteSoftware(id);
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		} catch (Exception ex) {

			return new ResponseEntity<>("No es posible crear el recurso", HttpStatus.FORBIDDEN);
		}

	}


	/**
	 * 
	 * Controller Para reservas
	 * 
	 */


	@CrossOrigin
	@GetMapping("/reserva/{dia}/{mes}/{ano}")
	public ResponseEntity<?> getSoftwareByDate(@PathVariable("dia") String dia,@PathVariable("mes") String mes,@PathVariable("ano") String ano) {
		if (res.getReservaDiaMesAno(dia, mes, ano).size() == 0)
			return new ResponseEntity<>("HTTP 404", HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(res.getReservaDiaMesAno(dia, mes, ano), HttpStatus.ACCEPTED);
	}

	@CrossOrigin
	@GetMapping("/reserva/quien/{quien}")
	public ResponseEntity<?> getReservaByQuien(@PathVariable("quien") String quien) {
		if (res.getReservaQuien(quien).size() == 0)
			return new ResponseEntity<>("HTTP 404", HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(res.getReservaQuien(quien), HttpStatus.ACCEPTED);
	}


	@CrossOrigin
	@GetMapping("/all-reservas")
	public ResponseEntity<?> getAllReservas() {
		if (res.getAllReservas().size() == 0)
			return new ResponseEntity<>("HTTP 404", HttpStatus.NOT_FOUND);
		return new ResponseEntity<>(res.getAllReservas(), HttpStatus.ACCEPTED);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/add-reserva")
	@ResponseBody
	public ResponseEntity<?> manejadorCreateReserva(@RequestBody reservas rese) {
		try {
			res.addReserva(rese);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception ex) {

			return new ResponseEntity<>("No es posible crear el recurso", HttpStatus.FORBIDDEN);
		}

	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/delete-reserva/{dia}/{mes}/{ano}/{hora}/{software}/{quien}/{sala}")
	public ResponseEntity<?> manejadorDeleteReserva(@PathVariable("dia") String dia,@PathVariable("mes") String mes,@PathVariable("ano") String ano,@PathVariable("hora") String hora,@PathVariable("software") String software,@PathVariable("quien") String quien,@PathVariable("sala") String sala) {
		try {
			System.out.println("SI'PASO POR BORRAR");
			res.deleteReserva(dia, mes, ano, hora, software, quien, sala);
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		} catch (Exception ex) {

			return new ResponseEntity<>("No es posible crear el recurso", HttpStatus.FORBIDDEN);
		}

	}



}
