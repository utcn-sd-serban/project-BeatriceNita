package ro.utcn.sd.btn.project1.persistence.jpa;

import lombok.RequiredArgsConstructor;
import ro.utcn.sd.btn.project1.model.Guide;
import ro.utcn.sd.btn.project1.persistence.api.GuideRepository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public class HibernateGuideRepository implements GuideRepository {
    private final EntityManager entityManager;

    @Override
    public List<Guide> findAll() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Guide> query = builder.createQuery(Guide.class);
        query.select(query.from(Guide.class));
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public Guide save(Guide guide) {
        if (guide.getId() == null) {
            entityManager.persist(guide);
            return guide;
        } else {
            return entityManager.merge(guide);
        }
    }

    @Override
    public void remove(Guide guide) {
        entityManager.remove(guide);
    }

    @Override
    public Optional<Guide> findById(int id) {
        return Optional.ofNullable(entityManager.find(Guide.class, id));
    }

    @Override
    public Guide findByName(String name) {
        return entityManager.find(Guide.class, name);
    }

    @Override
    public Guide findByIdAgain(int id) {
        return entityManager.find(Guide.class, id);
    }
}
