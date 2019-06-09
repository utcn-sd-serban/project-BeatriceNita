package ro.utcn.sd.btn.project1.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ro.utcn.sd.btn.project1.dto.TourDTO;
import ro.utcn.sd.btn.project1.service.TourService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ToursController {
    private final TourService tourService;

    @GetMapping("/tours")
    public List<TourDTO> readAll() {
        return tourService.listAll();
    }

    @PostMapping("/tours")
    public TourDTO create(@RequestBody TourDTO dto) {
        return tourService.create(dto);
    }

    @DeleteMapping("/tours/{id}")
    public void delete(@PathVariable int id) {
        tourService.remove(id);
    }

    @GetMapping(value="/tours",params="price")
    public TourDTO searchByPrice(@RequestParam("price") double price) {
        return tourService.findByPrice(price);
    }


}
