package org.reservas.ReservasECI.Controller;

import java.util.List;

import org.reservas.ReservasECI.Entities.Usuario;
import org.reservas.ReservasECI.Service.UsuarioService;
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

}
