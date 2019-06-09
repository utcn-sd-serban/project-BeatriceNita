package ro.utcn.sd.btn.project1.persistence.api;

import ro.utcn.sd.btn.project1.model.Tourist;

import java.util.List;
import java.util.Optional;

public interface TouristRepository {

    Tourist save(Tourist tourist);

    Optional<Tourist> findById(int id);

    void remove(Tourist tourist);

    List<Tourist> findAll();
}
