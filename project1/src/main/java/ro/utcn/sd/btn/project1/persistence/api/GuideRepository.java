package ro.utcn.sd.btn.project1.persistence.api;

import ro.utcn.sd.btn.project1.model.Guide;

import java.util.List;
import java.util.Optional;

public interface GuideRepository {

    Guide save(Guide guide);

    Optional<Guide> findById(int id);

    Guide findByName(String name);

    Guide findByIdAgain(int id);

    void remove(Guide guide);

    List<Guide> findAll();
}
