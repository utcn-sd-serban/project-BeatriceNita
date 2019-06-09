package ro.utcn.sd.btn.project1.persistence.api;

import ro.utcn.sd.btn.project1.model.Location;

import java.util.List;
import java.util.Optional;

public interface LocationRepository {

    Location save(Location location);

    Optional<Location> findById(int id);

    Location findByIdAgain(int id);

    void remove(Location location);

    List<Location> findAll();

    Location findByName(String name);
}
