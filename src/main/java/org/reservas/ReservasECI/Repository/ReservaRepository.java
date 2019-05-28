package org.reservas.ReservasECI.Repository;

import org.reservas.ReservasECI.Entities.reservas;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservaRepository extends CrudRepository<reservas, Long>{

}