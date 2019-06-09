package ro.utcn.sd.btn.project1.persistence.api;

public interface RepositoryFactory {

    TouristRepository createTouristRepository();

    GuideRepository createGuideRepository();

    TourRepository createTourRepository();

    LocationRepository createLocationRepository();
}
