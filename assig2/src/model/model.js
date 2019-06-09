import { EventEmitter } from "events";
import RestUser from "../rest/RestUser";
//import WebSocketListener from "../ws/WebSocketListener";

const client = new RestUser("otto1", "food1");
//const listener = new WebSocketListener("otto", "food");

class Model extends EventEmitter {
    constructor() {
        super();
        this.state = {
            tours: [{
                date: "01/06/2019",
                max_nr_allowed: 30,
                price: 15,
                guide_id: 1,
                location_id: 1
            }],
            newTour: {
                date: "",
                max_nr_allowed: "",
                price: "",
                guide_id: "",
                location_id: ""

            },
            selectedTourIndex: -1,
            searchTours:{},
            toSearch:""
        };
    }

    changeSelectedToursIndex(index) {
        this.state = {
            ...this.state,
            selectedTourIndex: index
        };
        this.emit("change", this.state);
    }

    loadTours(){
        return client.loadAllTours().then(tours => {
            this.state = { 
                ...this.state, 
                tours: tours
            };
            this.emit("change", this.state);
        })
    }

    addTour(date, max_nr_allowed,price,guide_id,location_id){
        return client.createTour(date, max_nr_allowed,price,guide_id,location_id).then(tour=>{
            this.state = {
                ...this.state,
                tours: this.state.tours.concat([tour])
            };
            console.log(tour)
            this.emit("change", this.state);
    });
    }

    getTourId(index){
        return this.state.tours[index].id;
    }

    removeTour(index){
        var id = this.getTourId(index);
        return client.deleteTour(id);
    }

    changeNewTourProperty(property, value) {
        this.state = {
            ...this.state,
            newTour: {
                ...this.state.newTour,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    changeToSearch(property, value) {
        this.state = {
            ...this.state,
           [property]:value
        };
        this.emit("change", this.state);
    }

    newTourList(tours){
        this.state = {
            ...this.state,
            tours:tours
        };
        this.emit("change", this.state);

    }

    loadByPrice(price){
        const result=this.state.tours.filter(post=>post.price===this.state.toSearch);
        return client.loadToursByPrice(price).then(
             this.state = {
            ...this.state,
            searchTours:result
            });
    }

    findByPrice(){ 
        debugger;
        const result=this.state.tours.filter(post=>post.price===this.state.toSearch)
        this.state = {
     ...this.state,
     searchTours:result
        };
    }

}

//singleton
const model = new Model();

export default model;