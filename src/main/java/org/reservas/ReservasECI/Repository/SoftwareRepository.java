package org.reservas.ReservasECI.Repository;

import org.reservas.ReservasECI.Entities.software;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SoftwareRepository extends CrudRepository<software, Long>{

}