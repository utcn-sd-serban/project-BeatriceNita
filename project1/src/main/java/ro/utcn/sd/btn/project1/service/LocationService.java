package ro.utcn.sd.btn.project1.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.sd.btn.project1.model.Location;
import ro.utcn.sd.btn.project1.persistence.api.LocationRepository;
import ro.utcn.sd.btn.project1.persistence.api.RepositoryFactory;

@Service
@RequiredArgsConstructor
public class LocationService {

    private final RepositoryFactory repositoryFactory;

    @Transactional
    public Location addLocation(Integer id, String name) {
        Location location = new Location(id, name);
        return repositoryFactory.createLocationRepository().save(location);
    }

    @Transactional
    public Location findLocation(String name) {
        LocationRepository repository = repositoryFactory.createLocationRepository();
        Location location = repository.findByName(name);
        return location;
    }

    @Transactional
    public Location findById(int id) {
        LocationRepository repository = repositoryFactory.createLocationRepository();
        Location location = repository.findByIdAgain(id);
        return location;
    }
}