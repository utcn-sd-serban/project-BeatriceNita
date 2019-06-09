package ro.utcn.sd.btn.project1.dto;

import lombok.Data;
import ro.utcn.sd.btn.project1.model.Tour;

import java.sql.Timestamp;

@Data
public class TourDTO {

    private Integer id;
    private Timestamp date;
    private int max_nr_allowed;
    private double price;
    private int guide_id;
    private int location_id;

    public static TourDTO ofEntity(Tour tour) {
        TourDTO tourDTO = new TourDTO();
        tourDTO.setId(tour.getId());
        tourDTO.setDate(tour.getDate());
        tourDTO.setMax_nr_allowed(tour.getMaxNrAllowed());
        tourDTO.setPrice(tour.getPrice());
        tourDTO.setGuide_id(tour.getGuide().getId());
        tourDTO.setLocation_id(tour.getLocation().getId());
        return tourDTO;
    }
}
