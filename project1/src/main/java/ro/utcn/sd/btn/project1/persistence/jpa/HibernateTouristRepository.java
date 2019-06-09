package ro.utcn.sd.btn.project1.persistence.jpa;

import lombok.RequiredArgsConstructor;
import ro.utcn.sd.btn.project1.model.Tourist;
import ro.utcn.sd.btn.project1.persistence.api.TouristRepository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class HibernateTouristRepository implements TouristRepository {
    private final EntityManager entityManager;

    @Override
    public List<Tourist> findAll() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Tourist> query = builder.createQuery(Tourist.class);
        query.select(query.from(Tourist.class));
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Tourist save(Tourist tourist) {
        if (tourist.getId() == null) {
            entityManager.persist(tourist);
            return tourist;
        } else {
            return entityManager.merge(tourist);
        }
    }

    @Override
    public void remove(Tourist tourist) {
        entityManager.remove(tourist);
    }

    @Override
    public Optional<Tourist> findById(int id) {
        return Optional.ofNullable(entityManager.find(Tourist.class, id));
    }
}
