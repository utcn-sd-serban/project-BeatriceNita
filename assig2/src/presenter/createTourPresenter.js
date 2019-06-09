import model from "../model/model";

class CreateTourPresenter {
    onCreateTour() {
        model.addTour( model.state.newTour.date, model.state.newTour.max_nr_allowed, model.state.newTour.price, model.state.newTour.guide_id,model.state.newTour.location_id);
        model.changeNewTourProperty("date", "");
        model.changeNewTourProperty("max_nr_allowed", "");
        model.changeNewTourProperty("price", "");
        model.changeNewTourProperty("guide_id", "");
        model.changeNewTourProperty("location_id", "");
       
        window.location.assign("#/list-tours");
    }

    onChange(property, value) {
        model.changeNewTourProperty(property, value);
    }
}

const createTourPresenter = new CreateTourPresenter();

export default createTourPresenter;