package ro.utcn.sd.btn.project1.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.sd.btn.project1.dto.TourDTO;
import ro.utcn.sd.btn.project1.model.Tour;
import ro.utcn.sd.btn.project1.persistence.api.RepositoryFactory;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TourService {

    private final RepositoryFactory repositoryFactory;

    @Transactional
    public List<TourDTO> listAll() {
        return repositoryFactory.createTourRepository().findAll().stream()
                .map(this::updateTour)
                .map(TourDTO::ofEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public Tour updateTour(Tour tour) {
        tour.setGuide(repositoryFactory.createGuideRepository().findById(tour.getGuide().getId()).get());
        return tour;
    }

    @Transactional
    public TourDTO create(TourDTO dto) {
        Tour tour = new Tour();
        tour.setId(dto.getId());
        tour.setDate(dto.getDate());
        tour.setMaxNrAllowed(dto.getMax_nr_allowed());
        tour.setPrice(dto.getPrice());
        tour.setGuide(repositoryFactory.createGuideRepository().findByIdAgain(dto.getGuide_id()));
        tour.setLocation(repositoryFactory.createLocationRepository().findByIdAgain(dto.getLocation_id()));
        TourDTO output = TourDTO.ofEntity(repositoryFactory.createTourRepository().save(tour));
        return output;
    }

    @Transactional
    public void remove(int id) {
        Tour tour = repositoryFactory.createTourRepository().findByIdAgain(id);
        repositoryFactory.createTourRepository().remove(tour);
    }

    @Transactional
    public TourDTO findByPrice(double price) {
        Tour tour = repositoryFactory.createTourRepository().findByPrice(price);
        return TourDTO.ofEntity(tour);
    }

}
