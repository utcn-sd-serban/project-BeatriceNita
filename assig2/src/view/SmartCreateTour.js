import React, { Component } from "react";
import model from "../model/model";
import CreateTour from "./CreateTour";
import createTourPresenter from "../presenter/createTourPresenter";

const mapModelStateToComponentState = modelState => ({
    date: modelState.newTour.date,
    max_nr_allowed: modelState.newTour.max_nr_allowed,
    price: modelState.newTour.price,
    guide_id: modelState.newTour.guide_id,
    location_id: modelState.newTour.location_id
});

export default class SmartCreateTour extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <CreateTour
                onCreateTour={createTourPresenter.onCreateTour}
                onChange={createTourPresenter.onChange}
                date={this.state.date}
                max_nr_allowed={this.state.max_nr_allowed}
                price={this.state.price}
                guide_id={this.state.guide_id}
                location_id={this.state.location_id} />
        );
    }
}