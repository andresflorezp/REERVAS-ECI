package org.reservas.ReservasECI.Repository;


import org.reservas.ReservasECI.Entities.Usuario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Long>{

}