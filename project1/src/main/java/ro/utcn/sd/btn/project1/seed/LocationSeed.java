package ro.utcn.sd.btn.project1.seed;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.sd.btn.project1.model.Location;
import ro.utcn.sd.btn.project1.persistence.api.LocationRepository;
import ro.utcn.sd.btn.project1.persistence.api.RepositoryFactory;

@Component
@RequiredArgsConstructor
// The Order ensures that this command line runner is ran first (before the ConsoleController)
@Order(Ordered.HIGHEST_PRECEDENCE)
public class LocationSeed implements CommandLineRunner {
    private final RepositoryFactory factory;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        LocationRepository locationRepository = factory.createLocationRepository();

        if (locationRepository.findAll().isEmpty()) {
            locationRepository.save(new Location(1, "London"));
            locationRepository.save(new Location(2, "Paris"));
            locationRepository.save(new Location(3, "Rome"));
        }
    }
}