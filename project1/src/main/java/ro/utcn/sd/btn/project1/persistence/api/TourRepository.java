package ro.utcn.sd.btn.project1.persistence.api;

import ro.utcn.sd.btn.project1.model.Tour;

import java.util.List;
import java.util.Optional;

public interface TourRepository {

    Tour save(Tour tour);

    Optional<Tour> findById(int id);

    Tour findByPrice(double price);

    Tour findByIdAgain(int id);

    void remove(Tour tour);

    List<Tour> findAll();
}
