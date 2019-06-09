package ro.utcn.sd.btn.project1.persistence.jpa;

import lombok.RequiredArgsConstructor;
import ro.utcn.sd.btn.project1.model.Location;
import ro.utcn.sd.btn.project1.model.Tour;
import ro.utcn.sd.btn.project1.persistence.api.TourRepository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class HibernateTourRepository implements TourRepository {
    private final EntityManager entityManager;

    @Override
    public List<Tour> findAll() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Tour> query = builder.createQuery(Tour.class);
        query.select(query.from(Tour.class));
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Tour save(Tour tour) {
        if (tour.getId() == null) {
            entityManager.persist(tour);
            return tour;
        } else {
            return entityManager.merge(tour);
        }
    }

    @Override
    public void remove(Tour tour) {
        entityManager.remove(tour);
    }

    @Override
    public Optional<Tour> findById(int id) {
        return Optional.ofNullable(entityManager.find(Tour.class, id));
    }

    @Override
    public Tour findByPrice(double price) {
        return entityManager.find(Tour.class, price);
    }

    @Override
    public Tour findByIdAgain(int id) {
        return entityManager.find(Tour.class, id);
    }
}
