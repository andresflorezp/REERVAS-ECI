package org.reservas.ReservasECI.Service;

import java.util.ArrayList;
import java.util.List;
import org.reservas.ReservasECI.Entities.software;
import org.reservas.ReservasECI.Repository.SoftwareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class softwareService {
    @Autowired
    SoftwareRepository per;

    public void addSoftware(software user) {
        per.save(user);
    }

    public List<software> getAllsoftware() {
        List<software> softwares = new ArrayList<software>();
        Iterable<software> softwarea = per.findAll();
        for (software u : softwarea) {
            softwares.add(u);
        }
        return softwares;
    }

    public List<software> getSoftwarerBySala(String sala) {
        List<software> softwares = new ArrayList<software>();
        Iterable<software> softwarea = per.findAll();
        for (software u : softwarea) {
            if (u.getSala().equals(sala)) {
                softwares.add(u);
            }
        }
        return softwares;

    }

    public void deleteSoftware(Long id){
        per.deleteById(id);
    }

}
