package ro.utcn.sd.btn.project1.persistence.jpa;

import lombok.RequiredArgsConstructor;
import ro.utcn.sd.btn.project1.model.Location;
import ro.utcn.sd.btn.project1.persistence.api.LocationRepository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class HibernateLocationRepository implements LocationRepository {
    private final EntityManager entityManager;

    @Override
    public List<Location> findAll() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Location> query = builder.createQuery(Location.class);
        query.select(query.from(Location.class));
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Location findByName(String name) {
        return entityManager.find(Location.class, name);
    }

    @Override
    public Location save(Location location) {
        if (location.getId() == null) {
            entityManager.persist(location);
            return location;
        } else {
            return entityManager.merge(location);
        }
    }

    @Override
    public void remove(Location location) {
        entityManager.remove(location);
    }

    @Override
    public Optional<Location> findById(int id) {
        return Optional.ofNullable(entityManager.find(Location.class, id));
    }

    @Override
    public Location findByIdAgain(int id) {
        return entityManager.find(Location.class, id);
    }
}
