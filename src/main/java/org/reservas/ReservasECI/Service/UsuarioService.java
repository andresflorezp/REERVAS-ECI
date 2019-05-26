package org.reservas.ReservasECI.Service;

import java.util.ArrayList;
import java.util.List;

import org.reservas.ReservasECI.Entities.Usuario;
import org.reservas.ReservasECI.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
	@Autowired
	UsuarioRepository per;

	public void addUser(Usuario user) {
		per.save(user);
	}

	public List<Usuario> getAllUsuarios() {
		List<Usuario> users = new ArrayList<Usuario>();
		Iterable<Usuario> usersa =per.findAll();
		for(Usuario u:usersa) {
			users.add(u);
		}
		return users;
	}

	public List<Usuario> getAllUsuariosProfesor() {
		List<Usuario> users = new ArrayList<Usuario>();
		Iterable<Usuario> usersa =per.findAll();
		for(Usuario u:usersa) {
			if(u.getRol().equals("profesor"))users.add(u);
		}
		return users;
	}

	public Usuario getUserByCorreo(String correo) {
		List<Usuario> users = new ArrayList<Usuario>();
		Iterable<Usuario> usersa =per.findAll();
		for(Usuario u:usersa) {
			if(u.getCorreo().equals(correo))return u;
		}
		return null;
	}
	public List<Usuario> getAllUsuariosAdmin() {
		List<Usuario> users = new ArrayList<Usuario>();
		Iterable<Usuario> usersa =per.findAll();
		for(Usuario u:usersa) {
			if(u.getRol().equals("admin"))users.add(u);
		}
		return users;
	}
}
