import model from "../model/model";

class ToursListPresenter {
   onCreateTour() {
      model.addTour(model.state.newTour.date,
      model.state.newTour.max_nr_allowed,
      model.state.newTour.price,
      model.state.newTour.guide_id,
      model.state.newTour.location_id
   );
   }

   onAddTour(){
      window.location.assign("#/create-tour");
   }

   onInit(){
      model.loadTours();
   }
   
   onListTours() {
      window.location.assign("#/list-tours");
   }
   
   onFilterTours() {
      window.location.assign("#/filter-tours");
   }

   onDeleteTour(index) {
      model.removeTour(index).then(() => {
         window.location.assign("#/list-tours/" + index);
      });
   }

   onFilteredTours(){
      model.findByPrice();
      window.location.assign("#/filter-tours-yes");
   }

   changeToSearch(property, value){
      model.changeToSearch(property, value);
   }
   
}

const toursListPresenter = new ToursListPresenter();

export default toursListPresenter;