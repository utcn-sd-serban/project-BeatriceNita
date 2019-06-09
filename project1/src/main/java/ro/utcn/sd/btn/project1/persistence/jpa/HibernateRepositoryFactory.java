package ro.utcn.sd.btn.project1.persistence.jpa;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ro.utcn.sd.btn.project1.persistence.api.*;

import javax.persistence.EntityManager;

@Component
@RequiredArgsConstructor
public class HibernateRepositoryFactory implements RepositoryFactory {
    private final EntityManager entityManager;

    @Override
    public TouristRepository createTouristRepository() {
        return new HibernateTouristRepository(entityManager);
    }

    @Override
    public GuideRepository createGuideRepository() {
        return new HibernateGuideRepository(entityManager);
    }

    @Override
    public TourRepository createTourRepository() {
        return new HibernateTourRepository(entityManager);
    }

    @Override
    public LocationRepository createLocationRepository() {
        return new HibernateLocationRepository(entityManager);
    }

}
